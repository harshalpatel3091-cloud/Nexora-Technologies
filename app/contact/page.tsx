"use client";

import { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Import Firebase and EmailJS configurations
import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendContactEmail } from "@/emailjs/config";

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^[0-9\+\-\s\(\)]*$/, { message: 'Please enter a valid phone number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  budget: z.string().min(1, { message: 'Please select a budget.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: 'web',
      budget: 'medium',
      message: '',
    },
  });

  useEffect(() => {
    const project = searchParams?.get('project');
    if (project) {
      form.setValue('message', `I am interested in inquiring about the "${project}" project.`);
    }
  }, [searchParams, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setError(null);

    try {
      let firebaseSuccess = false;
      let emailSuccess = false;

      // 1. Save to Firestore
      try {
        await addDoc(collection(db, "contacts"), {
          ...values,
          createdAt: serverTimestamp()
        });
        firebaseSuccess = true;
      } catch (fbError) {
        console.error("Firebase submission failed:", fbError);
      }

      // 2. Send email via EmailJS
      try {
        await sendContactEmail(values as Record<string, unknown>);
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
  }

  return (
    <>
      {isSuccess ? (
        <div className="h-full flex flex-col items-center justify-center text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for reaching out. We&apos;ll get back to you as soon as possible.
          </p>
          <a 
            href="https://wa.me/9175333266" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#25D366] hover:underline font-medium mb-8"
          >
            Or chat with us on WhatsApp now <Send className="ml-1 h-3 w-3" />
          </a>
          <Button 
            className="bg-brand-blue hover:bg-brand-blue/90"
            onClick={() => setIsSuccess(false)}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                {...form.register('name')}
                aria-invalid={!!form.formState.errors.name}
                className="bg-background/50 focus:bg-background transition-colors"
              />
              {form.formState.errors.name && (
                <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+91 9175333266" 
                {...form.register('phone')}
                aria-invalid={!!form.formState.errors.phone}
                className="bg-background/50 focus:bg-background transition-colors"
              />
              {form.formState.errors.phone && (
                <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                {...form.register('email')}
                aria-invalid={!!form.formState.errors.email}
                className="bg-background/50 focus:bg-background transition-colors"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Interested Service</Label>
              <select 
                id="service" 
                {...form.register('service')}
                className="flex h-9 w-full rounded-md border border-border bg-background/50 px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              >
                <option value="web" className="bg-card">Web Development</option>
                <option value="ecommerce" className="bg-card">E-commerce</option>
                <option value="ai" className="bg-card">AI Solutions</option>
                <option value="app" className="bg-card">Mobile App</option>
                <option value="other" className="bg-card">Other</option>
              </select>
              {form.formState.errors.service && (
                <p className="text-sm text-destructive">{form.formState.errors.service.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Estimated Budget</Label>
            <select 
              id="budget" 
              {...form.register('budget')}
              className="flex h-9 w-full rounded-md border border-border bg-background/50 px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            >
              <option value="small" className="bg-card">&lt; $5,000</option>
              <option value="medium" className="bg-card">$5,000 - $15,000</option>
              <option value="large" className="bg-card">$15,000 - $30,000</option>
              <option value="enterprise" className="bg-card">&gt; $30,000</option>
            </select>
            {form.formState.errors.budget && (
              <p className="text-sm text-destructive">{form.formState.errors.budget.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message Details</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your project requirements..." 
              className="min-h-[150px] resize-none bg-background/50 focus:bg-background transition-colors"
              {...form.register('message')}
              aria-invalid={!!form.formState.errors.message}
            />
            {form.formState.errors.message && (
              <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
            )}
          </div>
          
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full h-12 bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 rounded-full font-bold text-white transition-all shadow-[0_0_20px_rgba(227,24,55,0.3)] hover:shadow-[0_0_30px_rgba(227,24,55,0.5)] group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      )}
    </>
  );
}

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-[80vh] pt-24 pb-16 bg-background overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-brand-cyan/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Get in <span className="text-brand-blue">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? We&apos;d love to hear from you. 
            Fill out the form below and our team will get back to you shortly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  123 Innovation Drive, Tech City, TC 90210
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <Phone className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground leading-relaxed flex flex-col gap-1">
                  <a href="tel:+919175333266" className="hover:text-brand-blue transition-colors">
                    +91 9175333266
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4 group cursor-pointer" onClick={() => window.open('https://wa.me/9175333266', '_blank')}>
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground group-hover:text-[#25D366] transition-colors">
                  +91 9175333266
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground leading-relaxed flex flex-col gap-1">
                  <a href="mailto:hello@nexoratechnologies.com" className="hover:text-brand-blue transition-colors">
                    hello@nexoratechnologies.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 bg-card p-8 rounded-2xl border border-border shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-cyan" />
            <Suspense fallback={<div className="h-full flex items-center justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-brand-blue" /></div>}>
              <ContactFormContent />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
