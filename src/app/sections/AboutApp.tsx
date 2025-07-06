import Image from "next/image";
import React from "react";

const AboutApp = () => {
  return (
    <section className="relative bg-[#011e49] text-white px-6 py-20 overflow-hidden">
      {/* Background pattern */}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-2">
        {/* Text content */}
        <div className="text-center lg:text-left max-w-lg space-y-6">
          <h2 className="text-3xl font-semibold">SpotShot</h2>
          <p className="text-lg font-light">The Travel Photo Spotting App</p>

          <p className="text-base leading-relaxed">
            SpotShot is built by travelers, for travelers.
          </p>
          <p className="text-base leading-relaxed">
            Discover the most photogenic places in cities around the world —
            from iconic landmarks to hidden gems only locals know.
          </p>
          <p className="text-base leading-relaxed">
            Now you’ve got it all on one map.
          </p>
          <p className="font-semibold text-white mt-4">
            🔒 Join the waitlist and help us build the world’s most beautiful
            travel photo map – one spot at a time.
          </p>
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
              src="/about/mockup.png"
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
