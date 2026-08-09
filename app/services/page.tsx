import { Metadata } from 'next';
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: 'Services | Nexora Technologies',
  description: 'Discover the premium digital services we offer at Nexora Technologies, from web development to AI solutions.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20 flex flex-col">
      {/* 
        Utilizing the ServicesSection to showcase all offerings in a clean, animated grid. 
      */}
      <ServicesSection />
    </main>
  );
}
