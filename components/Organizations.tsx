"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  isMbrlLogo,
  isOrgImagePath,
  mbrlLogoImageClass,
  mbrlLogoTileClass,
} from "@/lib/org-logos";
import {
  membershipOrganizations,
  membershipLogoSrc,
} from "@/lib/membership-orgs";
import { MotionSection } from "./MotionSection";
import { SectionLabel } from "./SectionLabel";
import { sectionPad, scrollAnchor } from "@/lib/section-classes";

export function Organizations() {
  return (
    <section
      id="organizations"
      className={`section-streak relative z-10 ${sectionPad} ${scrollAnchor}`}
    >
      <div className="mx-auto max-w-6xl">
        <MotionSection>
          <SectionLabel>Organizations</SectionLabel>
          <h2 className="mt-5 font-display text-3xl italic leading-snug text-white sm:text-4xl">
            Campus &amp; National Communities
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-chrome-steel">
            Groups where I&apos;ve built products, consulted for impact, and
            leveled up on markets—each card opens the organization&apos;s site.
          </p>
        </MotionSection>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {membershipOrganizations.map((org, index) => {
            const src = membershipLogoSrc(org);
            const orgThumb = isOrgImagePath(src);
            const mbrlThumb = isMbrlLogo(src);
            return (
              <MotionSection
                key={org.href}
                delay={0.06 * index}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="group h-full"
                >
                  <a
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card flex h-full flex-col overflow-hidden rounded-lg"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06] bg-chrome-deep">
                      {mbrlThumb ? (
                        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                          <div
                            className={`relative h-full max-h-[86%] w-full max-w-[92%] ${mbrlLogoTileClass()} p-4 sm:p-5`}
                          >
                            <Image
                              src={src}
                              alt={`${org.name} logo`}
                              fill
                              className={`${mbrlLogoImageClass()} object-contain object-center p-3 opacity-90 transition group-hover:opacity-100`}
                              sizes="(max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      ) : orgThumb ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02] p-6 sm:p-10">
                          <Image
                            src={src}
                            alt={`${org.name} logo`}
                            width={400}
                            height={160}
                            className="max-h-28 w-auto max-w-[min(92%,320px)] object-contain object-center opacity-90 transition group-hover:opacity-100 sm:max-h-32"
                          />
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-base font-semibold tracking-wide text-white">
                        {org.name}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-chrome-steel">
                        {org.description}
                      </p>
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent/60 transition group-hover:text-accent">
                        Visit site →
                      </p>
                    </div>
                  </a>
                </motion.div>
              </MotionSection>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
