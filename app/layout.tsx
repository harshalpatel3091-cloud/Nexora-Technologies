import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(() => import("@/components/ui/FloatingWhatsApp").then(mod => mod.FloatingWhatsApp));
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nexora Technologies | Build Powerful Digital Solutions",
  description: "We create high-performance websites, AI-powered applications, eCommerce stores, automation systems, and scalable digital products for startups and businesses.",
  keywords: ["web development", "AI solutions", "eCommerce", "software agency", "Next.js", "React", "automation"],
  alternates: {
    canonical: "https://nexoratechnologies.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Nexora Technologies | Build Powerful Digital Solutions",
    description: "We create high-performance websites, AI-powered applications, eCommerce stores, automation systems, and scalable digital products for startups and businesses.",
    url: "https://nexoratechnologies.com",
    siteName: "Nexora Technologies",
    images: [
      {
        url: "https://nexoratechnologies.com/og-image.png", // Assuming an og-image will be placed here
        width: 1200,
        height: 630,
        alt: "Nexora Technologies",
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Technologies | Build Powerful Digital Solutions",
    description: "We create high-performance websites, AI-powered applications, eCommerce stores, automation systems, and scalable digital products for startups and businesses.",
    images: ["https://nexoratechnologies.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans antialiased selection:bg-brand-blue selection:text-white relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
