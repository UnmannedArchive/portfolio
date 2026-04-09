"use client";

import { motion } from "framer-motion";
import { ResumePdfLink } from "@/components/ResumePdfLink";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100dvh] flex-col justify-center px-4 sm:px-6"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-16 origin-left animate-line-grow bg-gradient-to-r from-white/60 to-transparent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-chrome-mist/80">
            AI | Finance | Product
          </span>
        </motion.div>

        {/* Name — the biggest thing on the page */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.02em] text-white"
        >
          Joseph
          <br />
          <span className="text-chrome-ice/90">Solomon</span>
        </motion.h1>

        {/* Subtitle — serif italic creates tension against the sans body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-8 max-w-xl text-[15px] leading-[1.8] text-chrome-steel sm:text-base"
        >
          Co-founder of{" "}
          <strong className="font-medium text-white">Lattice</strong> — building
          pharma IP analytics. USC Merit Scholar. Marshall School of Business
          (B.S. + M.S. Finance). Shipping quant systems, LLM pipelines, and
          research that moves capital.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36, ease }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 500, damping: 24 }}
            className="group relative inline-flex items-center justify-center overflow-hidden bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-black transition-shadow hover:shadow-[0_0_40px_-4px_rgba(255,255,255,0.5)]"
          >
            <span className="relative z-10">See the work</span>
            <span className="absolute inset-0 -translate-x-full bg-chrome-ice transition-transform duration-300 group-hover:translate-x-0" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 500, damping: 24 }}
            className="inline-flex items-center justify-center border border-white/20 px-8 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06]"
          >
            Get in touch
          </motion.a>
          <ResumePdfLink className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-medium tracking-wide text-chrome-mist transition-colors hover:text-white">
            Resume ↓
          </ResumePdfLink>
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
          className="flex flex-col items-center gap-3 text-chrome-mist/60 transition-colors hover:text-chrome-mist"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="block h-8 w-px bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
