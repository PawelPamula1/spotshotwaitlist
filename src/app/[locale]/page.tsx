import Link from "next/link";
import AboutApp from "./sections/AboutApp";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import JoinCTA from "./sections/JoinCTA";
import Problem from "./sections/Problem";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Problem />
      <AboutApp />
      <HowItWorks />
      <JoinCTA />

      <footer className="py-10 text-center text-sm text-black">
        SpotShot – The Travel Photo Spotting App <br />
        Created with <span className="inline-block">❤️</span> by{" "}
        <Link
          href="https://paulprojects.com"
          target="_blank"
          className="font-semibold"
        >
          Paul Projects
        </Link>
      </footer>
    </div>
  );
}
