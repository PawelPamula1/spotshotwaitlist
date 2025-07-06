import Image from "next/image";
import React from "react";
import JoinButton from "../components/JoinButton";

const Hero = () => {
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

      {/* Logo in top-left corner */}
      <div className="absolute top-6 left-6 z-30">
        <span className="text-black text-xl md:text-2xl font-serif md:bg-transparent px-3 py-1 rounded md:rounded-none">
          SpotShot
        </span>
      </div>

      {/* Centered content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight md:leading-tight">
          Find Iconic Photo <br /> Spots Anywhere <br /> in the World
        </h1>

        <p className="text-base md:text-lg mt-4 max-w-sm md:max-w-md">
          Join the waitlist and be the first to explore hidden gems for your
          next trip
        </p>

        <div className="mt-6 w-full max-w-xl">
          <JoinButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
