import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, BreadcrumbItem, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";
import { Author } from "@/components/Author";
import { Helmet } from "react-helmet"; // Assuming react-helmet or similar for head management if needed, but since we use TanStack router head, we'll just handle DOM structure here.

interface ArticleLayoutProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  heroImage?: string;
  heroAlt?: string;
  tag?: string;
  publishedDate?: string;
  readTime?: string;
  children: React.ReactNode;
}

export function ArticleLayout({
  title,
  description,
  breadcrumbs,
  heroImage,
  heroAlt = "",
  tag,
  publishedDate,
  readTime,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={breadcrumbs} />
        
        <article className="mb-xxl">
          <header className="mb-lg">
            {tag && (
              <span className="font-label-caps text-label-caps text-secondary mb-sm block">
                {tag}
              </span>
            )}
            <h1 className="font-display-lg text-display-lg text-primary mb-md">
              {title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              {description}
            </p>
            
            <Author publishedDate={publishedDate} readTime={readTime} />
            
            {heroImage && (
              <div className="my-lg rounded-xl overflow-hidden border border-outline-variant bg-surface-container-low shadow-sm">
                <img
                  src={heroImage}
                  alt={heroAlt}
                  className="w-full h-auto object-cover max-h-[500px]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none text-on-surface marker:text-primary prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary prose-img:rounded-xl prose-img:border prose-img:border-outline-variant">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
