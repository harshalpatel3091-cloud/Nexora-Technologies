import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HardHat, ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-32 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mb-8">
        <HardHat className="w-12 h-12" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground capitalize mb-4">
        testimonials
      </h1>
      <h2 className="text-2xl text-brand-cyan font-semibold mb-6">Under Construction</h2>
      <p className="mt-4 text-muted-foreground max-w-lg mb-8 text-lg">
        We are currently building this page to bring you an amazing experience. Please check back soon!
      </p>
      <Link href="/">
        <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>
      </Link>
    </div>
  );
}
