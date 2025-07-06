import Image from "next/image";
import React from "react";

const steps = [
  {
    title: "Find Photo Spots on the Map",
    description:
      "Explore your location or plan your trip by browsing geotagged spots added by travelers around the world.",
    image: "/howitworks/photo1.png",
  },
  {
    title: "See Real Photo Examples",
    description:
      "Get inspired by real photos taken by the community in each spot. Know exactly where to go and what kind of shots to expect.",
    image: "/howitworks/photo2.png",
  },
  {
    title: "Save & Plan Your Shots",
    description:
      "Save your favorite spots to a personal list and create your own shooting itinerary. Never miss a great location again.",
    image: "/howitworks/photo3.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#f1f5f4] py-16 px-6 text-center">
      <h2 className="text-3xl lg:text-4xl font-medium text-[#4a5c6a] mb-14">
        How it Works?
      </h2>

      <div className="flex flex-col gap-16 items-center lg:flex-row lg:justify-center lg:items-start lg:gap-24 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center max-w-sm">
            <h3 className="text-lg font-semibold text-[#4a5c6a] mb-4">
              {step.title}
            </h3>
            <div className="relative w-full md:w-[200px] h-[400px] mb-4">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#4a5c6a] text-sm leading-relaxed px-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
