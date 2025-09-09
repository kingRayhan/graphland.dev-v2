"use client";

import {
  ArrowUpFromDot,
  CalendarRangeIcon,
  MoveUpRightIcon,
} from "lucide-react";
import { Highlighter } from "./magicui/highlighter";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { Button } from "./ui/button";
import ScheduleButton from "./ScheduleButton";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden py-20 lg:py-32">
        <BackgroundRippleEffect />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-3xl lg:text-5xl font-bold text-neutral-100 leading-relaxed">
              <Highlighter action="underline" color="var(--primary)">
                Custom
              </Highlighter>{" "}
              solutions.
              <br />
              Crafted with{" "}
              <Highlighter action="highlight" color="var(--primary)">
                <span className=" text-black">precision.</span>
              </Highlighter>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              We build exceptional websites, mobile applications, and desktop
              software tailored to your unique needs and vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <ScheduleButton />
              <Button asChild variant={"secondary"}>
                <Link href={"/contact"} className="text-black">
                  <MoveUpRightIcon />
                  Let&apos;s Talk
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
