"use client";

import { motion } from "framer-motion";

export function AboutHeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
      {/* Background Gradient/Image */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[128px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-border/50 bg-background/50 px-3 py-1 text-sm text-brand-cyan mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan mr-2 animate-pulse" />
              Our Story
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 tracking-tight text-foreground text-balance">
              Building the Future of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                Digital Experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are a team of passionate engineers, designers, and strategists dedicated to transforming ideas into scalable, high-performance digital solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
