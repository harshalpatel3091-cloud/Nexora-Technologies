"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Search, PenTool, LayoutTemplate, Code, CheckSquare, Rocket, HeadphonesIcon } from "lucide-react";

const processes = [
  { icon: <Search className="w-5 h-5" />, title: "Discovery", desc: "Understanding your business goals and project requirements." },
  { icon: <PenTool className="w-5 h-5" />, title: "Planning", desc: "Creating wireframes, sitemaps, and technical architecture." },
  { icon: <LayoutTemplate className="w-5 h-5" />, title: "UI Design", desc: "Crafting beautiful, user-centric interfaces and prototypes." },
  { icon: <Code className="w-5 h-5" />, title: "Development", desc: "Writing clean, scalable code to build your digital product." },
  { icon: <CheckSquare className="w-5 h-5" />, title: "Testing", desc: "Rigorous QA testing across devices and browsers." },
  { icon: <Rocket className="w-5 h-5" />, title: "Deployment", desc: "Launching your project to live servers with zero downtime." },
  { icon: <HeadphonesIcon className="w-5 h-5" />, title: "Support", desc: "Ongoing maintenance, monitoring, and feature updates." },
];



export function ProcessSection() {
  return (
    <section className="py-24 bg-card/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic approach to ensure your project is delivered on time, within budget, and to the highest standards.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-border -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan"
            />
          </div>

          <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-7 gap-6 relative z-10"
          >
            {processes.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex flex-row md:flex-col items-center md:text-center gap-4 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border-2 border-border flex items-center justify-center text-muted-foreground group-hover:border-brand-blue group-hover:text-brand-blue group-hover:shadow-[0_0_24px_rgba(227,24,55,0.4)] group-hover:-translate-y-2 transition-all duration-300 relative z-10 shadow-sm">
                  {step.icon}
                  <div className="absolute -bottom-2 -right-2 md:bottom-auto md:right-auto md:-top-3 md:-right-3 w-6 h-6 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center shadow-[0_0_12px_rgba(227,24,55,0.5)]">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h4 className="text-foreground font-bold mb-1 group-hover:text-brand-blue transition-colors">{step.title}</h4>
                  <p className="text-xs text-muted-foreground hidden md:block">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
