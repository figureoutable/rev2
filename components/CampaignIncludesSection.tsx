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
    title: "Dedicated account manager",
    body: "A dedicated point of contact to oversee your campaigns and answer any and all questions.",
    Icon: UserCircle,
  },
  {
    title: "AI-powered personalization",
    body: "Smart automation crafts hyper-personalized emails that drive higher engagement.",
    Icon: Sparkles,
  },
  {
    title: "1-on-1 onboarding & support",
    body: "Personalized guidance to ensure a smooth campaign setup and launch.",
    Icon: UserCheck,
  },
  {
    title: "DFY managed email campaigns",
    body: "Fully managed email outreach so you can focus on closing deals.",
    Icon: Mail,
  },
  {
    title: "Precision lead lists",
    body: "We source high-quality leads tailored to your ideal customer profile.",
    Icon: Target,
  },
  {
    title: "Inbox & domain setup",
    body: "We configure your inbox and domain for optimal deliverability and outreach success.",
    Icon: Globe,
  },
  {
    title: "A/B testing",
    body: "We test different subject lines, copy, and CTAs to optimize response rates.",
    Icon: FlaskConical,
  },
  {
    title: "Follow-up sequences",
    body: "Automated, strategic follow-ups to keep prospects engaged and increase conversions.",
    Icon: RefreshCw,
  },
  {
    title: "Monthly check-in calls",
    body: "Regular strategy calls to refine and improve campaign performance.",
    Icon: Phone,
  },
];

export default function CampaignIncludesSection() {
  return (
    <section
      className="border-t border-neutral-200/90 bg-[#f4f4f2] py-10 sm:py-14"
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-7">
          {items.map((item, i) => {
            const Icon = item.Icon;
            return (
              <motion.article
                className={cn(
                  "rounded-lg border border-neutral-200/90 bg-white px-6 py-7 sm:px-7 sm:py-8",
                  "shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300",
                  "hover:border-neutral-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                )}
                initial={{ opacity: 0, y: 14 }}
                key={item.title}
                transition={{ duration: 0.4, delay: i * 0.04 }}
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
    </section>
  );
}
