import { HeroSection } from "@/components/sections/HeroSection";
import dynamic from "next/dynamic";

const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection").then(mod => mod.ServicesSection));
const WhyUsSection = dynamic(() => import("@/components/sections/WhyUsSection").then(mod => mod.WhyUsSection));
const TechStackSection = dynamic(() => import("@/components/sections/TechStackSection").then(mod => mod.TechStackSection));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection").then(mod => mod.ProcessSection));
const PortfolioSection = dynamic(() => import("@/components/sections/PortfolioSection").then(mod => mod.PortfolioSection));
const PricingSection = dynamic(() => import("@/components/sections/PricingSection").then(mod => mod.PricingSection));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(mod => mod.TestimonialsSection));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(mod => mod.ContactSection));

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <TechStackSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
