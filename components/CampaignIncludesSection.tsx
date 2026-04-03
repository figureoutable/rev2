"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  FlaskConical,
  Globe,
  Mail,
  Phone,
  RefreshCw,
  Sparkles,
  Target,
  UserCheck,
  UserCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

const items: readonly { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Domain setup",
    body: "Set up dedicated sending domains aligned with your brand.",
    Icon: Globe,
  },
  {
    title: "Inbox setup",
    body: "Provision and configure sending inboxes for campaign execution.",
    Icon: Mail,
  },
  {
    title: "DNS authentication",
    body: "Configure SPF, DKIM, and DMARC for reliable deliverability.",
    Icon: UserCheck,
  },
  {
    title: "Define your ICP precisely",
    body: "Lock in exact persona, firmographic, and buying signal criteria.",
    Icon: Target,
  },
  {
    title: "Source, enrich and verify leads",
    body: "Build, enrich, and clean lead data before launch.",
    Icon: RefreshCw,
  },
  {
    title: "Segment lists into cohorts",
    body: "Group leads into clear cohorts to improve relevance.",
    Icon: UserCircle,
  },
  {
    title: "Create your cold traffic offer",
    body: "Develop a focused offer that matches a specific buyer pain.",
    Icon: Sparkles,
  },
  {
    title: "Build sequences with spintax variation",
    body: "Create sequence variants across subjects, openers, and CTAs.",
    Icon: Mail,
  },
  {
    title: "Warm up inboxes",
    body: "Warm inboxes gradually before scaling campaign volume.",
    Icon: Phone,
  },
  {
    title: "Sending volume and timing",
    body: "Control send volume and cadence to protect inbox health.",
    Icon: RefreshCw,
  },
  {
    title: "Launch campaigns",
    body: "Go live in controlled batches and monitor early performance.",
    Icon: UserCheck,
  },
  {
    title: "A/B test and iterate",
    body: "Continuously test and refine copy, angles, and sequence flow.",
    Icon: FlaskConical,
  },
];

const rowShades = [
  "border-[#d8d5ca] bg-[#f7f6f2]",
  "border-[#b8d9d2] bg-[#e8f5f2]",
  "border-[#cfc5df] bg-[#f1ecf8]",
  "border-[#e1c9b5] bg-[#f8efe7]",
] as const;

const ROW_CATEGORIES = ["Setup", "Lead list", "Offer & copy", "Launch"] as const;

function VerticalCategoryLabel({ label }: { label: string }) {
  return (
    <div className="flex w-8 shrink-0 items-center justify-center self-stretch sm:w-10">
      <span
        aria-hidden
        className="inline-block origin-center -rotate-90 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45 sm:text-[11px]"
      >
        {label}
      </span>
    </div>
  );
}

export default function CampaignIncludesSection() {
  return (
    <section
      className="border-t border-ink/10 bg-cream py-10 sm:py-14"
      id="whats-included"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-60px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">
            Campaigns
          </p>
          <h2 className="font-heading mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-[2.125rem] sm:leading-tight">
            What&apos;s included for your campaigns
          </h2>
        </motion.div>

        <div className="mt-14 flex flex-col gap-10 lg:mt-20 lg:gap-12">
          {ROW_CATEGORIES.map((category, rowIndex) => {
            const rowClass = rowShades[rowIndex] ?? rowShades[rowShades.length - 1];
            const rowItems = items.slice(rowIndex * 3, rowIndex * 3 + 3);

            return (
              <div
                aria-label={category}
                className="flex gap-3 sm:gap-5"
                key={category}
                role="group"
              >
                <VerticalCategoryLabel label={category} />
                <div className="grid min-w-0 flex-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
                  {rowItems.map((item, i) => {
                    const Icon = item.Icon;
                    const globalIndex = rowIndex * 3 + i;

                    return (
                      <motion.article
                        className={cn(
                          "rounded-lg border px-6 py-7 sm:px-7 sm:py-8",
                          "shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300",
                          "hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
                          rowClass
                        )}
                        initial={{ opacity: 0, y: 14 }}
                        key={item.title}
                        transition={{ duration: 0.4, delay: globalIndex * 0.04 }}
                        viewport={{ once: true, margin: "-32px" }}
                        whileInView={{ opacity: 1, y: 0 }}
                      >
                        <div
                          aria-hidden
                          className="flex h-9 w-9 items-center justify-center text-ink/55"
                        >
                          <Icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.35} />
                        </div>
                        <h3 className="mt-5 text-base font-semibold leading-snug tracking-tight text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-[1.65] text-neutral-600">
                          {item.body}
                        </p>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
