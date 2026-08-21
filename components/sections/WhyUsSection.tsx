"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft, viewportConfig } from "@/lib/animations";
import { Lightbulb, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { useState, useEffect } from "react";

const brandValues = [
  {
    title: "Innovation",
    description: "We create new possibilities",
    icon: Lightbulb,
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/20"
  },
  {
    title: "Trust",
    description: "Built on integrity and transparency",
    icon: ShieldCheck,
    color: "text-brand-blue",
    bg: "bg-brand-blue/20"
  },
  {
    title: "Growth",
    description: "We help businesses scale higher",
    icon: TrendingUp,
    color: "text-brand-green",
    bg: "bg-brand-green/20"
  },
  {
    title: "Collaboration",
    description: "Stronger together, achieving more",
    icon: Users,
    color: "text-brand-purple",
    bg: "bg-brand-purple/20"
  }
];



export function WhyUsSection() {
  const [randomStyles, setRandomStyles] = useState<{opacity: number, height: string}[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRandomStyles(
      Array.from({ length: 100 }).map(() => ({
        opacity: Math.random() * 0.5 + 0.1,
        height: `${Math.random() * 100 + 50}px`
      }))
    );
  }, []);

  return (
    <section className="py-24 bg-card/30 border-y border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-green/10 rounded-full blur-[100px] -z-10 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Why Choose <br />
              <span className="text-brand-cyan">Nexora Technologies?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don&apos;t just write code; we build digital experiences that drive growth. Our team of experts combines technical excellence with creative problem-solving to deliver solutions that exceed expectations.
            </p>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {brandValues.map((value, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: "0 0 20px -5px rgba(227,24,55,0.2)" }}
                  className="flex flex-col gap-3 p-4 rounded-2xl glass-card hover:border-brand-blue/30 transition-all duration-300 cursor-default"
                >
                  <div className={`w-12 h-12 rounded-full ${value.bg} flex items-center justify-center ${value.color}`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-border"
            style={{ perspective: 1000 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent z-10" />
            
            {/* Using a highly stylized abstract visual representing architecture/code */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
               <div className="grid grid-cols-6 gap-2 w-[150%] h-[150%] opacity-20 transform -rotate-12 scale-150">
                  {randomStyles.map((style, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.01 }}
                      className={`h-full rounded-md ${
                        i % 7 === 0 ? 'bg-brand-blue' : i % 5 === 0 ? 'bg-brand-cyan' : 'bg-muted'
                      }`}
                      style={{ ...style, transformOrigin: 'bottom' }}
                    />
                  ))}
               </div>
            </div>
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6, type: "spring" }}
                 className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-6 shadow-2xl inline-block max-w-sm"
               >
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-xl">
                     99%
                   </div>
                   <div>
                     <h4 className="text-foreground font-bold">Client Satisfaction</h4>
                     <p className="text-sm text-muted-foreground">Based on 150+ reviews</p>
                   </div>
                 </div>
                 <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: "99%" }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                     className="bg-brand-green h-2 rounded-full" 
                   />
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
