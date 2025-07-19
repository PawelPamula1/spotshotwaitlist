"use client";

import React from "react";
import { useTranslations } from "next-intl";
import JoinButton from "../components/JoinButton";

const JoinCTA = () => {
  const t = useTranslations("JoinCTA");

  return (
    <section className="bg-[#051D57] py-16 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-medium">{t("title")}</h2>
        <p className="mt-6 text-lg lg:text-2xl max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="flex justify-center">
          <JoinButton />
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
