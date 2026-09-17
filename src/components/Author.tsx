import { Link, useLocation } from "@tanstack/react-router";
import authorAvatar from "@/assets/ashir.webp";
import generatedMetadata from "@/data/generated-metadata.json";

interface AuthorProps {
  publishedDate?: React.ReactNode;
  readTime?: string;
}

export function Author({ publishedDate, readTime }: AuthorProps) {
  const location = useLocation();
  const path = location.pathname;
  
  // Use passed readTime if present (though we'll remove them), 
  // otherwise fallback to the generated one.
  const generatedMeta = (generatedMetadata as Record<string, any>)[path];
  const displayReadTime = readTime || (generatedMeta ? generatedMeta.readTime : null);

  return (
    <div className="mt-md mb-lg flex flex-col sm:flex-row items-start sm:items-center gap-md p-md bg-surface-container-low border border-outline-variant rounded-xl max-w-3xl">
      <img
        src={authorAvatar}
        alt="Ashir Khan"
        className="w-14 h-14 rounded-full object-cover border-2 border-primary-container shrink-0"
      />
      <div className="space-y-xs">
        <div className="flex flex-wrap items-center gap-sm font-body-md text-body-md text-on-surface-variant">
          <span>
            By{" "}
            <Link to="/author" className="text-secondary font-medium hover:underline">
              Ashir Khan
            </Link>
          </span>
          {publishedDate && (
            <>
              <span aria-hidden>·</span>
              {publishedDate}
            </>
          )}
          {displayReadTime && (
            <>
              <span aria-hidden>·</span>
              <span>{displayReadTime}</span>
            </>
          )}
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Ashir Khan writes about cryptocurrency security, self-custody, macro market analysis, and regulatory policy at CryptoBeacon.
        </p>
      </div>
    </div>
  );
}
