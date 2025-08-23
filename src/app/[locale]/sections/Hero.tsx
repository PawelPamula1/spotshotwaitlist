"use client";

import Image from "next/image";
import React from "react";
import JoinButton from "../components/JoinButton";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../components/LocaleSwitcher";

const Hero = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="relative w-full h-screen">
      {/* Background image - Mobile */}
      <Image
        src="/hero-mobile.png"
        alt="Paris view with Eiffel Tower - mobile"
        fill
        className="object-cover block md:hidden"
        priority
      />

      {/* Background image - Desktop */}
      <Image
        src="/hero-desktop.png"
        alt="Paris view with Eiffel Tower - desktop"
        fill
        className="object-cover hidden md:block"
        priority
      />

      {/* Top bar: logo + language switcher */}
      <div className="relative z-30 px-6 py-4 flex justify-between items-center">
        <span className="text-black text-xl md:text-2xl font-serif md:bg-transparent px-3 py-1 rounded md:rounded-none">
          PhotoSpots
        </span>
        <LocaleSwitcher />
      </div>

      {/* Centered content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight md:leading-tight">
          {t("title")}
        </h1>

        <p className="text-base md:text-lg mt-4 max-w-sm md:max-w-md">
          {t("description")}
        </p>

        <div className="mt-6 w-full max-w-xl">
          <JoinButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
