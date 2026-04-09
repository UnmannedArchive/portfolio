"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  prizeLabel: string;
  logoSrc: string;
  year?: string;
};

/**
 * Featured award block: site-themed headline, animated gradient title,
 * cycling accent on the prize line, LavaLab mark. Used when an award has prizeLabel set.
 */
export function FeaturedAwardCallout({
  title,
  prizeLabel,
  logoSrc,
  year,
}: Props) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-white/[0.12] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-chrome-deep/80 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        borderColor: "rgba(167, 243, 208, 0.35)",
        boxShadow:
          "inset 0 1px 0 0 rgba(255,255,255,0.12), 0 0 40px -12px rgba(167, 243, 208, 0.15)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl transition-opacity duration-700 group-hover:bg-emerald-400/20"
        aria-hidden
      />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-chrome-mist">
            Featured Honor
          </p>
          <h4 className="mt-2 text-xl font-semibold leading-snug tracking-[0.02em] text-white sm:text-2xl md:text-[1.65rem]">
            <span className="award-title-shimmer bg-gradient-to-r from-chrome-ice via-white to-emerald-200/90 bg-clip-text text-transparent">
              {title}
            </span>
          </h4>
          <motion.p
            className="mt-3 inline-block font-mono text-base font-semibold tabular-nums tracking-wide sm:text-lg"
            animate={{
              color: [
                "#d4d4d4",
                "#a7f3d0",
                "#e5e4e2",
                "#6ee7b7",
                "#d4d4d4",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {prizeLabel}
          </motion.p>
        </div>
        <motion.div
          className="flex shrink-0 items-center justify-center self-start rounded-lg border border-white/10 bg-black/40 p-2 ring-1 ring-white/10 sm:mt-6"
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <Image
            src={logoSrc}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 max-h-12 max-w-12 object-contain object-center"
          />
        </motion.div>
      </div>
      {year && year !== "—" ? (
        <time className="mt-4 block font-mono text-xs uppercase tracking-wider text-chrome-mist">
          {year}
        </time>
      ) : null}
    </motion.div>
  );
}
