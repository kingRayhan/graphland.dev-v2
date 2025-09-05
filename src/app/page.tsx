import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <ProductsShowcase />
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
