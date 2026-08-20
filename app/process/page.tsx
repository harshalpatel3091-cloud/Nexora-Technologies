import { Metadata } from 'next';
import { ProcessSection } from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: 'Process | Nexora Technologies',
  description: 'Learn about our proven development process at Nexora Technologies, from discovery and planning to deployment and support.',
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-20 flex flex-col">
      <ProcessSection />
    </main>
  );
}
