"use client";

import { motion } from "framer-motion";
import { fadeUp, fastStagger, techBadge, viewportConfig } from "@/lib/animations";
import {
  SiHtml5, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFirebase, SiNodedotjs, SiPython, SiDocker, SiGithub,
  SiCloudflare, SiVercel, SiSupabase
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";

const technologies = [
  { name: "HTML",         icon: SiHtml5,       color: "#E34F26" },
  { name: "React",        icon: SiReact,        color: "#61DAFB" },
  { name: "Next.js",      icon: SiNextdotjs,    color: "currentColor" },
  { name: "TypeScript",   icon: SiTypescript,   color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss,  color: "#06B6D4" },
  { name: "Firebase",     icon: SiFirebase,     color: "#FFCA28" },
  { name: "Supabase",     icon: SiSupabase,     color: "#3ECF8E" },
  { name: "Node.js",      icon: SiNodedotjs,    color: "#339933" },
  { name: "Python",       icon: SiPython,       color: "#3776AB" },
  { name: "Docker",       icon: SiDocker,       color: "#2496ED" },
  { name: "GitHub",       icon: SiGithub,       color: "currentColor" },
  { name: "Cloudflare",   icon: SiCloudflare,   color: "#F38020" },
  { name: "Vercel",       icon: SiVercel,       color: "currentColor" },
  { name: "AWS",          icon: FaAws,          color: "#FF9900" },
  { name: "OpenAI",       icon: TbBrandOpenai,       color: "currentColor" },
];

export function TechStackSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <h3 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-2">Technologies We Use</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We build with the modern stack to ensure your applications are fast, secure, and infinitely scalable.
          </p>
        </motion.div>

        <motion.div
          variants={fastStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={techBadge}
                whileHover={{ scale: 1.08, y: -4, boxShadow: `0px 8px 24px ${tech.color}33` }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-full hover:border-white/20 transition-all duration-300 cursor-default group"
              >
                <Icon
                  size={18}
                  style={{ color: tech.color }}
                  className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                />
                <span className="text-foreground font-medium text-sm whitespace-nowrap">{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}



