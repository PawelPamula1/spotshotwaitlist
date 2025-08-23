"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { posthog } from "posthog-js";

const JoinButton = () => {
  const t = useTranslations("JoinForm");

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
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
        posthog.capture("New Email", { property: email });
      } else {
        const data = await res.json();
        setError(data.error?.message || t("error.generic"));
      }
    } catch (err) {
      setError(t("error.generic"));
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full max-w-xl mx-auto">
      {submitted ? (
        <p className="w-full px-4 py-3 text-center rounded-xl bg-[#fff] text-[#333]">
          {t("success")}
        </p>
      ) : (
        <div className="bg-[#f2eafa] p-1 rounded-xl">
          <div className="flex flex-col md:flex-row items-stretch">
            <input
              type="email"
              placeholder={t("placeholder")}
              className="w-full px-4 py-3 text-center md:text-left md:rounded-bl-xl bg-[#f2eafa] text-[#333] placeholder:text-gray-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full md:w-60 py-3 px-6 bg-[#4a5c6a] text-white font-medium rounded-xl md:rounded-r-xl"
            >
              {t("button")}
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </div>
      )}
    </form>
  );
};

export default JoinButton;
