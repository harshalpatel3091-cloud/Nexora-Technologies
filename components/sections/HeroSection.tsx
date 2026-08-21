"use client";

import { motion } from "framer-motion";
import { heroStagger, heroLine, floatDrift, fadeUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const basePath = process.env.NODE_ENV === 'production' ? '/Nexora-Technologies' : '';

const HERO_IMAGES = [
  `${basePath}/hero-video/1-opening.png`,
  `${basePath}/hero-video/2-idea.png`,
  `${basePath}/hero-video/3-design.png`,
  `${basePath}/hero-video/4-development.png`,
  `${basePath}/hero-video/5-testing.png`,
  `${basePath}/hero-video/6-deployment.png`,
  `${basePath}/hero-video/7-cloud.png`,
  `${basePath}/hero-video/8-live.png`,
  `${basePath}/hero-video/9-ending.png`,
];

const PARTICLES = [
  { size: 60, top: "15%", left: "72%", delay: 0,   duration: 6, shape: "rounded-full", opacity: 0.12, color: "bg-brand-blue" },
  { size: 40, top: "60%", left: "80%", delay: 1.5, duration: 4, shape: "rounded-lg",   opacity: 0.08, color: "bg-brand-cyan" },
  { size: 80, top: "30%", left: "88%", delay: 0.8, duration: 7, shape: "rotate-45",    opacity: 0.07, color: "bg-brand-blue" },
  { size: 24, top: "75%", left: "65%", delay: 2.2, duration: 5, shape: "rounded-full", opacity: 0.15, color: "bg-brand-cyan" },
  { size: 50, top: "10%", left: "60%", delay: 0.4, duration: 8, shape: "rounded-2xl",  opacity: 0.06, color: "bg-brand-blue" },
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Cinematic Background Carousel */}
      {HERO_IMAGES.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0 -z-20"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: currentImage === index ? 1 : 0, scale: currentImage === index ? 1 : 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image src={src} alt={`Cinematic Frame ${index + 1}`} fill className="object-cover" priority={index === 0} />
        </motion.div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30 -z-10" />

      {/* Parallax concentric rings */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-brand-blue/10"
            style={{ width: `${i * 280}px`, height: `${i * 280}px`, top: "50%", left: "70%", transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 + i * 0.3, delay: i * 0.2, ease: "easeOut" }}
          />
        ))}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px]" />
      </div>

      {/* Floating geometric particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className={`absolute ${p.shape} ${p.color}`}
            style={{ width: p.size, height: p.size, top: p.top, left: p.left, opacity: p.opacity }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: p.opacity, scale: 1, y: [0, -18, 0], rotate: [0, 8, 0] }}
            transition={{ opacity: { duration: 1.2, delay: p.delay }, scale: { duration: 1.2, delay: p.delay }, y: { duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }, rotate: { duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay } }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div variants={heroStagger} initial="hidden" animate="show" className="text-left">

            {/* Badge */}
            <motion.div variants={heroLine} className="inline-flex items-center rounded-full border border-border/50 bg-background/50 px-3 py-1 text-sm text-brand-cyan mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan mr-2 animate-pulse" />
              From Idea to Live Website
            </motion.div>

            {/* 3-line staggered headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 tracking-tight">
              <motion.span variants={heroLine} className="block text-foreground">Build Powerful</motion.span>
              <motion.span variants={heroLine} className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan animate-shimmer">
                Digital Solutions
              </motion.span>
              <motion.span variants={heroLine} className="block text-foreground">That Grow Your Business</motion.span>
            </h1>

            <motion.p variants={heroLine} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              We create high-performance websites, AI-powered applications, eCommerce stores, automation systems, and scalable digital products for startups and businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroLine} className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 rounded-full w-full sm:w-auto h-12 px-8 text-base shadow-[0_0_20px_rgba(227,24,55,0.3)] hover:shadow-[0_0_40px_rgba(227,24,55,0.6)] transition-all duration-300 font-semibold" })}>
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/portfolio" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full w-full sm:w-auto h-12 px-8 text-base border-border/50 bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground text-foreground font-semibold transition-all duration-300" })}>
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/50">
              {[
                { value: "End-to-End", label: "Development" },
                { value: "10+", label: "Technologies" },
                { value: "99%", label: "Code Quality" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

