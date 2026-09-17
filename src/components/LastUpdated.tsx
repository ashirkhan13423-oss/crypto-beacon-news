import React from "react";
import { Clock } from "lucide-react";

export function LastUpdated({ date }: { date?: string }) {
  if (!date) return null;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex items-center gap-xs font-label-md text-label-md text-on-surface-variant mb-md">
      <Clock size={16} className="text-secondary" />
      <span>Last updated: <time dateTime={date}>{formattedDate}</time></span>
    </div>
  );
}
