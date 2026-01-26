import { siteConfig } from "@/data/site";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Mobile & Backend Developer",
    description: siteConfig.description,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
    knowsAbout: [
      "Android Development",
      "Node.js",
      "TypeScript",
      "MVP Development",
      "Startup Development",
      "AI-Assisted Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: "Software Development",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MVP Development",
            description: "Build your minimum viable product fast",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Native Android application development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backend Development",
            description: "Node.js backend and API development",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BlogPostJsonLdProps {
  title: string;
  description: string;
  date: string;
  author: string;
  url: string;
}

export function BlogPostJsonLd({
  title,
  description,
  date,
  author,
  url,
}: BlogPostJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: date,
    author: {
      "@type": "Person",
      name: author,
    },
    url: url,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
