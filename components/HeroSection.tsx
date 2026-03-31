"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import RetroComputerInbox from "@/components/RetroComputerInbox";
import { cn } from "@/lib/utils";

const trust = [
  "Pay for performance",
  "Not set up or onboarding fees",
] as const;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream pb-12 pt-5 sm:pb-16 sm:pt-7">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <motion.h1
            className="text-balance font-heading text-[2.5rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl md:text-[3.1rem] lg:text-[3.35rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="block">More pipeline.</span>
            <span className="font-script mt-1 block text-[2.75rem] sm:text-[3.25rem] md:text-[3.5rem]">
              <span className="relative inline-block">
                Less guesswork.
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-ink/80"
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="mt-10 max-w-lg text-lg leading-[1.75] text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            RevSquared is a B2B lead generation and email marketing agency that
            drives business growth through targeted outbound.
          </motion.p>

          <motion.div
            className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <a
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-sm bg-coral px-8",
                "text-xs font-semibold uppercase tracking-[0.14em] text-white",
                "transition-colors hover:bg-coral-hover"
              )}
              href="#book-a-call"
            >
              Book a call
            </a>
          </motion.div>

          <motion.ul
            className="mt-5 flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            {trust.map((t) => (
              <li className="flex items-center gap-2 text-sm text-muted-foreground" key={t}>
                <Check className="h-4 w-4 shrink-0 text-coral" strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative flex min-h-[300px] items-center justify-center lg:min-h-[400px] lg:justify-end"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <RetroComputerInbox />
        </motion.div>
      </div>
    </section>
  );
}
