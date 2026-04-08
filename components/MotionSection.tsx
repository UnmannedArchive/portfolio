"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

/** No opacity in `initial` — SSR must not paint invisible content if JS fails. */
const fadeUp = {
  initial: { y: 22 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-40px", amount: 0.08 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
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
