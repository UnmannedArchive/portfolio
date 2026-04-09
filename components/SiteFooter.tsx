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
    <footer className="mx-auto mt-16 max-w-5xl border-t border-white/[0.08] px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-chrome-mist">
            On This Page
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {quick.map((q) => (
              <li key={q.href}>
                <a
                  href={q.href}
                  className="text-sm text-chrome-steel transition hover:text-white"
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
            className="text-sm text-chrome-steel transition hover:text-white"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href={contact.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-chrome-steel transition hover:text-white"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
      <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-chrome-mist">
        © {new Date().getFullYear()} {contact.name} · Built with{" "}
        <Link
          href="https://nextjs.org"
          className="text-chrome-steel underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </Link>{" "}
        &amp;{" "}
        <Link
          href="https://tailwindcss.com"
          className="text-chrome-steel underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </Link>
      </p>
    </footer>
  );
}
