"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { posthog } from "posthog-js";
const JoinButton = () => {
  const t = useTranslations("JoinForm");

  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!accepted) {
      setError(t("error.accept"));
      return;
    }

    try {
      const res = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_KEY}`,
          },
          body: JSON.stringify({
            email,
            groups: [process.env.NEXT_PUBLIC_MAILERLITE_GROUP_ID],
          }),
        }
      );

      if (res.ok) {
        setSubmitted(true);
        posthog?.capture("waitlist_signup", {
          source: "waitlist_form",
          consent: true,
        });
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error?.message || t("error.generic"));
      }
    } catch (err) {
      setError(t("error.generic"));
      console.error(err);
    }
  };

  const isDisabled = !email || !accepted;

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full max-w-xl mx-auto">
      {submitted ? (
        <p className="w-full px-4 py-3 text-center rounded-xl bg-white text-[#333]">
          {t("success")}
        </p>
      ) : (
        <>
          <div className="bg-[#f2eafa] p-3 rounded-xl">
            <div className="flex flex-col md:flex-row items-stretch gap-2">
              <input
                type="email"
                placeholder={t("placeholder")}
                className="w-full px-4 py-3 text-center md:text-left md:rounded-l-xl bg-[#f2eafa] text-[#333] placeholder:text-gray-600 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                inputMode="email"
              />
              <button
                type="submit"
                disabled={isDisabled}
                className={`w-full md:w-60 py-3 px-6 rounded-xl md:rounded-r-xl font-medium text-white transition ${
                  isDisabled
                    ? "bg-[#7e8a93] cursor-not-allowed"
                    : "bg-[#4a5c6a] hover:opacity-95"
                }`}
              >
                {t("button")}
              </button>
            </div>
          </div>

          <div className="mt-3 bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-[#e6e6e6]">
            <label className="flex items-start gap-3 text-sm text-[#334155]">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-[#4a5c6a]"
                aria-required="true"
                aria-invalid={!accepted}
              />
              <span>
                {t.rich("consent", {
                  terms: (chunks: string) => (
                    <a
                      href="/terms"
                      className="underline underline-offset-2 hover:text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {chunks}
                    </a>
                  ),
                  privacy: (chunks: string) => (
                    <a
                      href="/privacy"
                      className="underline underline-offset-2 hover:text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </span>
            </label>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </>
      )}
    </form>
  );
};

export default JoinButton;
