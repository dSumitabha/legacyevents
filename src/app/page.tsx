import HeroSection from "@/components/sections/HeroSection"
import ServiceSection from "@/components/sections/ServicesSection"
import BrandPhilosophy from "@/components/sections/BrandPhilosophy";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <ServiceSection />
        <BrandPhilosophy />
        <PortfolioSection />
        <TestimonialSection />
    </>
  );
}
