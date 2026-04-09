import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectSlugs,
  projectDetails,
} from "@/lib/project-details";
import {
  isMbrlLogo,
  mbrlLogoImageClass,
  mbrlLogoTileClass,
} from "@/lib/org-logos";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = projectDetails[params.slug];
  if (!p) return {};
  return {
    title: `${p.title} — Joseph Solomon`,
    description: p.tagline,
  };
}

export default function ProjectPage({ params }: Props) {
  const p = projectDetails[params.slug];
  if (!p) notFound();
  const mbrlHero = isMbrlLogo(p.image);

  return (
    <main className="min-h-dvh bg-chrome-void px-4 pb-24 pt-28 text-chrome-steel sm:px-6">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="font-mono text-xs uppercase tracking-wider text-accent/70 transition hover:text-white"
        >
          ← Back to projects
        </Link>

        <div className="glass-card relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl">
          {mbrlHero ? (
            <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
              <div
                className={`relative h-full max-h-[90%] w-full max-w-2xl ${mbrlLogoTileClass()} p-6 sm:p-10`}
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className={`${mbrlLogoImageClass()} object-contain object-center p-4 sm:p-6`}
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
              <Image
                src={p.image}
                alt=""
                fill
                className="object-contain object-center"
                priority
                sizes="100vw"
              />
            </div>
          )}
        </div>

        <h1 className="mt-8 text-3xl font-semibold tracking-wide text-white sm:text-4xl">
          {p.title}
        </h1>
        <p className="mt-2 text-lg text-chrome-silver">{p.tagline}</p>

        <section className="mt-10 space-y-4">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent/70">
            The Problem
          </h2>
          <p className="leading-relaxed">{p.problem}</p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent/70">
            What I Owned
          </h2>
          <p className="leading-relaxed">{p.role}</p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent/70">
            Tools And Stack
          </h2>
          <ul className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li
                key={s}
                className="rounded border border-accent/10 bg-accent/[0.04] px-2.5 py-1 text-sm text-chrome-silver"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent/70">
            How It Fits Together
          </h2>
          <p className="leading-relaxed">{p.architecture}</p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent/70">
            What Changed
          </h2>
          <ul className="list-disc space-y-2 pl-5 marker:text-accent/40">
            {p.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>

        <section className="glass-card mt-10 rounded-lg p-6">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent/70">
            More Visuals
          </h2>
          <p className="mt-2 text-sm text-chrome-mist">
            Add screenshots, diagrams, or demo links here. Hero art is set in{" "}
            <code className="rounded bg-white/5 px-1 text-xs">
              lib/project-details.ts
            </code>{" "}
            (paths under{" "}
            <code className="rounded bg-white/5 px-1 text-xs">public/</code>
            ).
          </p>
        </section>

        <p className="mt-12 text-center">
          <Link
            href="/#contact"
            className="text-sm font-semibold text-accent hover:text-white"
          >
            Discuss this project →
          </Link>
        </p>
      </article>
    </main>
  );
}
