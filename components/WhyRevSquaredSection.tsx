"use client";

import { motion } from "framer-motion";
import { BarChart3, Layers, Sparkles, Unlock } from "lucide-react";

import SpotlightCards, {
  type SpotlightItem,
} from "@/components/kokonutui/spotlight-cards";
import { cn } from "@/lib/utils";

const items: SpotlightItem[] = [
  {
    icon: Sparkles,
    title: "Fully Managed",
    description:
      "Targeting, copy, sending, reporting—we run it; you join calls.",
    color: "#FF5E3A",
  },
  {
    icon: Layers,
    title: "Multi-Channel",
    description:
      "Email and physical mail orchestrated for the same narrative.",
    color: "#5AC8D8",
  },
  {
    icon: BarChart3,
    title: "Measured",
    description:
      "Opens, replies, meetings—weekly readouts, no vanity charts.",
    color: "#FF5E3A",
  },
  {
    icon: Unlock,
    title: "Monthly",
    description:
      "Rolling terms. If we’re not worth it, you should leave.",
    color: "#5AC8D8",
  },
];

export default function WhyRevSquaredSection() {
  return (
    <section className="border-t border-ink/10 bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-coral">
            Principles
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Why teams work with us
          </h2>
        </motion.div>

        <SpotlightCards
          className={cn(
            "!rounded-sm !border-2 !border-ink/10 !bg-sage/50 !px-5 !py-7 sm:!px-8 sm:!py-9"
          )}
          eyebrow=""
          gridClassName="grid-cols-1 gap-4 sm:grid-cols-2"
          heading=""
          items={items}
        />
      </div>
    </section>
  );
}
