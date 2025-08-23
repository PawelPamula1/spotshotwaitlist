"use client";

import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations("Terms");

  return (
    <main className="min-h-screen bg-[#0b0f12] text-[#e6edf3]">
      <section className="mx-auto w-full max-w-3xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-[#9aa4af]">{t("lastUpdated")}</p>

        <div className="mt-8 space-y-10">
          <p className="text-[#c9d1d9] leading-7">{t("intro")}</p>

          <Section title={t("service.title")}>{t("service.body")}</Section>

          <Section title={t("eligibility.title")}>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("eligibility.age")}</li>
              <li>{t("eligibility.account")}</li>
              <li>{t("eligibility.delete")}</li>
            </ul>
          </Section>

          <Section title={t("content.title")}>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("content.ownership")}</li>
              <li>{t("content.license")}</li>
              <li>{t("content.responsibility")}</li>
              <li>{t("content.removal")}</li>
            </ul>
          </Section>

          <Section title={t("prohibited.title")}>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("prohibited.illegal")}</li>
              <li>{t("prohibited.security")}</li>
              <li>{t("prohibited.scraping")}</li>
            </ul>
          </Section>

          <Section title={t("safety.title")}>{t("safety.body")}</Section>

          <Section title={t("ip.title")}>{t("ip.body")}</Section>

          <Section title={t("disclaimer.title")}>
            {t("disclaimer.body")}
          </Section>

          <Section title={t("changes.title")}>{t("changes.body")}</Section>

          <Section title={t("contact.title")}>{t("contact.body")}</Section>

          <hr className="border-[#1b2730]" />

          <p className="text-sm text-[#9aa4af]">{t("footer")}</p>
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
