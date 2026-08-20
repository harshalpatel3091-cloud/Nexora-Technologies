"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideInLeft, slideInRight, fadeUp, viewportConfig } from "@/lib/animations";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Business", "E-commerce", "AI", "Dashboard", "Automation"];

const projects = [
  {
    id: 1,
    title: "NexShop E-commerce",
    category: "E-commerce",
    description: "A high-performance modern e-commerce platform with real-time inventory and AI recommendations.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "AutoFlow CRM",
    category: "Dashboard",
    description: "A comprehensive customer relationship management dashboard with automated workflows.",
    tech: ["React", "Firebase", "Node.js"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Insight AI Analytics",
    category: "AI",
    description: "An AI-powered analytics tool that predicts market trends and customer behavior.",
    tech: ["Python", "TensorFlow", "React"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Corporate Hub",
    category: "Business",
    description: "A premium corporate website for a Fortune 500 company featuring WebGL animations.",
    tech: ["Three.js", "Next.js", "GSAP"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "BotSync Automation",
    category: "Automation",
    description: "Cross-platform automation system integrating Slack, Discord, and internal tools.",
    tech: ["Node.js", "Docker", "AWS"],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    id: 6,
    title: "Fashion Boutique",
    category: "E-commerce",
    description: "A visually stunning boutique store with 3D product previews.",
    tech: ["Next.js", "Shopify", "Tailwind"],
    gradient: "from-rose-500 to-pink-500"
  }
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore some of our recent projects where we turned complex problems into elegant digital solutions.
            </p>
          </motion.div>
          
          {/* Filters */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? "bg-brand-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border"
              >
                {/* Project Image Placeholder */}
                <div className={`w-full h-60 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
                  <span className="text-white/50 font-heading font-bold text-2xl tracking-widest uppercase rotate-[-10deg] scale-150 group-hover:scale-[2] transition-transform duration-700">
                    {project.category}
                  </span>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link href={`/contact?project=${encodeURIComponent(project.title)}`} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform" title="Inquire about this project">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
