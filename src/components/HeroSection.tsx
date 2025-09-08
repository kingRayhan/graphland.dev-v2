"use client";

import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden py-20 lg:py-32">
      <BackgroundRippleEffect />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-100 leading-tight">
            Custom solutions.
            <br />
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Crafted with precision.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            We build exceptional websites, mobile applications, and desktop
            software tailored to your unique needs and vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-white text-neutral-900 rounded-full font-medium text-lg hover:bg-neutral-200 transition-all duration-200 hover:shadow-lg hover:scale-105">
              View Our Work
            </button>
            <button className="px-8 py-4 border border-neutral-700 text-neutral-100 rounded-full font-medium text-lg hover:border-neutral-400 hover:bg-neutral-900 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
