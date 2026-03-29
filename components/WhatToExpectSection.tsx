"use client";

import { animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const CORAL = "#FF5C3E";
const DOT_DASH = "2 16";

/** Vertical S-curve beside the steps — email flows top → bottom */
const STEP_FLIGHT_PATH =
  "M 28 24 C 44 120 12 200 28 280 S 48 400 28 520";

const STEP_FLIGHT_DURATION_SEC = 7 / 0.7;

const STEP_IMAGES = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
] as const;

const STEP_IMAGE_ALTS = [
  "Team collaborating on strategy in a bright office",
  "Engineer working with technical equipment in a lab",
  "Team celebrating together at a table",
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

function poseMailAlongPath(path: SVGPathElement, group: SVGGElement, t: number) {
  const len = path.getTotalLength();
  if (len < 2) return;
  const dist = t * len;
  const p = path.getPointAtLength(dist);
  const sampleDelta = Math.max(len * 0.004, 2);
  const pAhead = path.getPointAtLength(Math.min(dist + sampleDelta, len));
  const angleDeg =
    (Math.atan2(pAhead.y - p.y, pAhead.x - p.x) * 180) / Math.PI;
  group.setAttribute(
    "transform",
    `translate(${p.x},${p.y}) rotate(${angleDeg})`
  );
}

function StepColumnFlight() {
  const pathRef = useRef<SVGPathElement>(null);
  const mailRef = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    const path = pathRef.current;
    const mail = mailRef.current;
    if (!path || !mail) return;
    poseMailAlongPath(path, mail, 0);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const mail = mailRef.current;
    if (!path || !mail) return;
    if (path.getTotalLength() < 2) return;

    const controls = animate(0, 1, {
      duration: STEP_FLIGHT_DURATION_SEC,
      ease: "linear",
      repeat: Infinity,
      onUpdate: (progress) => poseMailAlongPath(path, mail, progress),
    });

    return () => controls.stop();
  }, []);

  return (
    <div
      aria-hidden
      className="absolute bottom-0 left-0 top-0 w-14 shrink-0 sm:w-16"
    >
      <svg
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 56 544"
      >
        <path
          d={STEP_FLIGHT_PATH}
          fill="none"
          stroke={CORAL}
          strokeDasharray={DOT_DASH}
          strokeLinecap="round"
          strokeWidth="2"
          opacity={0.55}
        />
        <path
          ref={pathRef}
          d={STEP_FLIGHT_PATH}
          fill="none"
          stroke="transparent"
          strokeWidth="8"
        />
        <g ref={mailRef}>
          <g transform="translate(-14, -5)">
            <rect
              fill="#ffffff"
              height="10"
              rx="1"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              width="16"
              x="0"
              y="0"
            />
            <path
              d="M 0 0 L 8 6.5 L 16 0"
              fill="none"
              stroke="#1a1a1a"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function WhatToExpectSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="scroll-mt-24 border-t border-ink/10 bg-white py-20 sm:py-28"
      id="how-it-works"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          What to expect when working with us
        </h2>

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-neutral-100 lg:mx-0 lg:max-w-none">
            <Image
              alt={STEP_IMAGE_ALTS[active]}
              className="h-auto w-full transition-opacity duration-500"
              height={800}
              key={active}
              priority={active === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={STEP_IMAGES[active]}
              width={1200}
            />
          </div>

          <div className="relative min-h-[320px] pl-12 sm:pl-14 lg:min-h-[480px]">
            <StepColumnFlight />

            <div className="relative flex flex-col">
              {steps.map((step, i) => {
                const isActive = active === i;
                const num = String(i + 1).padStart(2, "0");

                return (
                  <div key={step.title}>
                    {i > 0 ? (
                      <div className="mb-6 h-px w-full bg-neutral-200" />
                    ) : null}

                    <button
                      aria-controls={`step-panel-${i}`}
                      aria-expanded={isActive}
                      className="w-full text-left"
                      onClick={() => setActive(i)}
                      type="button"
                    >
                      <span
                        className={cn(
                          "text-base sm:text-lg",
                          isActive
                            ? "font-semibold text-ink"
                            : "font-normal text-neutral-400"
                        )}
                      >
                        <span
                          className={cn(
                            "tabular-nums",
                            isActive ? "text-neutral-500" : "text-neutral-400"
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
                        <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem]">
                          {step.description}
                        </p>
                      </div>
                    ) : null}
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
