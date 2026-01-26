export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: "mobile" | "backend" | "fullstack";
  techStack: string[];
  features: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "finpay-mobile-banking",
    title: "FinPay - Mobile Banking App",
    description:
      "A fintech startup's mobile banking solution with secure transactions and real-time notifications.",
    longDescription:
      "FinPay approached me to build their flagship Android app for a mobile-first banking experience. The app needed to handle sensitive financial data while providing a seamless user experience. I delivered a production-ready app in 8 weeks that passed security audits and launched successfully on the Play Store.",
    image: "/images/projects/finpay.jpg",
    category: "mobile",
    techStack: ["Android", "Kotlin", "Node.js", "PostgreSQL", "Firebase"],
    features: [
      "Biometric authentication",
      "Real-time transaction notifications",
      "P2P money transfers",
      "Spending analytics dashboard",
      "Multi-currency support",
    ],
    results: [
      "Launched in 8 weeks",
      "4.7★ rating on Play Store",
      "10,000+ downloads in first month",
      "Passed security audit on first attempt",
    ],
    featured: true,
  },
  {
    slug: "shopnow-ecommerce",
    title: "ShopNow - E-commerce MVP",
    description:
      "A D2C brand's e-commerce platform with inventory management and payment integration.",
    longDescription:
      "A direct-to-consumer fashion brand needed to launch their online store quickly. I built a complete e-commerce MVP with product catalog, cart, checkout, and admin dashboard. The platform was designed to scale and integrated with their existing inventory system.",
    image: "/images/projects/shopnow.jpg",
    category: "fullstack",
    techStack: ["Next.js", "Node.js", "Stripe", "MongoDB", "Tailwind CSS"],
    features: [
      "Product catalog with filters",
      "Shopping cart & wishlist",
      "Stripe payment integration",
      "Order tracking",
      "Admin inventory dashboard",
    ],
    results: [
      "MVP live in 6 weeks",
      "$50K revenue in first quarter",
      "2% cart abandonment reduction",
      "Scaled to 5,000 products",
    ],
    featured: true,
  },
  {
    slug: "teamflow-saas",
    title: "TeamFlow - SaaS Dashboard",
    description:
      "A B2B startup's team collaboration platform with real-time updates and analytics.",
    longDescription:
      "TeamFlow is a project management SaaS for remote teams. I built the core platform including user authentication, team workspaces, real-time collaboration features, and comprehensive analytics. The modular architecture allows for rapid feature additions.",
    image: "/images/projects/teamflow.jpg",
    category: "fullstack",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
    features: [
      "Real-time collaboration",
      "Team workspaces",
      "Task management with Kanban",
      "Time tracking",
      "Performance analytics",
    ],
    results: [
      "500+ active teams",
      "99.9% uptime",
      "Sub-100ms real-time updates",
      "Featured in ProductHunt",
    ],
    featured: true,
  },
  {
    slug: "quickserve-delivery",
    title: "QuickServe - On-Demand Delivery",
    description:
      "An Uber-like delivery app with real-time tracking and driver management.",
    longDescription:
      "QuickServe needed a complete on-demand delivery solution with customer app, driver app, and admin panel. The system handles real-time location tracking, route optimization, and automated dispatch. Built to handle thousands of concurrent deliveries.",
    image: "/images/projects/quickserve.jpg",
    category: "mobile",
    techStack: ["Android", "Node.js", "Google Maps API", "Firebase", "MongoDB"],
    features: [
      "Real-time GPS tracking",
      "Automated driver dispatch",
      "In-app chat support",
      "Rating & review system",
      "Dynamic pricing engine",
    ],
    results: [
      "Processing 1,000+ daily orders",
      "30% delivery time reduction",
      "4.8★ average driver rating",
      "Expanded to 3 cities",
    ],
    featured: false,
  },
  {
    slug: "writeai-productivity",
    title: "WriteAI - AI Writing Assistant",
    description:
      "An AI-powered productivity tool helping content creators write faster.",
    longDescription:
      "WriteAI is an AI-powered writing assistant that helps content creators produce better content faster. The tool integrates with popular platforms and uses advanced AI models to suggest improvements, generate drafts, and maintain brand voice consistency.",
    image: "/images/projects/writeai.jpg",
    category: "fullstack",
    techStack: ["Next.js", "OpenAI API", "Node.js", "PostgreSQL", "Vercel"],
    features: [
      "AI content generation",
      "Brand voice customization",
      "Multi-platform publishing",
      "Content analytics",
      "Team collaboration",
    ],
    results: [
      "3x faster content creation",
      "1,000+ active users",
      "95% user satisfaction rate",
      "Integrated with 5 platforms",
    ],
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
