"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

const SCREENSHOTS = [
  {
    src: "/images/results/campaign-1.png",
    alt: "Campaign analytics: sent, opened, replied, and positive reply rates",
  },
  {
    src: "/images/results/campaign-2.png",
    alt: "Campaign analytics: sent, opened, replied, and positive reply rates",
  },
  {
    src: "/images/results/campaign-3.png",
    alt: "Campaign analytics: sent, opened, replied, and positive reply rates",
  },
  {
    src: "/images/results/campaign-4.png",
    alt: "Campaign analytics: sent, opened, replied, and positive reply rates",
  },
] as const;

/** Intrinsic size of campaign-*.png assets (all four match) */
const SHOT_WIDTH = 1024;
const SHOT_HEIGHT = 306;

const cardClass =
  "overflow-hidden rounded-lg border border-neutral-200/90 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-neutral-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.05)]";

export default function StatsStrip() {
  return (
    <section
      className="scroll-mt-24 border-t border-neutral-200/90 bg-[#f4f4f2] py-12 sm:py-14"
      id="stats"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-coral">
            Results
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Numbers that match the work
          </h2>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:mt-14 lg:max-w-6xl lg:gap-6">
          {SCREENSHOTS.map((shot, i) => (
            <motion.figure
              className={cn(cardClass, "min-w-0")}
              initial={{ opacity: 0, y: 12 }}
              key={shot.src}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true, margin: "-40px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="bg-neutral-50/90 p-1.5 sm:p-2">
                <Image
                  alt={shot.alt}
                  className="h-auto w-full"
                  height={SHOT_HEIGHT}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 560px"
                  src={shot.src}
                  width={SHOT_WIDTH}
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
