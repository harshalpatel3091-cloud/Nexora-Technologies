"use client";

import { motion } from "framer-motion";
import { Code2, HeartHandshake, ShieldCheck, Zap } from "lucide-react";

const VALUES = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Excellence in Code",
    description: "We don't just write code; we engineer scalable, robust, and clean architectures that stand the test of time."
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Client-Centric",
    description: "Your success is our success. We partner with you at every step to ensure your vision is realized."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Agile & Fast",
    description: "We move quickly without compromising quality, adapting to changes seamlessly using agile methodologies."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Trust & Security",
    description: "We build secure systems you can rely on, prioritizing data privacy and best-in-class security practices."
  }
];

export function OurValuesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            Our Core Values
          </h2>
          <div className="h-1 w-20 bg-brand-cyan rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">
            The principles that guide our work, our culture, and our commitment to our clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(227,24,55,0.12)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-foreground group-hover:text-brand-blue group-hover:bg-brand-blue/10 transition-colors duration-300 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-brand-blue transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
