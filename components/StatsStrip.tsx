"use client";

import { animate, useInView } from "framer-motion";
import { Activity, Database, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type StatConfig = {
  id: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const STATS: StatConfig[] = [
  {
    id: "open-rate",
    value: 62,
    suffix: "%",
    label: "Open rate · last campaign",
  },
  {
    id: "meetings",
    value: 28,
    label: "Meetings · 60 days",
  },
  {
    id: "reply-rate",
    value: 4.1,
    decimals: 1,
    suffix: "%",
    label: "Reply rate · vs 1.2% avg",
  },
];

const numberStyle = "text-coral";

const pipelineItems = [
  { icon: Database, label: "ICP & list build" },
  { icon: Activity, label: "Sequences & sends" },
  { icon: TrendingUp, label: "Replies & meetings" },
] as const;

function AnimatedNumber({
  className,
  decimals = 0,
  prefix = "",
  suffix = "",
  value,
}: {
  className?: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [text, setText] = useState(() =>
    decimals > 0 ? (0).toFixed(decimals) : "0"
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.65,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setText(
          decimals > 0 ? latest.toFixed(decimals) : String(Math.round(latest))
        );
      },
    });

    return () => controls.stop();
  }, [decimals, isInView, value]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block font-heading font-semibold tabular-nums tracking-tight",
        numberStyle,
        className
      )}
    >
      {prefix}
      {text}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section
      className="scroll-mt-24 border-t border-ink/10 bg-sage/35 py-24 sm:py-28"
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
          <p className="mt-3 text-muted-foreground">
            Representative client outcomes—your mileage depends on ICP and offer.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4 lg:grid-rows-2">
          <div className="rounded-sm border-2 border-ink/12 bg-white p-8 shadow-[5px_5px_0_0_rgba(26,26,26,0.04)] lg:col-span-2">
            <div className="text-5xl sm:text-6xl">
              <AnimatedNumber suffix="%" value={STATS[0].value} />
            </div>
            <p className="mt-3 text-sm font-medium text-sea">{STATS[0].label}</p>
          </div>

          <div className="rounded-sm border-2 border-ink/12 bg-white p-8 shadow-[5px_5px_0_0_rgba(26,26,26,0.04)]">
            <div className="text-4xl sm:text-5xl">
              <AnimatedNumber value={STATS[1].value} />
            </div>
            <p className="mt-3 text-sm font-medium text-sea">{STATS[1].label}</p>
          </div>

          <div className="rounded-sm border-2 border-ink/12 bg-white p-8 shadow-[5px_5px_0_0_rgba(26,26,26,0.04)]">
            <div className="text-4xl sm:text-5xl">
              <AnimatedNumber
                decimals={STATS[2].decimals}
                suffix={STATS[2].suffix}
                value={STATS[2].value}
              />
            </div>
            <p className="mt-3 text-sm font-medium text-sea">{STATS[2].label}</p>
          </div>

          <div className="rounded-sm border-2 border-ink/12 bg-white lg:col-span-2">
            <div className="border-b-2 border-ink/8 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-coral">
              Pipeline
            </div>
            <ul className="divide-y-2 divide-ink/6">
              {pipelineItems.map(({ icon: Icon, label }) => (
                <li className="flex items-center gap-4 px-8 py-4" key={label}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-ink/10 bg-sage text-ink">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-sm border-2 border-ink/12 bg-white p-8 shadow-[5px_5px_0_0_rgba(26,26,26,0.04)] lg:col-span-2">
            <p className="text-sm font-semibold text-ink">Reply momentum</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Trailing window · illustrative
            </p>
            <div className="relative mt-8 h-28">
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-20 rounded-t-sm bg-gradient-to-t from-sea/20 to-transparent"
              />
              <svg
                className="relative h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 400 100"
              >
                <defs>
                  <linearGradient id="statLineWarm" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#5AC8D8" />
                    <stop offset="100%" stopColor="#FF5E3A" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,85 C60,80 100,40 160,50 S280,15 400,25"
                  fill="none"
                  stroke="url(#statLineWarm)"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
              </svg>
              <div className="absolute right-6 top-2 flex flex-col items-end gap-1">
                <span className="rounded-sm bg-coral px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  +305
                </span>
                <span className="text-[10px] text-muted-foreground">replies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
