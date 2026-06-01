import NavBar from "@/components/ui-custom/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import SoftwareSection from "@/components/sections/SoftwareSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import MetricsSection from "@/components/sections/MetricsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main className="relative">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <SoftwareSection />
      <ServicesSection />
      <ProjectsSection />
      <MetricsSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
