import {
  Article,
  BreadcrumbList,
  FAQPage,
  NewsArticle,
  Organization,
  Person,
  WebSite,
  WithContext,
  SearchAction
} from "schema-dts";
import { AUTHOR, ORGANIZATION } from "../constants";

export function buildPersonSchema(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    url: AUTHOR.url,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.description,
    knowsAbout: AUTHOR.knowsAbout,
    sameAs: AUTHOR.sameAs,
  };
}

export function buildOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    logo: {
      "@type": "ImageObject",
      url: ORGANIZATION.logo,
    },
    description: ORGANIZATION.description,
    sameAs: ORGANIZATION.sameAs,
    publishingPrinciples: ORGANIZATION.publishingPrinciples,
    correctionsPolicy: ORGANIZATION.correctionsPolicy,
  };
}

export function buildWebSiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.cryptobeacon.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    } as SearchAction,
  };
}

export function buildBreadcrumbSchema(items: { name: string; item: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function buildFAQSchema(faqs: { q: string; a: string }[]): WithContext<FAQPage> | null {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

interface ArticleSchemaParams {
  headline: string;
  description: string;
  imageUrl: string;
  imageWidth?: number;
  imageHeight?: number;
  datePublished: string;
  dateModified: string;
  url: string;
  section?: string;
  isNews?: boolean;
}

export function buildArticleSchema(params: ArticleSchemaParams): WithContext<Article | NewsArticle> {
  const type = params.isNews ? "NewsArticle" : "Article";

  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: params.headline,
    description: params.description,
    image: {
      "@type": "ImageObject",
      url: params.imageUrl,
      ...(params.imageWidth && { width: params.imageWidth.toString() }),
      ...(params.imageHeight && { height: params.imageHeight.toString() }),
    },
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: AUTHOR.url,
      sameAs: AUTHOR.sameAs,
    },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      logo: {
        "@type": "ImageObject",
        url: ORGANIZATION.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
    ...(params.section && { articleSection: params.section }),
    inLanguage: "en-US",
  };
}
