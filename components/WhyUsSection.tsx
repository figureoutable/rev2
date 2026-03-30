"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";

import { cn } from "@/lib/utils";

function IllustrationLeadLists() {
  return (
    <svg aria-hidden className="mx-auto h-full w-full max-h-[128px]" viewBox="0 0 200 120">
      <rect fill="white" height="88" opacity="0.9" rx="8" width="168" x="16" y="16" />
      <rect fill="#e5e7eb" height="6" opacity="0.8" rx="2" width="100" x="28" y="32" />
      <rect fill="#e5e7eb" height="6" opacity="0.8" rx="2" width="80" x="28" y="46" />
      <rect fill="#e5e7eb" height="6" opacity="0.6" rx="2" width="90" x="28" y="60" />
      <rect fill="white" height="20" rx="3" width="24" x="144" y="36" />
      <rect fill="white" height="20" rx="3" width="24" x="144" y="62" />
      <polygon fill="#22c55e" points="172,22 178,28 172,34 166,28" />
      <polygon fill="#22c55e" points="38,88 44,94 38,100 32,94" />
    </svg>
  );
}

function IllustrationEmailInfra() {
  return (
    <svg aria-hidden className="mx-auto h-full w-full max-h-[128px]" viewBox="0 0 200 120">
      <circle cx="52" cy="38" fill="white" r="18" stroke="#d1d5db" strokeWidth="1.5" />
      <path d="M46 38h12M52 32v12" stroke="#9ca3af" strokeLinecap="round" strokeWidth="2" />
      <circle cx="148" cy="38" fill="white" r="18" stroke="#d1d5db" strokeWidth="1.5" />
      <circle cx="148" cy="38" fill="none" r="7" stroke="#93c5fd" strokeWidth="1.5" />
      <circle cx="52" cy="92" fill="white" r="18" stroke="#d1d5db" strokeWidth="1.5" />
      <path
        d="M52 56v12M148 56v12M70 92h60M52 74c24-8 72-8 96 0"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="2"
      />
      <circle cx="148" cy="92" fill="white" r="18" stroke="#d1d5db" strokeWidth="1.5" />
      <path d="M148 86v12M142 92h12" stroke="#f97316" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function IllustrationOfferWorkshop() {
  return (
    <svg aria-hidden className="mx-auto h-full w-full max-h-[128px]" viewBox="0 0 200 120">
      <rect fill="white" height="72" opacity="0.95" rx="10" width="140" x="30" y="24" />
      <path d="M30 40 L100 40 L170 40" stroke="#e5e7eb" strokeWidth="1.5" />
      <circle cx="100" cy="68" fill="#fef3c7" r="22" stroke="#f59e0b" strokeWidth="1.5" />
      <path d="M100 58 L100 78 M92 68 L108 68" stroke="#d97706" strokeLinecap="round" strokeWidth="2" />
      <rect fill="#fde68a" height="8" opacity="0.9" rx="2" width="48" x="76" y="94" />
    </svg>
  );
}

/** Ink-style underline under the category label (Handwrytten-style) */
function ScribbleUnderline({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("mx-auto h-3 w-[7.25rem] text-ink", className)}
      viewBox="0 0 116 14"
    >
      <path
        d="M2 9.5c9-3.5 20-5 32-2.5 12 2.5 24 1 36-1s26-2 38 1.5 20-1 28 0.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        opacity={0.88}
      />
    </svg>
  );
}

function ColumnConnector() {
  return (
    <div
      aria-hidden
      className="hidden h-full min-h-[8rem] shrink-0 items-center justify-center lg:flex lg:w-5"
    >
      <svg className="w-full text-neutral-300" viewBox="0 0 80 36" preserveAspectRatio="none">
        <path
          d="M0 28 C20 4 60 4 80 28"
          fill="none"
          stroke="currentColor"
          strokeDasharray="4 7"
          strokeLinecap="round"
          strokeWidth="1.15"
        />
      </svg>
    </div>
  );
}

const cards = [
  {
    label: "List building",
    title: "Targeted Lead Lists",
    body: "We build your ideal customer profile and source leads across multiple databases to deliver highly targeted, verified prospect lists specific to your niche.",
    art: IllustrationLeadLists,
  },
  {
    label: "Deliverability",
    title: "Email Infrastructure",
    body: "We set up and manage best-in-class sending infrastructure so your emails land in inboxes every time, maximising deliverability, open rates, and replies.",
    art: IllustrationEmailInfra,
  },
  {
    label: "Offer design",
    title: "Offer Creation Workshop",
    body: "We work with you to craft compelling offers that convert cold traffic into warm conversations and booked calls to build your pipeline.",
    art: IllustrationOfferWorkshop,
  },
] as const;

export default function WhyUsSection() {
  return (
    <section
      className="scroll-mt-24 border-t border-ink/10 bg-[#f4f4f2] py-12 sm:py-16"
      id="why-us"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-heading text-balance text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-60px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Why RevSquared?
        </motion.h2>

        <div
          className={cn(
            "mt-20 flex w-full flex-col items-stretch gap-14 lg:mt-24",
            "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25rem)_minmax(0,1fr)_minmax(0,1.25rem)_minmax(0,1fr)]",
            "lg:items-stretch lg:gap-x-2 lg:gap-y-0"
          )}
        >
          {cards.map((card, i) => {
            const Art = card.art;
            return (
              <Fragment key={card.title}>
                {i > 0 ? <ColumnConnector /> : null}
                <motion.article
                  className="flex h-full min-h-0 w-full max-w-md min-w-0 flex-col self-stretch lg:max-w-none"
                  initial={{ opacity: 0, y: 22 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  viewport={{ once: true, margin: "-40px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={cn(
                      "relative flex h-full min-h-0 flex-col overflow-hidden rounded-[20px] border border-neutral-300/80 bg-white",
                      "shadow-[0_10px_40px_-12px_rgba(26,26,26,0.12)]"
                    )}
                  >
                    {/* Peach tab — overlaps top edge */}
                    <div
                      aria-hidden
                      className="absolute left-1/2 top-0 z-20 h-2.5 w-[4.5rem] -translate-x-1/2 rounded-b-md bg-coral/40"
                    />

                    {/* Illustration panel — soft grey + light “bokeh” */}
                    <div className="relative shrink-0 min-h-[11rem] overflow-hidden px-5 pb-9 pt-11">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-200/50 via-neutral-100/40 to-white"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -left-6 top-4 h-28 w-28 rounded-full bg-white/70 blur-2xl"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-4 bottom-2 h-24 w-24 rounded-full bg-coral/10 blur-3xl"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-0 h-20 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.95),transparent_65%)]"
                      />
                      <div className="relative flex items-center justify-center">
                        <Art />
                      </div>
                    </div>

                    {/* Text panel — cream, grows so all cards share one row height */}
                    <div className="flex min-h-0 flex-1 flex-col border-t border-neutral-200/70 bg-cream px-5 pb-8 pt-7 text-center sm:px-7">
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink">
                        {card.label}
                      </p>
                      <ScribbleUnderline className="mt-2.5" />
                      <h3 className="font-heading mt-5 text-[1.35rem] font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-pretty text-[0.9375rem] leading-[1.75] text-neutral-600">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
