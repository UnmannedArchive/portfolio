"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  experience,
  leadership,
  type ExperienceItem,
} from "@/lib/portfolio-data";
import {
  isMbrlLogo,
  logoForExperienceOrg,
  mbrlLogoImageClass,
  mbrlLogoTileClass,
} from "@/lib/org-logos";
import { MotionSection } from "./MotionSection";
import { SectionLabel } from "./SectionLabel";
import { sectionPad, scrollAnchor } from "@/lib/section-classes";

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative mt-10">
      <div
        className="absolute bottom-2 left-[9px] top-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent sm:left-[13px]"
        aria-hidden
      />
      <ol className="space-y-12">
        {items.map((item, i) => {
          const orgLogo = logoForExperienceOrg(item.org);
          return (
            <MotionSection
              key={item.org + item.period + item.role}
              delay={0.06 * i}
            >
              <li className="relative pl-12 sm:pl-16">
                <motion.span
                  className="absolute left-0 top-2 flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-accent/30 bg-chrome-deep shadow-[0_0_12px_rgba(59,130,246,0.15)] sm:left-1 sm:h-7 sm:w-7"
                  aria-hidden
                  whileHover={{
                    scale: 1.12,
                    borderColor: "rgba(59,130,246,0.5)",
                    boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  {orgLogo ? (
                    <span
                      className={`flex h-full w-full items-center justify-center overflow-hidden ${
                        isMbrlLogo(orgLogo)
                          ? `${mbrlLogoTileClass()} p-0.5`
                          : ""
                      }`}
                    >
                      <Image
                        src={orgLogo}
                        alt=""
                        width={28}
                        height={28}
                        className={
                          isMbrlLogo(orgLogo)
                            ? `h-full w-full ${mbrlLogoImageClass()} object-contain object-center`
                            : "h-full w-full object-contain object-center p-0.5"
                        }
                      />
                    </span>
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  )}
                </motion.span>
                <time className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent/70">
                  {item.period}
                </time>
                <h3 className="mt-2 text-lg font-semibold tracking-wide text-white sm:text-xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-chrome-silver">
                  {item.org}
                </p>
                <p className="mt-0.5 text-xs text-chrome-mist">
                  {item.location}
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-chrome-silver">
                  {item.summaryPlain}
                </p>
                <ul className="mt-4 max-w-3xl list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-chrome-steel marker:text-accent/40">
                  {item.bullets.map((b, j) => (
                    <li key={`${item.org}-${item.period}-${j}`}>{b}</li>
                  ))}
                </ul>
              </li>
            </MotionSection>
          );
        })}
      </ol>
    </div>
  );
}

export function Experience() {
  return (
    <>
      <section
        id="experience"
        className={`section-streak relative z-10 ${sectionPad} ${scrollAnchor}`}
      >
        <div className="mx-auto max-w-6xl">
          <MotionSection>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mt-5 font-display text-3xl italic leading-snug text-white sm:text-4xl">
              Industry And Research Roles
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-chrome-steel">
              Each role opens with a plain-English summary, then the résumé
              bullets.
            </p>
          </MotionSection>
          <Timeline items={experience} />
        </div>
      </section>

      <section
        id="leadership"
        className={`section-streak relative z-10 bg-accent/[0.02] ${sectionPad} ${scrollAnchor}`}
      >
        <div className="mx-auto max-w-6xl">
          <MotionSection>
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="mt-5 font-display text-3xl italic leading-snug text-white sm:text-4xl">
              Campus Leadership With Deliverables
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-chrome-steel">
              Organizations where I own the analysis, the narrative, and
              stakeholder-ready deliverables.
            </p>
          </MotionSection>
          <Timeline items={leadership} />
        </div>
      </section>
    </>
  );
}
