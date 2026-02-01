"use client";

import { Spotlight } from "./ui/Spotlight";
import { SparklesCore } from "./ui/sparkles";
import React, { useEffect } from "react";
import Socials from "./Socials";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      id="home"
      className="bg-[#03040B] flex flex-col items-center justify-center pt-28 sm:pt-36 lg:pt-36 pb-40 lg:pb-10 min-h-screen mx-auto px-4 relative overflow-hidden"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="space-y-1">
        <h2 className="z-10 text-3xl font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text pb-4">
          Hey, I&apos;m
        </h2>
        <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-purple-300 to-purple-800 animate-fade-in-3">
          Miran Ahmad
        </h1>
      </div>
      <Socials />
      <div className="hidden lg:block w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-800 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-800 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.5}
          particleDensity={400}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#03040B] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <Link
        href="https://drive.google.com/file/d/1x4vZ8QpFqeGjyDIt8LgUj4Lc_f_9R43b/view?usp=drive_link"
        target="_blank"
        className="flex items-center text-white mt-10 scroll-mt-0 py-2 px-6 rounded-full border border-purple-400 shadow-md cursor-default hover:shadow-lg shadow-amber-600 transition duration-300 ease-in-out"
      >
        Curriculum Vitae 
        <ArrowDownToLine />
      </Link>
    </div>
  );
};

export default HeroSection;
