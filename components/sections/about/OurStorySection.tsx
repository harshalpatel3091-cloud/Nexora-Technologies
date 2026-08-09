"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const TIMELINE = [
  {
    year: "Jan 2026",
    title: "The Inception",
    description: "Nexora Technologies was founded with a vision to build powerful digital products for modern businesses."
  },
  {
    year: "Mar 2026",
    title: "Building the Core Team",
    description: "Brought together a talented group of developers, designers, and strategists."
  },
  {
    year: "Jun 2026",
    title: "First Major Projects",
    description: "Started taking on enterprise-level eCommerce and web applications."
  },
  {
    year: "The Future",
    title: "Continuous Innovation",
    description: "Our goal is to integrate cutting-edge AI and deliver scalable solutions globally."
  }
];

export function OurStorySection() {
  return (
    <section className="py-24 bg-accent/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            Our Journey
          </h2>
          <div className="h-1 w-20 bg-brand-blue rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">
            A timeline of our milestones and how we grew into the agency we are today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-[28px] md:left-1/2 w-10 h-10 rounded-full bg-background border-4 border-brand-blue -translate-x-1/2 flex items-center justify-center z-10 shadow-lg">
                  <Calendar className="w-4 h-4 text-brand-blue" />
                </div>
                <div className="ml-16 md:ml-0 md:w-1/2 flex-1">
                  <div className={`bg-card p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow relative
                                 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="text-brand-blue font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-card border-border/50 transform rotate-45
                                   ${index % 2 === 0 ? 'right-[-8px] border-t border-r' : 'left-[-8px] border-b border-l'}`}></div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
