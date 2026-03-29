"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type AnimateInDirection = "up" | "left" | "right";

type AnimateInProps = {
  children: ReactNode;
  /** Stagger delay in seconds */
  delay?: number;
  direction?: AnimateInDirection;
  /** When false, only opacity (avoids transform on parent — e.g. sticky navbar) */
  slide?: boolean;
  className?: string;
};

const OFFSET: Record<AnimateInDirection, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
};

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  slide = true,
  className,
}: AnimateInProps) {
  const o = slide ? OFFSET[direction] : { x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: o.x, y: o.y }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-48px", amount: 0.15 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
