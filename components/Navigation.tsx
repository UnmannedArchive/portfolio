"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { contact } from "@/lib/contact";
import { ResumePdfLink } from "@/components/ResumePdfLink";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#organizations", label: "Organizations" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-chrome-void/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-[0.35em] text-chrome-ice transition hover:text-white"
        >
          JS
        </a>

        <ul className="hidden flex-wrap items-center justify-end gap-1 md:flex md:gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-1 py-1 text-[13px] font-medium tracking-wide text-chrome-steel transition hover:text-chrome-ice"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={contact.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-1 text-[13px] font-medium tracking-wide text-chrome-steel transition hover:text-chrome-ice"
            >
              GitHub
            </a>
          </li>
          <li>
            <ResumePdfLink className="px-1 py-1 text-[13px] font-medium tracking-wide text-chrome-steel transition hover:text-chrome-ice">
              Resume
            </ResumePdfLink>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-white/15 md:hidden"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 bg-chrome-silver" />
          <span className="block h-0.5 w-5 bg-chrome-silver" />
          <span className="block h-0.5 w-5 bg-chrome-silver" />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/[0.08] bg-chrome-void/95 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block py-2 text-sm font-medium text-chrome-steel"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-sm font-medium text-chrome-steel"
                  onClick={() => setOpen(false)}
                >
                  GitHub
                </a>
              </li>
              <li>
                <ResumePdfLink
                  className="block py-2 text-sm font-medium text-chrome-steel"
                  onNavigate={() => setOpen(false)}
                >
                  Resume
                </ResumePdfLink>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
