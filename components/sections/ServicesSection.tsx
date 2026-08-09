"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Monitor, ShoppingCart, Code2, Bot, Zap, Network, LineChart, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Business Website",
    description: "Professional, fast, and SEO-optimized websites that establish your digital presence and drive conversions.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce Development",
    description: "Scalable online stores with secure payment gateways, inventory management, and seamless user experiences.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Custom Web Applications",
    description: "Complex, data-driven web apps built with modern frameworks to solve your unique business challenges.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Solutions",
    description: "Intelligent chatbots, AI assistants, and machine learning integrations to automate and enhance operations.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automation",
    description: "Streamline workflows by connecting your favorite tools and automating repetitive manual tasks.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "API Integrations",
    description: "Seamlessly connect disparate systems and third-party services to create a unified digital ecosystem.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to improve search rankings, increase organic traffic, and boost visibility.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Website Maintenance",
    description: "Ongoing support, security updates, bug fixes, and performance monitoring to keep your site running smoothly.",
  }
];



export function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Premium Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end digital solutions utilizing the latest technologies to help your business stay ahead of the curve.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeUp}>
              <Card className="bg-card border-border hover:border-brand-blue/50 transition-all duration-300 group h-full hover:shadow-[0_0_30px_-5px_rgba(227,24,55,0.3)]">
                <CardContent className="p-8 flex flex-col h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link href="/services" className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-brand-cyan transition-colors mt-auto">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
