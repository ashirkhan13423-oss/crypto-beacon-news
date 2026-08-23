import { Link } from "@tanstack/react-router";
import authorAvatar from "@/assets/ashir.jpg";

interface AuthorProps {
  publishedDate: React.ReactNode;
  readTime: string;
}

export function Author({ publishedDate, readTime }: AuthorProps) {
  return (
    <div className="mt-md mb-lg flex flex-col sm:flex-row items-start sm:items-center gap-md p-md bg-surface-container-low border border-outline-variant rounded-xl max-w-3xl">
      <img
        src={authorAvatar}
        alt="Ashir"
        className="w-14 h-14 rounded-full object-cover border-2 border-primary-container shrink-0"
      />
      <div className="space-y-xs">
        <div className="flex flex-wrap items-center gap-sm font-body-md text-body-md text-on-surface-variant">
          <span>
            By{" "}
            <Link to="/author" className="text-secondary font-medium hover:underline">
              Ashir
            </Link>
          </span>
          <span aria-hidden>·</span>
          {publishedDate}
          <span aria-hidden>·</span>
          <span>{readTime}</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Ashir researches and writes about crypto self-custody and security at CryptoBeacon, helping readers understand how to safely store and manage their digital assets.
        </p>
      </div>
    </div>
  );
}
