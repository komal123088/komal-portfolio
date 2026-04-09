import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      {/* Background effects */}
      <ParticleCanvas />
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <HeroSection />
        <StatsBar />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
