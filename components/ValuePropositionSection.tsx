"use client";

import { motion } from "framer-motion";

export default function ValuePropositionSection() {
  return (
    <section className="border-y border-ink/10 bg-white py-10 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-14 sm:px-6 md:grid-cols-2 md:items-end lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-coral">
            Powered by data
          </p>
          <h2 className="font-heading mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            All your pipeline signals—without the busywork
          </h2>
        </motion.div>
        <motion.p
          className="text-base leading-[1.75] text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          We move targeting, messaging, and reply data from spreadsheet chaos into a
          single weekly readout—so you can see what&apos;s working and double down.
        </motion.p>
      </div>
    </section>
  );
}
