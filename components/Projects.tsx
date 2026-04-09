"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/portfolio-data";
import {
  isMbrlLogo,
  isOrgImagePath,
  mbrlLogoImageClass,
  mbrlLogoTileClass,
} from "@/lib/org-logos";
import { MotionSection } from "./MotionSection";
import { SectionLabel } from "./SectionLabel";
import { sectionPad, scrollAnchor } from "@/lib/section-classes";

export function Projects() {
  return (
    <section
      id="projects"
      className={`relative z-10 border-t border-white/[0.06] ${sectionPad} ${scrollAnchor}`}
    >
      <div className="mx-auto max-w-5xl">
        <MotionSection>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="mt-5 font-display text-3xl italic leading-snug text-white sm:text-4xl">
            Case Studies: Problem, Stack, Outcome
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-chrome-steel">
            Each card opens a short case write-up — problem, stack, and outcomes.
            Some cards use partner or organization logos; swap in product
            screenshots
            anytime under{" "}
            <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-xs text-chrome-silver">
              public/images/projects/
            </code>
            .
          </p>
        </MotionSection>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p, index) => {
            const orgThumb = isOrgImagePath(p.image);
            const mbrlThumb = isMbrlLogo(p.image);
            return (
              <MotionSection
                key={p.slug}
                delay={0.06 * index}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="group relative h-full overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.02] transition hover:border-white/20"
                >
                  <Link
                    href={`/projects/${p.slug}`}
                    className="flex h-full flex-col"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-chrome-deep">
                      {mbrlThumb ? (
                        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                          <div
                            className={`relative h-full max-h-[88%] w-full max-w-[94%] ${mbrlLogoTileClass()} p-4 sm:p-6`}
                          >
                            <Image
                              src={p.image}
                              alt=""
                              fill
                              className={`${mbrlLogoImageClass()} object-contain object-center p-3 sm:p-4 opacity-95 transition group-hover:opacity-100`}
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                          <Image
                            src={p.image}
                            alt=""
                            fill
                            className="object-contain object-center opacity-90 transition group-hover:opacity-100"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                    </div>
                    <article className="flex flex-1 flex-col p-5">
                      <h3 className="text-xl font-semibold tracking-wide text-white">
                        {p.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-chrome-steel">
                        {p.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="border border-white/[0.08] bg-chrome-void/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-chrome-mist"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex text-sm font-semibold text-chrome-ice transition group-hover:text-white">
                        Case study →
                      </span>
                    </article>
                  </Link>
                </motion.div>
              </MotionSection>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
