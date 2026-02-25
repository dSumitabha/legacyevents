import HeroSection from "@/components/sections/HeroSection"
import ServiceSection from "@/components/sections/ServicesSection"
import BrandPhilosophy from "@/components/sections/BrandPhilosophy";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import HighlightReelSection from "@/components/sections/HighlightReelSection";
import ProcessSection from "@/components/sections/ProcessSection";
import InstagramFeedSection from "@/components/sections/InstagramFeedSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <ServiceSection />
        <BrandPhilosophy />
        <PortfolioSection />
        <TestimonialSection />
        <HighlightReelSection />
        <ProcessSection />
        <InstagramFeedSection />
    </>
  );
}
