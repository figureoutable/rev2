"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export type MotionPrimaryLinkProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
};

/**
 * Primary CTA links — subtle scale on hover (Framer Motion).
 */
export function MotionPrimaryLink({
  children,
  className,
  ...props
}: MotionPrimaryLinkProps) {
  return (
    <motion.a
      className={className}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
