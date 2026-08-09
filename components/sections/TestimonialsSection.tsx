"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewportConfig } from "@/lib/animations";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { testimonials } from "@/constants/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] -z-10 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Loved By <span className="text-brand-cyan">Founders & CEOs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div 
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="max-w-5xl mx-auto px-8 md:px-12 relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="bg-card border-border h-full hover:border-brand-purple/50 transition-colors duration-300">
                      <CardContent className="p-8 flex flex-col h-full relative">
                        <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                        
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                          ))}
                        </div>
                        
                        <p className="text-muted-foreground italic mb-8 flex-1 leading-relaxed relative z-10">
                          &quot;{testimonial.review}&quot;
                        </p>
                        
                        <div className="flex items-center gap-4 mt-auto">
                          <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-lg`}>
                            {testimonial.initials}
                          </div>
                          <div>
                            <h4 className="text-foreground font-bold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-card border-border hover:bg-accent hover:text-accent-foreground hidden sm:flex" />
            <CarouselNext className="bg-card border-border hover:bg-accent hover:text-accent-foreground hidden sm:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
