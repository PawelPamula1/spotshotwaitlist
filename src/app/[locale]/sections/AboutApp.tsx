"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const AboutApp = () => {
  const t = useTranslations("AboutApp");

  return (
    <section className="relative bg-[#011e49] text-white px-6 py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-2">
        {/* Text content */}
        <div className="text-center lg:text-left max-w-lg space-y-6">
          <h2 className="text-3xl font-semibold">{t("title")}</h2>
          <p className="text-lg font-light">{t("subtitle")}</p>

          <p className="text-base leading-relaxed">{t("p1")}</p>
          <p className="text-base leading-relaxed">{t("p2")}</p>
          <p className="text-base leading-relaxed">{t("p3")}</p>
          <p className="font-semibold text-white mt-4">{t("cta")}</p>
        </div>

        {/* App Mockup */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/about/background.png"
              alt="Map pattern"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="h-[400px] w-160 ">
            <Image
              src="/about/full-map.png"
              alt="App mockup"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutApp;
