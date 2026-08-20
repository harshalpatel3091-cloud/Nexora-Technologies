"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LogoFull } from "@/components/layout/LogoSVG";
import { motion } from "framer-motion";
import { fadeUp, viewportConfig, staggerContainer } from "@/lib/animations";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/20 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16"
        >

          {/* Company Info */}
          <motion.div variants={fadeUp} className="space-y-6">
            <Link href="/" className="flex items-center">
              <LogoFull className="h-[56px] md:h-[64px]" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              INNOVATE. BUILD. ELEVATE.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-[#1877F2] hover:bg-accent transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </span>
              <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-[#1DA1F2] hover:bg-accent transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </span>
              <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-[#E1306C] hover:bg-accent transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </span>
              <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:bg-accent transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </span>
              <a href="https://wa.me/919175333266" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-[#25D366] hover:bg-accent transition-colors" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Packages', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link === 'Home' ? '' : link.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-brand-cyan transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-6">Our Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'E-commerce Solutions', 'AI & Automation', 'UI/UX Design', 'SEO Optimization'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-muted-foreground hover:text-brand-cyan transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp}>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0" />
                <span>123 Innovation Drive, Tech City, TC 90210</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-brand-cyan shrink-0" />
                <span>+91 9175333266</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-brand-cyan shrink-0" />
                <span>hello@nexoratechnologies.com</span>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left" suppressHydrationWarning>
            &copy; {currentYear} Nexora Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-brand-cyan transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-brand-cyan transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-brand-cyan transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
