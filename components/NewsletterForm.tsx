"use client";

import { FormEvent, useState } from "react";
import { isWorkEmail, WORK_EMAIL_ERROR } from "@/lib/work-email";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") || "").trim();

    if (!isWorkEmail(email)) {
      setStatus("error");
      setMessage(WORK_EMAIL_ERROR);
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "Website footer" }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        alreadySubscribed?: boolean;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      form.reset();
      setStatus("success");
      setMessage(
        result.alreadySubscribed
          ? "You're already subscribed. Thank you for staying with us."
          : "Thank you for subscribing. Investera insights will arrive in your inbox.",
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "We couldn't subscribe you right now.",
      );
    }
  }

  return (
    <div className="mt-5 max-w-[320px]">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Work email
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Work email"
          disabled={status === "loading"}
          className="h-[40px] w-full rounded-full bg-transparent px-4 text-[14px] text-white placeholder:text-white/45 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-[40px] shrink-0 rounded-full bg-[#CCA400] px-5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {message && (
        <p
          role="status"
          className={`mt-2 px-1 text-[13px] leading-[1.4] ${
            status === "success" ? "text-[#CCA400]" : "text-[#FCA5A5]"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
