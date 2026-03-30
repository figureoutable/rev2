"use client";

import { motion } from "framer-motion";

import { MotionPrimaryLink } from "@/components/MotionPrimaryLink";
import { cn } from "@/lib/utils";

/** TODO: replace with your live Calendly (or other scheduler) URL */
const CALENDLY_PLACEHOLDER = "https://calendly.com/your-org/revsquared-strategy";

export default function CtaSection() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden border-t border-ink/10 bg-cream py-10 sm:py-12"
      id="book-a-call"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-coral/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-sea/15 blur-3xl"
      />

      <motion.div
        className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 14 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true, margin: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-coral">
          Next step
        </p>
        <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Ready when you are
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-[1.75] text-muted-foreground">
          No pricing theatre. One call to see if we&apos;re a fit for your
          pipeline goals.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <MotionPrimaryLink
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-sm bg-coral px-10",
              "text-xs font-semibold uppercase tracking-[0.18em] text-white",
              "transition-colors hover:bg-coral-hover"
            )}
            href={CALENDLY_PLACEHOLDER}
            rel="noopener noreferrer"
            target="_blank"
          >
            Book a call
          </MotionPrimaryLink>
          <a
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-sm border-2 border-ink/90 px-10",
              "text-xs font-semibold uppercase tracking-[0.14em] text-ink",
              "transition-colors hover:bg-ink/[0.04]"
            )}
            href="mailto:hello@revsquared.example"
          >
            Email us
          </a>
        </div>

        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          30 minutes · no commitment
        </p>
      </motion.div>
    </section>
  );
}
