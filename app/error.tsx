"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-4xl font-bold font-heading mb-4 text-brand-blue">
        Something went wrong!
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        We encountered an unexpected error while trying to process your request. 
        Please try again.
      </p>
      <Button
        onClick={() => reset()}
        className="bg-brand-cyan hover:opacity-90 text-white rounded-full px-8 h-12 font-bold transition-all"
      >
        Try again
      </Button>
    </div>
  );
}
