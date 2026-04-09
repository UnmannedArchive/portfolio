"use client";

import Image from "next/image";
import { MotionSection } from "./MotionSection";
import { SectionLabel } from "./SectionLabel";
import { sectionPad, scrollAnchor } from "@/lib/section-classes";

export function About() {
  return (
    <section
      id="about"
      className={`section-streak relative z-10 ${sectionPad} ${scrollAnchor}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
          <div>
            <MotionSection>
              <SectionLabel>About</SectionLabel>
              <h2 className="mt-5 font-display text-3xl italic leading-snug text-white sm:text-4xl md:text-[2.5rem]">
                When The Math Has To Hold And The Story Has To Land.
              </h2>
            </MotionSection>

            <MotionSection
              delay={0.08}
              className="mt-8 space-y-5 text-base leading-[1.85] text-chrome-steel"
            >
              <p className="max-w-3xl">
                I&apos;m happiest when I&apos;m translating between worlds—code
                and capital, models and clients, messy data and a slide someone
                will actually trust. At USC I&apos;m stacking a B.S. with an AI
                minor and an M.S. Finance PDP because I want both the engineering
                vocabulary and the balance-sheet intuition.
              </p>
              <p className="max-w-3xl">
                Lattice is the bet I&apos;m most proud of: helping R&amp;D teams
                move faster on patents and compounds. Outside of that
                you&apos;ll find me on the Mariner desk, in the Marshall
                Behavioral Lab poking at LLMs, or at BlackGen stress-testing
                signals until they deserve a committee&apos;s time.
              </p>
            </MotionSection>
          </div>

          <MotionSection
            delay={0.06}
            className="mx-auto w-full max-w-[220px] lg:mx-0 lg:max-w-none"
          >
            <div className="glass-card flex aspect-square w-full max-w-[220px] items-center justify-center overflow-hidden rounded-xl lg:max-w-none">
              <Image
                src="/images/headshot.svg"
                alt=""
                width={400}
                height={400}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-2 text-center text-xs text-chrome-mist lg:text-left">
              Swap in your photo — replace{" "}
              <code className="rounded bg-white/5 px-1">
                public/images/headshot.svg
              </code>
            </p>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
