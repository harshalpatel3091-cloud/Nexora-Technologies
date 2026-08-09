"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan mb-4">404</h1>
      <h2 className="text-3xl font-bold text-foreground mb-6">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has been moved. 
        Let&apos;s get you back on track.
      </p>
      <Link href="/" className={buttonVariants({ size: "lg", className: "bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 rounded-full" })}>
        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
      </Link>
    </div>
  );
}
