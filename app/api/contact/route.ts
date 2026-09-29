import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";
import type { ContactPayload } from "@/lib/contact-email-template";
import { getDb } from "@/lib/mongodb";
import { isValidEmail, isWorkEmail, WORK_EMAIL_ERROR } from "@/lib/work-email";

export const runtime = "nodejs";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      firstName: asString(body.firstName),
      lastName: asString(body.lastName),
      email: asString(body.email),
      phone: asString(body.phone) || undefined,
      message: asString(body.message) || undefined,
      source: asString(body.source) || "Website contact form",
    };

    if (!payload.firstName || !payload.lastName || !payload.email) {
      return NextResponse.json(
        { ok: false, error: "First name, last name, and email are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (!isWorkEmail(payload.email)) {
      return NextResponse.json(
        { ok: false, error: WORK_EMAIL_ERROR },
        { status: 400 },
      );
    }

    let stored = false;
    try {
      const db = await getDb();
      if (db) {
        await db.collection("contact_submissions").insertOne({
          ...payload,
          email: payload.email.toLowerCase(),
          status: "new",
          createdAt: new Date(),
        });
        stored = true;
      }
    } catch (error) {
      console.error("[contact] Failed to store submission:", error);
    }

    try {
      await sendContactEmail(payload);
    } catch (error) {
      const code =
        typeof error === "object" && error && "code" in error
          ? String((error as { code?: string }).code)
          : undefined;
      console.error("[contact] Failed to send email:", code ?? "", error);
      // The enquiry is still safe if it was stored, so only fail when nothing captured it.
      if (!stored) {
        throw error;
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to send your message right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
