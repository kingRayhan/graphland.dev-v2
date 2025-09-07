import ClientsSection from "@/components/ClientsSection";
import CompanyLogosSection from "@/components/CompanyLogosSection";
import ContactSection from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyLogosSection />
      <ServicesSection />
      <ExpertiseSection />
      {/* <ProductsShowcase /> */}
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
