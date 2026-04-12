import Link from "next/link";
import { contact } from "@/lib/contact";

const quick = [
  { href: "#top", label: "Top" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#organizations", label: "Organizations" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="section-streak mx-auto mt-0 max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-white/25">
            On This Page
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {quick.map((q) => (
              <li key={q.href}>
                <a
                  href={q.href}
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  {q.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <a
            href={contact.linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 transition hover:text-white"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href={contact.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 transition hover:text-white"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="mt-12 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
          © {new Date().getFullYear()} {contact.name}
        </p>
        <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
      </div>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/15">
        Built with{" "}
        <Link
          href="https://nextjs.org"
          className="text-white/25 underline-offset-2 hover:underline hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </Link>{" "}
        &amp;{" "}
        <Link
          href="https://tailwindcss.com"
          className="text-white/25 underline-offset-2 hover:underline hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </Link>
      </p>
    </footer>
  );
}
