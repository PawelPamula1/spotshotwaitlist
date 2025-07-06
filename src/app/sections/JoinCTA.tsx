// sections/JoinCTA.tsx
import React from "react";
import JoinButton from "../components/JoinButton";

const JoinCTA = () => {
  return (
    <section className="bg-[#051D57] py-16 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-medium">Join the waitlist</h2>
        <p className="mt-6 text-lg lg:text-2xl max-w-2xl mx-auto">
          Be the first to know when SpotShot is ready for launch.
        </p>

        <div className="flex justify-center">
          <JoinButton />
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
