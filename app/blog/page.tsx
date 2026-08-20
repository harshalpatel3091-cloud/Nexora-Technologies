import { Metadata } from 'next';
import { BlogSection } from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  title: 'Blog | Nexora Technologies',
  description: 'Read the latest insights on AI, software development, web development, automation, and digital transformation from the experts at Nexora Technologies.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20 flex flex-col">
      <BlogSection />
    </main>
  );
}
