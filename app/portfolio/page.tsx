import { Metadata } from 'next';
import { PortfolioSection } from "@/components/sections/PortfolioSection";


export const metadata: Metadata = {
  title: 'Portfolio | Nexora Technologies',
  description: 'Explore our latest projects, case studies, and success stories at Nexora Technologies.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-20 flex flex-col">
      {/* 
        We reuse the beautiful PortfolioSection from the homepage to maintain design consistency, 
        but we give it a dedicated space here. 
      */}
      <PortfolioSection />


    </main>
  );
}
