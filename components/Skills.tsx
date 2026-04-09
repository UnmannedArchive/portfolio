"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import {
  humanLanguages,
  interests,
  organizations,
  skillGroups,
  skillProficiency,
} from "@/lib/portfolio-data";
import {
  isMbrlLogo,
  mbrlLogoImageClass,
  mbrlLogoTileClass,
  organizationLogoPaths,
} from "@/lib/org-logos";
import { MotionSection } from "./MotionSection";
import { SectionLabel } from "./SectionLabel";
import { sectionPad, scrollAnchor } from "@/lib/section-classes";

const groupLabels: Record<string, string> = {
  languagesFrameworks: "Languages & Frameworks",
  dataMl: "Data & ML",
  financePlatforms: "Finance Platforms",
  productDesign: "Product & Analytics",
  collaboration: "Collaboration",
};

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-white/[0.1] bg-white/[0.04] px-2.5 py-1.5 text-xs text-chrome-steel">
      {children}
    </span>
  );
}

function OrgChip({ name }: { name: string }) {
  const src = organizationLogoPaths[name];
  if (!src) return <Pill>{name}</Pill>;
  const mbrl = isMbrlLogo(src);
  return (
    <span className="inline-flex items-center gap-2 rounded border border-white/[0.1] bg-white/[0.04] px-2.5 py-1.5">
      <span
        className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center overflow-hidden ${
          mbrl ? `${mbrlLogoTileClass()} p-0.5` : "rounded ring-1 ring-white/10 bg-black/35"
        }`}
      >
        <Image
          src={src}
          alt=""
          width={22}
          height={22}
          className={
            mbrl
              ? `h-full w-full ${mbrlLogoImageClass()} object-contain object-center`
              : "h-[22px] w-[22px] max-h-[22px] max-w-[22px] rounded object-contain object-center"
          }
        />
      </span>
      <span className="text-xs text-chrome-steel">{name}</span>
    </span>
  );
}

function BarRow({
  name,
  level,
}: {
  name: string;
  level: "day-to-day" | "advanced" | "proficient";
}) {
  const widthPct =
    level === "day-to-day" ? "88%" : level === "advanced" ? "72%" : "55%";
  const label =
    level === "day-to-day"
      ? "Day-to-day"
      : level === "advanced"
        ? "Advanced"
        : "Proficient";
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
      <span className="w-48 shrink-0 text-sm text-chrome-silver">{name}</span>
      <div className="flex flex-1 items-center gap-3">
        <div className="h-1.5 flex-1 max-w-[200px] rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-white/50 transition-all"
            style={{ width: widthPct }}
          />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-chrome-mist">
          {label}
        </span>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className={`relative z-10 border-t border-white/[0.06] ${sectionPad} ${scrollAnchor}`}
    >
      <div className="mx-auto max-w-5xl">
        <MotionSection>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="mt-5 font-display text-3xl italic leading-snug text-white sm:text-4xl">
            Stack, depth, and curiosity
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-chrome-steel">
            Grouped by how I actually use them — not every tool is equally
            central.
          </p>
        </MotionSection>

        <MotionSection delay={0.06} className="mt-10 space-y-6 rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-mist">
            Depth — self-assessed
          </p>
          <div className="space-y-4">
            {skillProficiency.map((s) => (
              <BarRow key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </MotionSection>

        <div className="mt-10 space-y-10">
          {(Object.keys(skillGroups) as (keyof typeof skillGroups)[]).map(
            (key, i) => (
              <MotionSection key={key} delay={0.04 * i}>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-mist">
                  {groupLabels[key]}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillGroups[key].map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </MotionSection>
            )
          )}
        </div>

        <MotionSection delay={0.08} className="mt-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-mist">
            Where I show up
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {organizations.map((t) => (
              <OrgChip key={t} name={t} />
            ))}
          </div>
        </MotionSection>

        <MotionSection delay={0.1} className="mt-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-mist">
            Human languages
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {humanLanguages.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </MotionSection>

        <MotionSection delay={0.12} className="mt-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-mist">
            Off the clock
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {interests.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-white/[0.12] bg-white/[0.04] px-2.5 py-1.5 text-xs text-chrome-silver underline-offset-2 transition hover:border-white/25 hover:text-white"
                >
                  {item.label}
                  {item.hint ? ` · ${item.hint}` : ""}
                </a>
              ) : (
                <Pill key={item.label}>{item.label}</Pill>
              )
            )}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
