"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingChat() {
  return (
    <motion.a
      animate={{ opacity: 1, y: 0 }}
      aria-label="Open chat"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-coral text-white shadow-lg shadow-coral/25 transition-colors hover:bg-coral-hover"
      href="#book-a-call"
      initial={{ opacity: 0, y: 10 }}
      transition={{ delay: 1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        scale: 1.03,
        transition: { type: "spring", stiffness: 400, damping: 26 },
      }}
      whileTap={{ scale: 1 }}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
    </motion.a>
  );
}
