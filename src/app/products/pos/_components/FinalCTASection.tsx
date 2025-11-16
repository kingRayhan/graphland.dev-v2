"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function FinalCTASection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
      <BackgroundRippleEffect />
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Get started with GraphPOS and experience the power of modern
              point of sale management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-900 px-8 py-6 text-lg"
              >
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </WavyBackground>
    </section>
  );
}

