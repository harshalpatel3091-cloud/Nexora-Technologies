"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const technologies = [
  "HTML", "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Firebase", "Node.js", "Python", "Docker",
  "GitHub", "Cloudflare", "Vercel", "AWS", "OpenAI"
];



export function TechStackSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <h3 className="text-sm font-bold text-brand-purple tracking-widest uppercase mb-2">Technologies We Use</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We build with the modern stack to ensure your applications are fast, secure, and infinitely scalable.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.1, y: -5, boxShadow: "0px 10px 20px rgba(139, 92, 246, 0.2)" }}
              className="px-6 py-3 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:border-brand-purple/50 transition-colors cursor-default"
            >
              <span className="text-foreground font-medium">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
