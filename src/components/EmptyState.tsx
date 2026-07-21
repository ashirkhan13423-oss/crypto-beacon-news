import { FileText } from "lucide-react";
type Props = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = "No articles yet",
  description = "Content will appear here once it's published.",
}: Props) {
  return (
    <div className="border border-dashed border-outline-variant rounded-xl p-xxl flex flex-col items-center justify-center text-center bg-surface-container-lowest">
      <FileText className="text-[40px] text-on-surface-variant mb-md" style={{ fontVariationSettings: "'FILL' 0" }} />
      <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">{title}</h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md">{description}</p>
    </div>
  );
}
