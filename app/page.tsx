import { About } from "@/components/About";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Organizations } from "@/components/Organizations";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navigation />
      <main className="relative z-10 font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <About />
        <Education />
        <Organizations />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <SiteFooter />
      </main>
    </>
  );
}
