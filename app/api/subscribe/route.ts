import { NextResponse } from "next/server";
import { sendSubscriberNotification } from "@/lib/mail";
import { getDb } from "@/lib/mongodb";
import { isValidEmail, isWorkEmail, WORK_EMAIL_ERROR } from "@/lib/work-email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let email = "";
  let source = "Website footer";

  try {
    const body = (await request.json()) as { email?: unknown; source?: unknown };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    if (typeof body.source === "string" && body.source.trim()) {
      source = body.source.trim().slice(0, 120);
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!isWorkEmail(email)) {
    return NextResponse.json({ ok: false, error: WORK_EMAIL_ERROR }, { status: 400 });
  }

  let stored = false;
  let alreadySubscribed = false;

  try {
    const db = await getDb();
    if (db) {
      const subscribers = db.collection("subscribers");
      await subscribers.createIndex({ email: 1 }, { unique: true });
      const result = await subscribers.updateOne(
        { email },
        {
          $setOnInsert: { email, source, status: "subscribed", createdAt: new Date() },
          $set: { lastSeenAt: new Date() },
        },
        { upsert: true },
      );
      stored = true;
      alreadySubscribed = result.upsertedCount === 0;
    }
  } catch (error) {
    console.error("[subscribe] Failed to store subscriber:", error);
  }

  if (alreadySubscribed) {
    return NextResponse.json({ ok: true, alreadySubscribed: true });
  }

  let notified = false;
  try {
    await sendSubscriberNotification(email, source);
    notified = true;
  } catch (error) {
    console.error("[subscribe] Failed to send notification email:", error);
  }

  if (!stored && !notified) {
    return NextResponse.json(
      { ok: false, error: "We couldn't complete your subscription. Please try again shortly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
