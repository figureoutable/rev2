"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RetroComputerInbox() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[min(420px,92vw)]"
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative aspect-square w-full px-4 pb-2 pt-6 sm:px-6 sm:pb-4 sm:pt-8">
        <motion.div
          animate={{
            y: [0, -9, 0],
          }}
          className="relative h-full min-h-[240px] w-full will-change-transform"
          transition={{
            duration: 5.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image
            alt="Vintage desktop computer with CRT monitor"
            className="object-contain object-center drop-shadow-[8px_12px_24px_rgba(0,0,0,0.12)]"
            fill
            priority
            sizes="(max-width: 1024px) 85vw, 380px"
            src="/retro-computer.png"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
