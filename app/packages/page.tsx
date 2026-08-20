import { Metadata } from 'next';
import { PricingSection } from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: 'Packages | Nexora Technologies',
  description: 'Explore our software and web development packages. Discover the premium digital services we offer at Nexora Technologies.',
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen pt-20 flex flex-col">
      <PricingSection />
    </main>
  );
}
