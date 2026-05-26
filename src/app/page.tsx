import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { KeyAchievements } from "@/components/sections/KeyAchievements";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      
      <Header />
      <Hero />
      <About />
      <SkillsMatrix />

      <KeyAchievements />
      <ContactFooter />
    </main>
  );
}
