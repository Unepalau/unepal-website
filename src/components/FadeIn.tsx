"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
