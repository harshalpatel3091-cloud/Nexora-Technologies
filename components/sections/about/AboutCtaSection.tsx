"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutCtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 bg-brand-green -z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 -z-10 mix-blend-overlay"></div>
      
      {/* Circle decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-background/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-[2.5rem] text-center shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white text-balance">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl text-brand-gray/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s combine our expertise with your vision to build something extraordinary. Partner with Nexora Technologies today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className={buttonVariants({ 
                  size: "lg", 
                  className: "bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full h-14 px-10 text-lg shadow-[0_0_20px_rgba(227,24,55,0.4)] hover:shadow-[0_0_30px_rgba(227,24,55,0.6)] transition-all font-semibold w-full sm:w-auto" 
                })}
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className={buttonVariants({ 
                  size: "lg", 
                  variant: "outline",
                  className: "rounded-full h-14 px-10 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white transition-all font-semibold w-full sm:w-auto" 
                })}
              >
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
