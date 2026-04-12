"use client";

import Image from "next/image";
import {
  awards,
  educationPrograms,
  relevantCoursework,
} from "@/lib/portfolio-data";
import { FeaturedAwardCallout } from "./FeaturedAwardCallout";
import { MotionSection } from "./MotionSection";
import { SectionLabel } from "./SectionLabel";
import { sectionPad, scrollAnchor } from "@/lib/section-classes";

export function Education() {
  return (
    <section
      id="education"
      className={`section-streak relative z-10 ${sectionPad} ${scrollAnchor}`}
    >
      <div className="mx-auto max-w-6xl">
        <MotionSection>
          <SectionLabel>Education</SectionLabel>
          <h2 className="chrome-text-static mt-5 font-display text-3xl italic leading-snug sm:text-4xl">
            Degrees, GPA, Honors, Coursework
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50">
            USC Marshall — dual-degree path, GPA, awards, and selected
            coursework for recruiters.
          </p>
        </MotionSection>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_minmax(0,1.05fr)] lg:items-start">
          <MotionSection delay={0.06} className="space-y-6">
            {educationPrograms.map((prog) => (
              <div
                key={prog.school + prog.degree}
                className="glass-card rounded-lg p-6"
              >
                {prog.college ? (
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    {prog.college}
                  </p>
                ) : null}
                <h3 className="mt-3 text-xl font-semibold tracking-wide text-white">
                  {prog.school}
                </h3>
                <p className="mt-1 text-xs text-white/40">{prog.location}</p>
                <p className="mt-3 text-sm font-medium text-white/70">
                  {prog.degree}
                </p>
                {prog.detail ? (
                  <p className="mt-2 text-sm text-white/50">
                    {prog.detail}
                  </p>
                ) : null}
                {prog.end ? (
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-white/40">
                    {prog.end}
                  </p>
                ) : null}

                {prog.gpa ? (
                  <div className="mt-8 border-t border-white/[0.06] pt-8">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                      Grade Point Average
                    </p>
                    <p className="mt-3 flex items-baseline gap-2">
                      <span className="text-4xl font-semibold tabular-nums tracking-tight text-white sm:text-5xl">
                        {prog.gpa.value}
                      </span>
                      <span className="text-lg font-medium text-white/40">
                        / {prog.gpa.scale}
                      </span>
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
                      {prog.gpa.note}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </MotionSection>

          <MotionSection delay={0.1}>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Awards And Honors
              </p>
              <ul className="mt-6 space-y-5">
                {awards.map((a) => (
                  <li key={a.title} className="glass-card rounded-lg p-5">
                    {a.prizeLabel && a.logo ? (
                      <>
                        <FeaturedAwardCallout
                          title={a.title}
                          prizeLabel={a.prizeLabel}
                          logoSrc={a.logo}
                          year={a.year}
                        />
                        <p className="mt-4 text-sm font-medium text-white/70">
                          {a.issuer}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/50">
                          {a.detail}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex min-w-0 items-start gap-3">
                            {a.logo ? (
                              <Image
                                src={a.logo}
                                alt=""
                                width={40}
                                height={40}
                                className="mt-0.5 h-10 w-10 shrink-0 rounded-md object-contain object-center ring-1 ring-white/10 bg-black/35"
                              />
                            ) : null}
                            <div className="min-w-0">
                              <h4 className="text-base font-semibold tracking-wide text-white">
                                {a.title}
                              </h4>
                            </div>
                          </div>
                          {a.year && a.year !== "—" ? (
                            <time className="font-mono text-xs uppercase tracking-wider text-white/30">
                              {a.year}
                            </time>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-white/70">
                          {a.issuer}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/50">
                          {a.detail}
                        </p>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </MotionSection>
        </div>

        <MotionSection delay={0.12} className="mt-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
            Coursework That Backs The Work
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {relevantCoursework.map((c) => (
              <li
                key={c}
                className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
              >
                {c}
              </li>
            ))}
          </ul>
        </MotionSection>
      </div>
    </section>
  );
}
