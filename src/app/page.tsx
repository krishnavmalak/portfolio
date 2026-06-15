import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { KeyAchievements } from "@/components/sections/KeyAchievements";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krishna",
    jobTitle: "Software Engineer",
    url: "https://krishnavmalak.github.io",
    sameAs: [
      "https://www.linkedin.com/in/krishna-malik-84bb31211/",
      "https://github.com/krishnavmalak"
    ],
    description: "Full-Stack Engineer with over 4 years of experience architecting scalable systems and leading mobile-first product innovation.",
  };

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <About />
      <SkillsMatrix />

      <KeyAchievements />
      <ContactFooter />
    </main>
  );
}
