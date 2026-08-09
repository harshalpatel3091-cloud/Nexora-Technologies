"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/hero-video/1-opening.png",
  "/hero-video/2-idea.png",
  "/hero-video/3-design.png",
  "/hero-video/4-development.png",
  "/hero-video/5-testing.png",
  "/hero-video/6-deployment.png",
  "/hero-video/7-cloud.png",
  "/hero-video/8-live.png",
  "/hero-video/9-ending.png",
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
          animate={{
            opacity: currentImage === index ? 1 : 0,
            scale: currentImage === index ? 1 : 1.05
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={src}
            alt={`Cinematic Frame ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30 -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-left"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center rounded-full border border-border/50 bg-background/50 px-3 py-1 text-sm text-brand-cyan mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan mr-2 animate-pulse" />
              From Idea to Live Website
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 tracking-tight text-foreground text-balance">
              Build Powerful <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                Digital Solutions
              </span>
              <br className="hidden lg:block" /> That Grow Your Business
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              We create high-performance websites, AI-powered applications, eCommerce stores, automation systems, and scalable digital products for startups and businesses.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-start gap-4"
            >
              <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 rounded-full w-full sm:w-auto h-12 px-8 text-base shadow-[0_0_20px_rgba(227,24,55,0.3)] hover:shadow-[0_0_30px_rgba(227,24,55,0.5)] transition-all font-semibold" })}>
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link href="/portfolio" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full w-full sm:w-auto h-12 px-8 text-base border-border/50 bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground text-foreground font-semibold" })}>
                View Our Work
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">End-to-End</div>
                <div className="text-sm text-muted-foreground">Development</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">99%</div>
                <div className="text-sm text-muted-foreground">Code Quality</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
