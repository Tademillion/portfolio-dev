"use client";

import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { ParticleBackground } from "@/components/shared/ParticleBackground";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="bg-transparent text-foreground">
      <ParticleBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
