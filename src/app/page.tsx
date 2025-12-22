import ClientsSection from "@/components/ClientsSection";
import CompanyLogosSection from "@/components/CompanyLogosSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyLogosSection />
      <ServicesSection />
      <ExpertiseSection />
      {/* <ProductsShowcase /> */}
      {/* <ProjectsSection /> */}
      {/* <ClientsSection /> */}
      {/* <CurvedLoop
        marqueeText="We Give Unparalleled Flexibility ✦  We Give Unparalleled Flexibility ✦  We Give Unparalleled Flexibility"
        speed={1}
        curveAmount={100}
        direction="right"
        interactive={true}
      /> */}
    </div>
  );
}
