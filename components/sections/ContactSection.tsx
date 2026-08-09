"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { slideInRight, staggerContainer, slideInLeft, viewportConfig } from "@/lib/animations";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendContactEmail } from "@/emailjs/config";



export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      service: formData.get('service') as string,
      budget: formData.get('budget') as string,
      message: formData.get('message') as string,
    };

    try {
      setError(null);
      let firebaseSuccess = false;
      let emailSuccess = false;

      // 1. Save to Firestore
      try {
        await addDoc(collection(db, "contacts"), {
          ...data,
          createdAt: serverTimestamp()
        });
        firebaseSuccess = true;
      } catch (fbError) {
        console.error("Firebase submission failed:", fbError);
      }

      // 2. Send email via EmailJS
      try {
        await sendContactEmail(data as Record<string, unknown>);
        emailSuccess = true;
      } catch (apiError) {
        console.error("Email API failed:", apiError);
      }

      if (!firebaseSuccess && !emailSuccess) {
        throw new Error("We encountered an issue submitting your form. Please try again or contact us directly.");
      }

      setIsSuccess(true);
      form.reset();
      
      // Auto-hide success message after 10 seconds
      setTimeout(() => setIsSuccess(false), 10000);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-card/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <motion.h2 variants={slideInLeft} className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Let&apos;s Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Amazing Together</span>
            </motion.h2>
            <motion.p variants={slideInLeft} className="text-muted-foreground text-lg mb-12 max-w-md leading-relaxed">
              Ready to take your digital presence to the next level? Get in touch with us today for a free consultation and quote.
            </motion.p>

            <div className="space-y-8">
              <motion.div variants={slideInLeft} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center text-brand-cyan group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Our Location</h4>
                  <p className="text-muted-foreground">123 Innovation Drive, Tech City, TC 90210</p>
                </div>
              </motion.div>

              <motion.div variants={slideInLeft} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center text-brand-cyan group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Phone Number</h4>
                  <p className="text-muted-foreground">+91 9175333266</p>
                </div>
              </motion.div>

              <motion.div variants={slideInLeft} className="flex items-start gap-6 group cursor-pointer" onClick={() => window.open('https://wa.me/9175333266', '_blank')}>
                <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground group-hover:text-[#25D366] transition-colors">+91 9175333266</p>
                </div>
              </motion.div>

              <motion.div variants={slideInLeft} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center text-brand-cyan group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Email Address</h4>
                  <p className="text-muted-foreground">hello@nexoratechnologies.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            style={{ perspective: 1000 }}
          >
            <div className="bg-card/50 backdrop-blur-md border border-border p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-bl-full -z-10" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required placeholder="John Doe" className="bg-background/50 border-border focus-visible:ring-brand-cyan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required pattern="^[0-9\+\-\s\(\)]*$" title="Please enter a valid phone number (numbers and symbols only)" placeholder="+91 9175333266" className="bg-background/50 border-border focus-visible:ring-brand-cyan" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-background/50 border-border focus-visible:ring-brand-cyan" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Interested Service</Label>
                    <select id="service" name="service" className="flex h-9 w-full rounded-md border border-border bg-background/50 px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                      <option value="web" className="bg-card">Web Development</option>
                      <option value="ecommerce" className="bg-card">E-commerce</option>
                      <option value="ai" className="bg-card">AI Solutions</option>
                      <option value="app" className="bg-card">Mobile App</option>
                      <option value="other" className="bg-card">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <select id="budget" name="budget" className="flex h-9 w-full rounded-md border border-border bg-background/50 px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                      <option value="small" className="bg-card">&lt; $5,000</option>
                      <option value="medium" className="bg-card">$5,000 - $15,000</option>
                      <option value="large" className="bg-card">$15,000 - $30,000</option>
                      <option value="enterprise" className="bg-card">&gt; $30,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message Details</Label>
                  <Textarea id="message" name="message" required placeholder="Tell us about your project requirements..." rows={4} className="bg-background/50 border-border focus-visible:ring-brand-cyan resize-none" />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
                    {error}
                  </div>
                )}

                {isSuccess && (
                  <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500 text-sm flex flex-col gap-2">
                    <p>Message sent successfully! We will get back to you shortly.</p>
                    <a 
                      href="https://wa.me/9175333266" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#25D366] hover:underline font-medium"
                    >
                      Or chat with us on WhatsApp now <Send className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full h-12 bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 rounded-full font-bold text-white transition-all shadow-[0_0_20px_rgba(227,24,55,0.3)] hover:shadow-[0_0_30px_rgba(227,24,55,0.5)]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
