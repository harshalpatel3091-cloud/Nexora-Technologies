"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LogoFull, LogoShort } from "@/components/layout/LogoSVG";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Packages", href: "/packages" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/70 backdrop-blur-md border-b border-border py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Desktop Logo */}
        <Link href="/" className="hidden sm:flex items-center group">
          <LogoFull className="h-[52px] md:h-[56px] group-hover:opacity-90 transition-opacity" />
        </Link>

        {/* Mobile Logo */}
        <Link href="/" className="flex sm:hidden items-center group">
          <LogoShort className="h-[36px] w-auto group-hover:opacity-90 transition-opacity" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-cyan ${pathname === link.href ? "text-brand-cyan" : "text-muted-foreground"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className={buttonVariants({ className: "bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 transition-opacity rounded-full px-6" })}>
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col pt-20 px-6 lg:hidden"
          >
            <button
              className="absolute top-6 right-6 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-medium ${pathname === link.href
                      ? "text-brand-cyan"
                      : "text-muted-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navLinks.length }}
                className="mt-4 flex flex-col items-center gap-6 w-full"
              >
                <ThemeToggle />
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={buttonVariants({ size: "lg", className: "bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 rounded-full w-full" })}
                >
                  Get Free Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
