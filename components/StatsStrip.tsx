"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const RESULTS_ITEMS = [
  {
    src: "/images/results/campaign-1.png",
    alt: "Campaign analytics: sent, opened, replied, and positive reply rates",
    company: "Figures",
    logoSrc: "/images/results/logos/figures.png",
    logoWidth: 608,
    logoHeight: 256,
    description:
      "UK chartered accountancy firm supporting SME founders with accounts, VAT, payroll and tax compliance.",
  },
  {
    src: "/images/results/campaign-2.png",
    alt: "Campaign analytics: sent, opened, replied, and positive reply rates",
    company: "Graceful Notes",
    logoSrc: "/images/results/logos/graceful-notes.png",
    logoWidth: 792,
    logoHeight: 204,
    description:
      "Helps content creators repurpose long-form video into polished newsletters, handling everything from transcription to editorial.",
  },
  {
    src: "/images/results/campaign-3.png",
    alt: "Campaign analytics: sent, opened, replied, and positive reply rates",
    company: "Panda Digital",
    logoSrc: "/images/results/logos/panda-digital.png",
    logoWidth: 778,
    logoHeight: 376,
    description:
      "Performance marketing agency specialising in SEO, Google Ads and Meta Ads for growth-focused businesses.",
  },
  {
    src: "/images/results/campaign-4.png",
    alt: "Campaign analytics: sent, opened, replied, and positive reply rates",
    company: "Alcott Analytics",
    logoSrc: "/images/results/logos/alcott-analytics.png",
    logoWidth: 710,
    logoHeight: 340,
    description:
      "Specialist market research and intelligence for banking and financial services firms, delivering data-driven insight on market trends and competitor positioning.",
  },
  {
    src: "/images/results/campaign-5.png",
    alt: "Campaign analytics: sent, opened, replied, and positive reply rates",
    company: "Sparkline Commercial Cleaning",
    logoSrc: "/images/results/logos/sparkline-commercial-cleaning.png",
    logoWidth: 764,
    logoHeight: 108,
    description:
      "Commercial cleaning company servicing offices and industrial units. They show up on time, do the job properly, and keep spaces spotless so business owners can focus on running their business.",
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
      className="scroll-mt-24 border-t border-neutral-200/90 bg-[#f4f4f2] pb-[3.9rem] pt-[1.625rem] sm:pb-[4.55rem] sm:pt-[1.95rem]"
      id="stats"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-coral">
            See Our Results
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Numbers that match the work
          </h2>
        </div>

        <div className="mx-auto mt-10 w-full max-w-6xl space-y-4 sm:mt-12 sm:space-y-5 lg:mt-14">
          {RESULTS_ITEMS.map((item, i) => (
            <motion.article
              className={`${cardClass} grid gap-4 p-3 sm:p-4 md:grid-cols-2 md:items-center`}
              initial={{ opacity: 0, y: 12 }}
              key={item.src}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true, margin: "-40px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="min-w-0 bg-neutral-50/90 p-2 sm:p-3">
                <Image
                  alt={item.alt}
                  className="h-auto w-full"
                  height={SHOT_HEIGHT}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                  src={item.src}
                  width={SHOT_WIDTH}
                />
              </div>

              <div className="text-right">
                <div className="flex h-12 w-full justify-end">
                  <Image
                    alt={`${item.company} logo`}
                    className="h-full w-auto object-contain"
                    height={item.logoHeight}
                    src={item.logoSrc}
                    width={item.logoWidth}
                  />
                </div>
                <h3 className="font-heading mt-3 text-2xl font-semibold text-ink">
                  {item.company}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
