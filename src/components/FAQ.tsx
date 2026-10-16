import React from "react";

export type FAQItem =
  | { q: string; a: string; question?: never; answer?: never }
  | { question: string; answer: string; q?: never; a?: never }
  | { q: string; a: string; question: string; answer: string };

export function FAQ({ faqs }: { faqs: (FAQItem | { question: string; answer: string } | { q: string; a: string })[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-lg mt-md mb-xl" itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((rawFaq, i) => {
        const item = rawFaq as any;
        const q = item.q || item.question || "";
        const a = item.a || item.answer || "";
        if (!q) return null;

        // Generate a stable ID from the question text
        const id = q
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
          
        return (
          <div 
            key={i} 
            className="p-lg rounded-xl border border-outline-variant bg-surface-container-low flex flex-col"
            itemScope 
            itemProp="mainEntity" 
            itemType="https://schema.org/Question"
          >
            <h3 
              id={`faq-${id}`}
              className="scroll-mt-28 font-headline-sm text-headline-sm text-primary mb-sm font-semibold"
              itemProp="name"
            >
              {q}
            </h3>
            <div 
              className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-md"
              itemScope 
              itemProp="acceptedAnswer" 
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
