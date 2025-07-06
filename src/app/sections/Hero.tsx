import Image from "next/image";
import React from "react";
import JoinButton from "../components/JoinButton";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background image */}
      <Image
        src="/hero-mobile.png"
        alt="Paris view with Eiffel Tower - mobile"
        fill
        className="object-cover block md:hidden"
        priority
      />

      {/* Background image for desktop */}
      <Image
        src="/hero-desktop.png"
        alt="Paris view with Eiffel Tower - desktop"
        fill
        className="object-cover hidden md:block"
        priority
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 text-center text-white">
        <h1 className="text-3xl font-semibold leading-snug">
          Find Iconic Photo <br /> Spots Anywhere <br /> in the World
        </h1>

        <p className="text-sm mt-4 max-w-xs">
          Join the waitlist and be the first to explore hidden gems for your
          next trip
        </p>

        <JoinButton />
      </div>
    </section>
  );
};

export default Hero;
