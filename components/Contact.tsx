"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/contact";
import { resume } from "@/lib/resume";
import { ContactForm } from "./ContactForm";
import { MotionSection } from "./MotionSection";
import { SectionLabel } from "./SectionLabel";
import { sectionPad, scrollAnchor } from "@/lib/section-classes";

export function Contact() {
  return (
    <section
      id="contact"
      className={`relative z-10 border-t border-white/[0.06] ${sectionPad} ${scrollAnchor}`}
    >
      <div className="mx-auto max-w-5xl">
        <MotionSection>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold tracking-wide text-white sm:text-3xl md:text-[2rem]">
            Say hello
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-chrome-steel">
            Internships, collaborations, or introductions related to Lattice,
            Mariner, Marshall Behavioral Lab, BlackGen, and 180 Degrees
            Consulting.
          </p>
        </MotionSection>

        <MotionSection delay={0.05} className="mt-8 rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-mist">
            What I&apos;m optimizing for
          </p>
          <p className="mt-3 text-sm leading-relaxed text-chrome-steel">
            I&apos;m actively interested in{" "}
            <strong className="font-medium text-chrome-silver">
              2026 internships and new-grad roles
            </strong>{" "}
            spanning investing, product, and data/ML at the boundary of finance
            — and in{" "}
            <strong className="font-medium text-chrome-silver">
              co-founder / advisor
            </strong>{" "}
            conversations where Lattice&apos;s wedge is a fit. Also open to
            selective research and volunteer consulting through USC Marshall
            student organizations.
          </p>
        </MotionSection>

        <MotionSection delay={0.06} className="mt-12">
          <SectionLabel>Resume</SectionLabel>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-chrome-steel">
            PDF — file size is approximate.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <motion.a
              href={resume.href}
              download={resume.fileName}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="flex flex-1 flex-col justify-center rounded-lg border border-white/[0.1] bg-white/[0.02] px-6 py-5 transition hover:border-white/20 hover:bg-white/[0.04] sm:min-w-[240px] sm:max-w-sm"
            >
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-mist">
                {resume.label}
              </span>
              <span className="mt-2 text-base font-medium text-chrome-silver">
                Download PDF →
              </span>
              <span className="mt-1 font-mono text-[11px] text-chrome-mist">
                {resume.sizeLabel}
              </span>
            </motion.a>
          </div>
        </MotionSection>

        <MotionSection delay={0.08}>
          <ContactForm />
        </MotionSection>

        <MotionSection
          delay={0.1}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="group relative flex flex-col justify-center overflow-hidden rounded-lg p-[1px] bg-gradient-to-br from-white/30 via-white/10 to-transparent lg:col-span-2"
          >
            <div className="chrome-panel flex flex-1 flex-col justify-center px-6 py-5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-mist">
                Email
              </span>
              <span className="mt-2 text-sm font-medium text-white sm:text-base">
                {contact.email}
              </span>
            </div>
          </motion.a>
          <motion.a
            href={`tel:${contact.phoneTel}`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="flex flex-col justify-center rounded-lg border border-white/[0.1] bg-white/[0.02] px-6 py-5 transition hover:border-white/20 hover:bg-white/[0.04]"
          >
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-steel">
              Phone
            </span>
            <span className="mt-2 text-sm font-medium text-chrome-silver sm:text-base">
              {contact.phoneDisplay}
            </span>
          </motion.a>
          <motion.a
            href={contact.linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="flex flex-col justify-center rounded-lg border border-white/[0.1] bg-white/[0.02] px-6 py-5 transition hover:border-white/20 hover:bg-white/[0.04]"
          >
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-steel">
              LinkedIn
            </span>
            <span className="mt-2 text-sm font-medium text-chrome-silver sm:text-base">
              Profile →
            </span>
          </motion.a>
          <motion.a
            href={contact.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="flex flex-col justify-center rounded-lg border border-white/[0.1] bg-white/[0.02] px-6 py-5 transition hover:border-white/20 hover:bg-white/[0.04] sm:col-span-2 lg:col-span-4"
          >
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-steel">
              GitHub
            </span>
            <span className="mt-2 text-sm font-medium text-chrome-silver sm:text-base">
              {contact.githubHref.replace("https://", "")} →
            </span>
          </motion.a>
        </MotionSection>
      </div>
    </section>
  );
}
