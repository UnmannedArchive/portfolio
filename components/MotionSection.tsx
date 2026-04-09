"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px", amount: 0.1 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

type MotionSectionProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function MotionSection({
  children,
  className = "",
  delay = 0,
  ...props
}: MotionSectionProps) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
