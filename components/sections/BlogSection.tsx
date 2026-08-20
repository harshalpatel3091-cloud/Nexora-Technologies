"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Clock, Tag } from "lucide-react";
import { blogPosts } from "@/constants/blog";
import { Card, CardContent } from "@/components/ui/card";

export function BlogSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-cyan/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-blue/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Insights & <span className="text-brand-blue">Innovations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay ahead of the curve with our latest articles on technology, development, and digital transformation.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={fadeUp}>
              <article className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-2xl group cursor-default">
                <Card className="h-full bg-card/50 border-border overflow-hidden transition-all duration-300 hover:border-brand-blue/50 hover:shadow-[0_10px_40px_-10px_rgba(227,24,55,0.15)] hover:-translate-y-1">
                  {/* Image Placeholder (Gradient) */}
                  <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    {/* Decorative subtle pattern inside gradient */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex items-center justify-between mb-4 text-xs font-medium text-muted-foreground">
                      <span className="flex items-center gap-1.5 bg-muted px-2.5 py-1 rounded-full text-foreground/80">
                        <Tag className="w-3 h-3" /> {post.category}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground font-medium">{post.date}</span>
                      <span className="flex items-center text-sm font-bold text-muted-foreground">
                        Coming Soon 
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
