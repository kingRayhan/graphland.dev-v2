import AdvancedFeaturesSection from "./_components/AdvancedFeaturesSection";
import CoreModulesSection from "./_components/CoreModulesSection";
import FinalCTASection from "./_components/FinalCTASection";
import HeroSection from "./_components/HeroSection";
import PricingSection from "./_components/PricingSection";
import ReportingSection from "./_components/ReportingSection";
import TechnologyStackSection from "./_components/TechnologyStackSection";

export default function GraphPOSPage() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <HeroSection />
      <CoreModulesSection />
      <AdvancedFeaturesSection />
      <ReportingSection />
      <TechnologyStackSection />
      <PricingSection />
      <FinalCTASection />
    </div>
  );
}
