import { Metadata } from 'next';
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: 'Testimonials | Nexora Technologies',
  description: 'Read what founders and CEOs have to say about working with Nexora Technologies. Discover our client experiences.',
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-20 flex flex-col">
      <TestimonialsSection />
    </main>
  );
}
