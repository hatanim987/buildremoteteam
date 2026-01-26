import { siteConfig } from "@/data/site";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Remote Software Developer",
    description: siteConfig.description,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    knowsAbout: [
      "Android Development",
      "Node.js",
      "TypeScript",
      "Remote Team Collaboration",
      "Distributed Team Development",
      "Full-Stack Development",
      "Team Augmentation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ProfessionalServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BuildRemoteTeam - Remote Development Services",
    description:
      "Dedicated remote developer available for long-term team integration. Serving companies in Europe, USA, and Saudi Arabia.",
    url: siteConfig.url,
    provider: {
      "@type": "Person",
      name: siteConfig.name,
    },
    areaServed: [
      { "@type": "Place", name: "Europe" },
      { "@type": "Place", name: "United States" },
      { "@type": "Place", name: "Saudi Arabia" },
    ],
    serviceType: [
      "Remote Software Development",
      "Dedicated Developer Services",
      "Team Augmentation",
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Remote",
      availableLanguage: "English",
    },
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
    serviceType: "Remote Software Development",
    areaServed: ["Europe", "United States", "Saudi Arabia"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Remote Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dedicated Developer Retainer",
            description: "Long-term remote developer for ongoing team integration",
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
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Team Augmentation",
            description: "Extend your engineering team with a dedicated remote developer",
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
