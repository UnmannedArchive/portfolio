"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { contact } from "@/lib/contact";
import { ResumePdfLink } from "@/components/ResumePdfLink";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#organizations", label: "Orgs" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="nav-link relative px-0.5 py-1 text-[13px] font-medium text-chrome-steel transition-colors hover:text-white">
      {children}
      <span className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-chrome-void/80 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-white transition-opacity hover:opacity-70"
        >
          JS
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href} className="group">
              <NavLink href={l.href}>{l.label}</NavLink>
            </li>
          ))}
          <li className="group">
            <a
              href={contact.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-0.5 py-1 text-[13px] font-medium text-chrome-steel transition-colors hover:text-white"
            >
              GitHub
            </a>
          </li>
          <li>
            <ResumePdfLink className="ml-2 inline-flex items-center rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium tracking-wide text-chrome-steel transition-all hover:border-white/30 hover:text-white">
              Resume
            </ResumePdfLink>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-chrome-silver"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-5 bg-chrome-silver"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-chrome-silver"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-chrome-void/95 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-0.5 px-4 py-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <a
                    href={l.href}
                    className="block py-2.5 text-sm font-medium text-chrome-steel transition-colors hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * links.length, duration: 0.3 }}
              >
                <a
                  href={contact.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2.5 text-sm font-medium text-chrome-steel"
                  onClick={() => setOpen(false)}
                >
                  GitHub
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * (links.length + 1), duration: 0.3 }}
              >
                <ResumePdfLink
                  className="block py-2.5 text-sm font-medium text-chrome-steel"
                  onNavigate={() => setOpen(false)}
                >
                  Resume
                </ResumePdfLink>
              </motion.li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
