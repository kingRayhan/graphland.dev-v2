"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero1.jpeg",
  "/images/hero2.jpeg",
  "/images/hero3.jpeg",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        setPreviousImageIndex(prevIndex);
        return (prevIndex + 1) % heroImages.length;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pb-20">
      <div className="flex flex-col overflow-hidden w-full">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent">
                  GraphPOS
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
                Enterprise-grade Point of Sale system built with GraphQL,
                featuring multi-tenant architecture, comprehensive inventory
                management, and powerful financial reporting.
              </p>
            </>
          }
        >
          <div className="mx-auto rounded-2xl object-cover h-full w-full overflow-hidden bg-gradient-to-br from-gray-900 to-black relative">
            {heroImages.map((image, index) => {
              const isActive = index === currentImageIndex;
              const isPrevious =
                previousImageIndex !== null && index === previousImageIndex;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrevious ? 0 : "100%",
                    opacity: isActive ? 1 : isPrevious ? 1 : 0,
                    zIndex: isActive ? 2 : isPrevious ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={image}
                    alt={`GraphPOS Hero ${index + 1}`}
                    fill
                    className="object-cover rounded-2xl"
                    draggable={false}
                    priority={index === 0}
                  />
                </motion.div>
              );
            })}
          </div>
        </ContainerScroll>

        {/* CTA Section - Outside ContainerScroll but inside Hero */}
        <div className="max-w-4xl mx-auto w-full px-4 md:px-6 -mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-6 md:p-8 text-center"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-3">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Want a Free Trial?
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6">
                Contact our sales executive to get started with GraphPOS.
                We&apos;ll help you set up your free trial and answer any
                questions you may have.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-5 text-base gap-3"
              >
                <a
                  href="https://wa.me/8801836980760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Sales Executive
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                Click to chat with us on WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

