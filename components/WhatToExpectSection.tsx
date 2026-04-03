"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

const STEP_IMAGES = [
  "/images/what-to-expect/onboarding.png",
  "/images/what-to-expect/setup.png",
  "/images/what-to-expect/launch.png",
] as const;

const STEP_IMAGE_ALTS = [
  "Professional on a call while working with a keyboard in a technical workspace",
  "Engineer assembling robotics hardware at a well-lit workbench",
  "Team of students celebrating around laptops and robotics projects",
] as const;

const steps = [
  {
    title: "Onboarding Call",
    description:
      "On your onboarding call, we’ll deep-dive into your ideal customer profile, goals, and messaging to craft a high-converting cold email strategy. It’s the first step for us to align on the goals so we can get your campaign started!",
  },
  {
    title: "The Setup",
    description:
      "We set up the infrastructure for maximum deliverability, source high-quality leads, and craft hyper-personalized email copy so your campaigns land in inboxes and drive meeting bookings.",
  },
  {
    title: "Campaign Launch",
    description:
      "Once your campaign goes live, we monitor performance, tweak for maximum impact, and watch as high-quality meetings start filling your calendar!",
  },
] as const;

export default function WhatToExpectSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="scroll-mt-24 border-t border-ink/10 bg-white pb-8 pt-12 sm:pb-10 sm:pt-[4.2rem]"
      id="how-it-works"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-balance text-center font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What to expect when working with us
        </h2>

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="order-1 w-full max-w-xl overflow-hidden rounded-2xl bg-neutral-100 lg:order-2 lg:mx-0 lg:max-w-none">
            <Image
              alt={STEP_IMAGE_ALTS[active]}
              className="h-auto w-full transition-opacity duration-500"
              height={682}
              key={active}
              priority={active === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={STEP_IMAGES[active]}
              width={1024}
            />
          </div>

          <div className="order-2 min-h-[224px] lg:order-1 lg:min-h-[336px]">
            <div className="flex flex-col">
              {steps.map((step, i) => {
                const isActive = active === i;
                const num = String(i + 1).padStart(2, "0");

                return (
                  <div key={step.title}>
                    {i > 0 ? (
                      <div className="h-px w-full bg-neutral-200" />
                    ) : null}

                    <div
                      className={cn(
                        i > 0 && "pt-3",
                        i < steps.length - 1 && "pb-3"
                      )}
                    >
                      <button
                        aria-controls={`step-panel-${i}`}
                        aria-expanded={isActive}
                        className="w-full py-1 text-left"
                        onClick={() => setActive(i)}
                        type="button"
                      >
                        <span
                          className={cn(
                            "font-heading text-base sm:text-lg",
                            isActive
                              ? "font-semibold text-ink"
                              : "font-normal text-ink/40"
                          )}
                        >
                          <span
                            className={cn(
                              "tabular-nums",
                              isActive ? "text-muted-foreground" : "text-ink/35"
                            )}
                          >
                            {num}.
                          </span>{" "}
                          {step.title}
                        </span>
                      </button>

                      {isActive ? (
                        <div
                          className="pt-4"
                          id={`step-panel-${i}`}
                          role="region"
                        >
                          <div className="relative h-px w-full bg-neutral-200">
                            <div
                              aria-hidden
                              className="absolute left-0 top-0 h-full w-[68%] max-w-md bg-coral"
                            />
                          </div>
                          <p className="my-5 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                            {step.description}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
