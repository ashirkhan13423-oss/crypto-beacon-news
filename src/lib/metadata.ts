import generatedMetadata from "@/data/generated-metadata.json";

interface MetadataArgs {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  author?: string;
  path?: string; // used for looking up fallback description and generating OG image
}

export function buildMetadata(args: MetadataArgs) {
  let { title, description, url, type = 'website', publishedTime, modifiedTime, section, author = 'Ashir Khan', path } = args;

  // Fall back gracefully to generated description if description is empty or missing
  if (!description && path) {
    const generatedMeta = (generatedMetadata as Record<string, any>)[path];
    if (generatedMeta && generatedMeta.fallbackDesc) {
      description = generatedMeta.fallbackDesc;
    }
  }

  // Build the dynamic OG Image URL for articles, default for non-articles
  const ogImage = type === 'article' 
    ? `https://www.cryptobeacon.site/api/og?title=${encodeURIComponent(title)}${section ? `&category=${encodeURIComponent(section)}` : ''}`
    : "https://www.cryptobeacon.site/og-image.png";

  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:site_name", content: "CryptoBeacon" },
    { property: "og:image", content: ogImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  if (type === 'article') {
    if (publishedTime) {
      meta.push({ property: "article:published_time", content: publishedTime });
    }
    if (modifiedTime) {
      meta.push({ property: "article:modified_time", content: modifiedTime });
    }
    if (section) {
      meta.push({ property: "article:section", content: section });
    }
    if (author) {
      meta.push({ property: "article:author", content: author });
    }
  }

  const links = [
    { rel: "canonical", href: url }
  ];

  return { meta, links };
}
