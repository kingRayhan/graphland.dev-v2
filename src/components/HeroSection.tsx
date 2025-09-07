'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  animationDuration: number;
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles on client side
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() > 0.8 ? 8 + Math.random() * 16 : 2 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.4,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden py-20 lg:py-32">
      {/* Animated galaxy grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid container with pulsing effect */}
        <div className="absolute inset-0 opacity-20">
          {/* Horizontal lines */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent animate-pulse"
              style={{
                top: `${(i + 1) * 6.67}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            />
          ))}
          {/* Vertical lines */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-neutral-600 to-transparent animate-pulse"
              style={{
                left: `${(i + 1) * 6.67}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            />
          ))}
        </div>
        
        {/* Animated particles/stars */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${
              particle.size > 4
                ? 'bg-gradient-to-br from-neutral-500 to-neutral-700 animate-pulse'
                : 'bg-neutral-400 animate-ping'
            }`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              opacity: particle.opacity,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
              transform: particle.size > 4 ? 'translate(-50%, -50%)' : undefined,
            }}
          />
        ))}
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-neutral-800/40 to-neutral-700/40 rounded-full animate-float opacity-30" />
        <div className="absolute top-1/3 right-20 w-20 h-20 bg-gradient-to-br from-neutral-800/30 to-neutral-700/30 rounded-lg rotate-45 animate-float-delayed opacity-25" />
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-neutral-800/50 to-neutral-700/50 rounded-full animate-float-slow opacity-35" />
        
        {/* Additional animated elements */}
        <div className="absolute top-1/2 left-1/3 w-6 h-6 border border-neutral-600 rounded-full animate-spin opacity-20" style={{ animationDuration: '8s' }} />
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-neutral-500 rounded-full animate-bounce opacity-30" style={{ animationDelay: '1s', animationDuration: '3s' }} />
      </div>

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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
        <div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent" />
        <div className="w-2 h-2 bg-neutral-600 rounded-full mx-auto mt-2" />
      </div>
    </section>
  );
}
