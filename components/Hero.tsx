"use client";

import { motion } from "framer-motion";
import { ResumePdfLink } from "@/components/ResumePdfLink";
import { Starfield } from "@/components/Starfield";

const ease = [0.22, 1, 0.36, 1] as const;

function StatBlock({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
      className="flex flex-col"
    >
      <span className="text-3xl font-semibold tabular-nums tracking-tight text-white sm:text-4xl">
        {value}
      </span>
      <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
        {label}
      </span>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 sm:px-6"
    >
      <Starfield />

      {/* Horizontal chrome line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease }}
        className="absolute left-0 right-0 top-[38%] h-px origin-left bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-px w-12 origin-left animate-line-grow bg-white/40" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            AI | Finance | Product
          </span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-[-0.03em] text-white"
          >
            Joseph
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.18, ease }}
            className="chrome-text font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-[-0.03em]"
          >
            Solomon
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-8 max-w-xl text-[15px] leading-[1.85] text-white/50 sm:text-base"
        >
          Based in{" "}
          <strong className="font-medium text-white/80">Los Angeles</strong> and{" "}
          <strong className="font-medium text-white/80">New York City</strong>.
          Co-founder of{" "}
          <strong className="font-medium text-white/80">Lattice</strong> — building
          pharma IP analytics. USC Merit Scholar. Marshall School of Business
          (B.S. + M.S. Finance). Shipping quant systems, LLM pipelines, and
          research that moves capital.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 24 }}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-white/20 bg-white/[0.05] px-8 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/[0.1] hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10">See The Work</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 24 }}
            className="inline-flex items-center justify-center rounded-sm border border-white/10 px-8 py-3.5 text-sm font-semibold tracking-wide text-white/70 backdrop-blur-sm transition-all duration-400 hover:border-white/25 hover:text-white hover:shadow-[0_0_30px_-8px_rgba(255,255,255,0.1)]"
          >
            Get In Touch
          </motion.a>
          <ResumePdfLink className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-medium tracking-wide text-white/40 transition-colors hover:text-white/70">
            Resume ↓
          </ResumePdfLink>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-end gap-8 border-t border-white/[0.06] pt-8 sm:mt-20 sm:gap-16"
        >
          <StatBlock value="5+" label="Ventures" delay={0.65} />
          <StatBlock value="2" label="Degrees" delay={0.72} />
          <StatBlock value="1st" label="LavaLab Best Product" delay={0.79} />
          <StatBlock value="$4B+" label="AUM Supported" delay={0.86} />
          <div className="hidden flex-1 items-center gap-3 sm:flex">
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
              2024 – Present
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12"
      >
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          className="flex flex-col items-center gap-3 text-white/25 transition-colors hover:text-white/50"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.4em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="block h-8 w-px bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
