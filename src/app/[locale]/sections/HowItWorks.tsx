"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const HowItWorks = () => {
  const t = useTranslations("HowItWorks");

  const steps = [
    {
      title: t("step1.title"),
      description: t("step1.description"),
      image: "/howitworks/explore-spots.png",
      alt: t("step1.alt"),
    },
    {
      title: t("step2.title"),
      description: t("step2.description"),
      image: "/howitworks/full-map.png",
      alt: t("step2.alt"),
    },
    {
      title: t("step3.title"),
      description: t("step3.description"),
      image: "/howitworks/spot-screen.png",
      alt: t("step3.alt"),
    },
    {
      title: t("step4.title"),
      description: t("step4.description"),
      image: "/howitworks/add-spot.png",
      alt: t("step4.alt"),
    },
    {
      title: t("step5.title"),
      description: t("step5.description"),
      image: "/howitworks/saved-spots.png",
      alt: t("step5.alt"),
    },
  ];

  return (
    <section className="bg-[#f1f5f4] py-16 px-6 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#4a5c6a] mb-14">
        {t("title")}
      </h2>

      <div className="grid gap-16 max-w-7xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {steps.slice(0, 3).map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-sm mx-auto"
          >
            <div className="relative w-full h-[400px] mb-6">
              <Image
                src={step.image}
                alt={step.alt}
                fill
                className="object-contain drop-shadow"
                sizes="(max-width: 640px) 90vw, (max-width: 1280px) 30vw, 18vw"
                priority={index < 2}
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#4a5c6a] mb-4">
              {step.title}
            </h3>
            <p className="text-[#4a5c6a] text-base md:text-lg leading-relaxed px-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-16 max-w-4xl mx-auto sm:grid-cols-1 md:grid-cols-2">
        {steps.slice(3).map((step, index) => (
          <div
            key={index + 3}
            className="flex flex-col items-center max-w-sm mx-auto"
          >
            <div className="relative w-full h-[400px] mb-6">
              <Image
                src={step.image}
                alt={step.alt}
                fill
                className="object-contain drop-shadow"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 20vw"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#4a5c6a] mb-4">
              {step.title}
            </h3>
            <p className="text-[#4a5c6a] text-base md:text-lg leading-relaxed px-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
