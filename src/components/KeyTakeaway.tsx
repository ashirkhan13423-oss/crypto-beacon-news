import React from "react";
import { Lightbulb } from "lucide-react";

export function KeyTakeaway({ text }: { text?: string }) {
  // We leave it empty if there's no text, to fulfill the prompt's request for empty states
  if (!text) return null;

  return (
    <div className="my-lg p-lg rounded-xl border border-secondary/30 bg-secondary/10 shadow-sm" aria-label="Key Takeaway">
      <div className="flex items-start gap-sm">
        <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-[2px]" />
        <p className="font-headline-sm text-headline-sm text-on-surface leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
