"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ResumePdfLink } from "@/components/ResumePdfLink";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100dvh] flex-col justify-center px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[1fr_200px] lg:items-center">
        <div>
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-chrome-mist">
              AI | Finance | Product
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease }}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-[0.02em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Joseph Solomon
          </motion.h1>

          <motion.p
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease }}
            className="mt-6 max-w-2xl text-base font-medium leading-relaxed tracking-wide text-chrome-silver sm:text-lg"
          >
            Co-founder · USC Merit Scholar · USC Marshall (B.S. · M.S. in
            Finance (PDP)) · AI | Finance | Markets | Intellectual Property
          </motion.p>

          <motion.p
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease }}
            className="mt-8 max-w-xl text-pretty text-base leading-[1.75] text-chrome-steel sm:text-lg"
          >
            Building Lattice (pharma IP analytics), shipping quant and LLM
            systems, and turning complex financial and research data into
            clear decisions.
          </motion.p>

          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, delay: 0.34, ease }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_0_32px_-8px_rgba(255,255,255,0.4)] transition hover:bg-chrome-ice"
            >
              See the work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="inline-flex items-center justify-center border border-white/25 bg-white/[0.06] px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/[0.1]"
            >
              Get in touch
            </motion.a>
            <ResumePdfLink className="inline-flex items-center justify-center border border-white/15 px-8 py-3 text-sm font-semibold text-chrome-steel transition hover:border-white/30 hover:text-white">
              Resume
            </ResumePdfLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mx-auto flex shrink-0 justify-center lg:mx-0 lg:justify-end"
        >
          <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-chrome-deep shadow-[0_0_48px_-12px_rgba(255,255,255,0.25)] sm:h-52 sm:w-52">
            <Image
              src="/images/headshot.svg"
              alt="Joseph Solomon — replace with your professional headshot (swap file at public/images/headshot.svg or use headshot.jpg)"
              width={208}
              height={208}
              className="max-h-full max-w-full object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 8 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.58, duration: 0.7, ease }}
        className="mx-auto mt-16 flex max-w-5xl justify-center sm:mt-20"
      >
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-chrome-mist"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
            Explore
          </span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
