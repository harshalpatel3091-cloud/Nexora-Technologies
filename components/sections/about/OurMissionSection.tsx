"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Zap } from "lucide-react";

export function OurMissionSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
                Our Mission & Vision
              </h2>
              <div className="h-1 w-20 bg-brand-blue rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Nexora Technologies, our mission is to empower businesses with cutting-edge technology. We believe in creating digital solutions that are not only visually stunning but also highly functional, scalable, and secure.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Purpose-Driven Development</h3>
                  <p className="text-muted-foreground">Every line of code we write is aimed at solving real-world business challenges and driving growth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Continuous Innovation</h3>
                  <p className="text-muted-foreground">We stay ahead of the curve, adopting the latest technologies like AI and Next.js to deliver unparalleled value.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(227,24,55,0.1)] border border-border/50 bg-accent/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-background to-brand-cyan/20">
               <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-32 h-32 text-brand-blue opacity-50" />
               </div>
            </div>
            <div className="absolute inset-0 backdrop-blur-sm border border-white/10 rounded-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
