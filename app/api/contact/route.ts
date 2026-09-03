import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";
import type { ContactPayload } from "@/lib/contact-email-template";

export const runtime = "nodejs";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

    await sendContactEmail(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    const code =
      typeof error === "object" && error && "code" in error
        ? String((error as { code?: string }).code)
        : undefined;
    console.error("[contact] Failed to send email:", code ?? "", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to send your message right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
