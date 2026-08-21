"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { glassCardReveal, fastStagger, fadeUp, viewportConfig } from "@/lib/animations";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

import { pricingPlans } from "@/constants/pricing";



export function PricingSection() {
  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Invest in quality digital solutions that deliver a high return on investment. No hidden fees.
          </p>
        </motion.div>

        <motion.div 
          variants={fastStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={glassCardReveal}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? "glass-card-glow"
                  : "glass-card hover:border-brand-blue/30"
              } transition-all duration-300 flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <span className="text-4xl font-bold text-foreground font-heading">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full h-12 rounded-full font-semibold transition-all inline-flex items-center justify-center ${
                  plan.popular 
                    ? "bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 text-white" 
                    : "bg-muted hover:bg-accent text-foreground"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
