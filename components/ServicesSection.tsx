"use client";

import { motion } from "framer-motion";
import { Check, Mail, Mailbox, Mails } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Lead Generation",
    subtitle: "Outbound sequences",
    icon: Mail,
    href: "/services/cold-email",
    bullets: [
      "End-to-end campaign management",
      "Segmented sequence strategy",
      "Multi-step sequence writing",
      "Inbox placement & warming",
    ],
  },
  {
    title: "Direct Mail",
    subtitle: "Physical touchpoints",
    icon: Mailbox,
    href: "/services/direct-mail",
    bullets: [
      "Targeted proprietary lead lists",
      "Full creative production",
      "Managed print & dispatch",
      "ROI tracking & reporting",
    ],
  },
  {
    title: "Email Marketing",
    subtitle: "Done for you",
    icon: Mails,
    href: "/services/email-marketing",
    bullets: [
      "Campaign strategy & calendar",
      "Copywriting & design",
      "A/B testing & optimisation",
      "Deliverability management",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      className="border-t border-ink/10 bg-sage/40 py-12 sm:py-14"
      id="services"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-coral">
            Services
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What we run
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                key={s.title}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true, margin: "-40px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card
                  className={cn(
                    "rounded-sm border-2 border-ink/12 bg-white",
                    "h-full shadow-[6px_6px_0_0_rgba(26,26,26,0.05)] transition-shadow duration-300",
                    "hover:shadow-[8px_8px_0_0_rgba(90,200,216,0.2)]"
                  )}
                >
                  <Link
                    className="block h-full rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
                    href={s.href}
                  >
                    <CardHeader className="border-b-2 border-ink/8 p-8 pb-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="font-heading text-2xl font-semibold text-ink">
                            {s.title}
                          </CardTitle>
                          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                            {s.subtitle}
                          </p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-sm border-2 border-ink/12 bg-coral/10 text-coral">
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8 pt-6">
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {s.bullets.map((b) => (
                          <li className="flex gap-3" key={b}>
                            <Check
                              aria-hidden
                              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                              strokeWidth={2.5}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-coral">
                        View service details
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
