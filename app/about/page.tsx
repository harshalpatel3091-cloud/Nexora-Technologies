import type { Metadata } from 'next';
import { AboutHeroSection } from '@/components/sections/about/AboutHeroSection';
import { OurMissionSection } from '@/components/sections/about/OurMissionSection';
import { OurStorySection } from '@/components/sections/about/OurStorySection';
import { OurValuesSection } from '@/components/sections/about/OurValuesSection';
import { TeamSection } from '@/components/sections/about/TeamSection';
import { AboutCtaSection } from '@/components/sections/about/AboutCtaSection';

export const metadata: Metadata = {
  title: 'About Us | Nexora Technologies',
  description: 'Learn about Nexora Technologies, our mission, our journey, and the expert team behind our powerful digital solutions.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <OurMissionSection />
      <OurStorySection />
      <OurValuesSection />
      <TeamSection />
      <AboutCtaSection />
    </>
  );
}
