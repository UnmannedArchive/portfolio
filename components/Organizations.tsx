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
      className={`relative z-10 border-t border-white/[0.06] ${sectionPad} ${scrollAnchor}`}
    >
      <div className="mx-auto max-w-5xl">
        <MotionSection>
          <SectionLabel>Organizations</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold tracking-wide text-white sm:text-3xl md:text-[2rem]">
            Campus &amp; national communities
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
              <MotionSection key={org.href} delay={0.06 * index} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="group h-full"
                >
                  <a
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.02] transition hover:border-white/20"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-chrome-deep">
                      {mbrlThumb ? (
                        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                          <div
                            className={`relative h-full max-h-[86%] w-full max-w-[92%] ${mbrlLogoTileClass()} p-4 sm:p-5`}
                          >
                            <Image
                              src={src}
                              alt={`${org.name} logo`}
                              fill
                              className={`${mbrlLogoImageClass()} object-contain object-center p-3 opacity-95 transition group-hover:opacity-100`}
                              sizes="(max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      ) : orgThumb ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/[0.04] p-6 sm:p-10">
                          <Image
                            src={src}
                            alt={`${org.name} logo`}
                            width={400}
                            height={160}
                            className="max-h-28 w-auto max-w-[min(92%,320px)] object-contain object-center opacity-95 transition group-hover:opacity-100 sm:max-h-32"
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
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-chrome-mist transition group-hover:text-chrome-silver">
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
