"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("Privacy");

  return (
    <main className="min-h-screen bg-[#0b0f12] text-[#e6edf3]">
      <section className="mx-auto w-full max-w-3xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-[#9aa4af]">{t("lastUpdated")}</p>

        <div className="mt-8 space-y-10">
          <p className="text-[#c9d1d9] leading-7">{t("intro")}</p>

          <Section title={t("who.title")}>{t("who.body")}</Section>

          <Section title={t("what.title")}>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("what.email")}</li>
              <li>{t("what.account")}</li>
              <li>{t("what.content")}</li>
              <li>{t("what.location")}</li>
              <li>{t("what.tech")}</li>
            </ul>
          </Section>

          <Section title={t("why.title")}>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("why.provide")}</li>
              <li>{t("why.updates")}</li>
              <li>{t("why.security")}</li>
              <li>{t("why.improve")}</li>
            </ul>
          </Section>

          <Section title={t("legal.title")}>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("legal.consent")}</li>
              <li>{t("legal.contract")}</li>
              <li>{t("legal.legit")}</li>
            </ul>
          </Section>

          <Section title={t("processors.title")}>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("processors.supabase")}</li>
              <li>{t("processors.cloudinary")}</li>
              <li>{t("processors.posthog")}</li>
              <li>{t("processors.note")}</li>
            </ul>
          </Section>

          <Section title={t("retention.title")}>{t("retention.body")}</Section>

          <Section title={t("rights.title")}>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("rights.access")}</li>
              <li>{t("rights.rectify")}</li>
              <li>{t("rights.delete")}</li>
              <li>{t("rights.restrict")}</li>
              <li>{t("rights.portability")}</li>
              <li>{t("rights.withdraw")}</li>
              <li>{t("rights.complaint")}</li>
              <li>{t("rights.contact")}</li>
            </ul>
          </Section>

          <Section title={t("transfers.title")}>{t("transfers.body")}</Section>

          <Section title={t("security.title")}>{t("security.body")}</Section>

          <Section title={t("children.title")}>{t("children.body")}</Section>

          <Section title={t("changes.title")}>{t("changes.body")}</Section>

          <hr className="border-[#1b2730]" />

          <p className="text-sm text-[#9aa4af]">{t("questions")}</p>
        </div>
      </section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 text-[#c9d1d9] leading-7">{children}</div>
    </section>
  );
}
