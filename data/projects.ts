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
    slug: "arakne-rental-marketplace",
    title: "Arakne - Rental Marketplace Platform",
    description:
      "Full-stack rental marketplace with Android apps for customers and businesses, plus Node.js backend with AWS S3 and Firebase.",
    longDescription:
      "Arakne is a comprehensive rental marketplace platform connecting renters with businesses. The ecosystem includes a customer-facing Android app for browsing and renting items, a business app for managing listings and orders, and a robust Node.js backend. Features include image storage on AWS S3, real-time notifications via Firebase, and secure payment processing.",
    image: "/images/projects/arakne.png",
    category: "fullstack",
    techStack: ["Android", "Kotlin", "Node.js", "Express", "AWS S3", "Firebase", "Chromium"],
    features: [
      "Customer & Business Android apps",
      "Product listing and search",
      "Booking and rental management",
      "AWS S3 image storage",
      "Firebase push notifications",
      "Secure payment integration",
    ],
    results: [
      "2 production Android apps",
      "Version 1.0.31 in production",
      "Scalable cloud infrastructure",
      "Real-time booking system",
    ],
    featured: true,
  },
  {
    slug: "cylinderbd-gas-delivery",
    title: "Cylinderbd - LPG Gas Delivery Platform",
    description:
      "Complete gas delivery ecosystem with 5 Android apps and Node.js backend serving customers, sellers, resellers, and restaurants.",
    longDescription:
      "Cylinderbd is a comprehensive LPG gas delivery platform I built from scratch. The ecosystem includes separate apps for customers ordering gas, sellers managing inventory, resellers handling distribution, restaurants with bulk orders, and an ops team app for delivery management. The Node.js backend uses clustering for high availability and handles thousands of orders daily.",
    image: "/images/projects/cylinderbd.png",
    category: "fullstack",
    techStack: ["Android", "Java", "Node.js", "Express", "Sequelize", "Heroku", "Firebase"],
    features: [
      "5-app ecosystem (Customer, Seller, Reseller, Restaurant, Ops)",
      "Real-time order tracking",
      "Multi-role inventory management",
      "Clustered Node.js backend for scalability",
      "Push notifications for order updates",
      "Payment integration",
    ],
    results: [
      "5 production Android apps",
      "Thousands of daily orders",
      "Multi-city operations",
      "99.9% backend uptime",
    ],
    featured: true,
  },
  {
    slug: "dheo-ecommerce-automation",
    title: "DHEO - E-commerce AI Automation",
    description:
      "AI-powered automation system for a skincare e-commerce brand with Shopify integration, inventory forecasting, and automated operations.",
    longDescription:
      "DHEO is a skincare e-commerce brand selling in Bangladesh. I built their complete automation system that integrates with Shopify, uses Claude AI for intelligent operations, connects to Supabase for data, and runs 24/7 on AWS EC2. The system handles sales reporting, inventory forecasting, ad spend optimization, and automated daily operations.",
    image: "/images/projects/dheo.png",
    category: "fullstack",
    techStack: ["Node.js", "Anthropic Claude AI", "Shopify API", "Supabase", "AWS EC2", "Bun", "Google APIs"],
    features: [
      "AI-powered operations with Claude",
      "Shopify store integration",
      "Automated daily sales reports",
      "Inventory forecasting system",
      "Ad spend optimization",
      "24/7 automated operations on AWS",
    ],
    results: [
      "Fully automated daily operations",
      "Real-time inventory forecasting",
      "Deployed on AWS EC2",
      "Integrated with Shopify & Google",
    ],
    liveUrl: "https://dheo.com",
    featured: true,
  },
  {
    slug: "dheo-courier",
    title: "DHEO Courier - Delivery Management App",
    description:
      "Android delivery management app for DHEO's logistics team with route optimization and real-time tracking.",
    longDescription:
      "Built for DHEO's delivery operations, this Android app helps riders manage deliveries efficiently. Features include route optimization, real-time order updates, delivery confirmation with photo proof, and integration with the main DHEO system for seamless order flow.",
    image: "/images/projects/dheo-courier.png",
    category: "mobile",
    techStack: ["Android", "Kotlin", "Google Maps API", "Firebase", "REST API"],
    features: [
      "Real-time delivery tracking",
      "Route optimization",
      "Photo proof of delivery",
      "Push notifications",
      "Rider performance analytics",
    ],
    results: [
      "Streamlined delivery operations",
      "Reduced delivery times",
      "Real-time order visibility",
      "Integrated with DHEO backend",
    ],
    featured: true,
  },
  {
    slug: "ragbot-ai-chatbot",
    title: "RagBot - AI-Powered Chatbot",
    description:
      "RAG-based intelligent chatbot using retrieval-augmented generation for context-aware responses.",
    longDescription:
      "RagBot is an AI chatbot built using Retrieval-Augmented Generation (RAG) architecture. It retrieves relevant context from a knowledge base and uses AI to generate accurate, contextual responses. Deployed on Vercel for instant scaling.",
    image: "/images/projects/ragbot.jpg",
    category: "fullstack",
    techStack: ["Node.js", "OpenAI API", "Vector Database", "Vercel", "REST API"],
    features: [
      "RAG architecture for accurate responses",
      "Context-aware conversations",
      "Knowledge base integration",
      "Fast response times",
      "Scalable deployment",
    ],
    results: [
      "Context-aware AI responses",
      "Deployed on Vercel",
      "Sub-second response times",
      "Scalable architecture",
    ],
    featured: false,
  },
  {
    slug: "deshito-mobile-app",
    title: "Deshito - Mobile Application",
    description:
      "Feature-rich Android application with modern UI and seamless user experience.",
    longDescription:
      "Deshito is a native Android application built with modern development practices. The app features a clean, intuitive interface and robust backend integration. Currently at version 1.3.2 with regular updates and improvements based on user feedback.",
    image: "/images/projects/deshito.png",
    category: "mobile",
    techStack: ["Android", "Java/Kotlin", "Firebase", "REST API", "Material Design"],
    features: [
      "Modern Material Design UI",
      "Offline-first architecture",
      "Push notifications",
      "Secure authentication",
      "Regular updates",
    ],
    results: [
      "Version 1.3.2 in production",
      "Active user base",
      "Play Store published",
      "Regular feature updates",
    ],
    featured: false,
  },
  {
    slug: "muslim-checklist-flutter",
    title: "Muslim Checklist - Daily Ibadah Tracker",
    description:
      "Flutter app helping Muslims track their daily prayers, Quran reading, and other religious activities.",
    longDescription:
      "Muslim Checklist is a Flutter application designed to help Muslims maintain consistency in their daily religious practices. Users can track prayers, Quran reading, dhikr, and other acts of worship. The app provides gentle reminders and progress tracking to encourage spiritual growth.",
    image: "/images/projects/muslim-checklist.png",
    category: "mobile",
    techStack: ["Flutter", "Dart", "Firebase", "Local Storage", "Material Design"],
    features: [
      "Daily prayer tracking",
      "Quran reading progress",
      "Customizable reminders",
      "Progress statistics",
      "Clean, minimal UI",
    ],
    results: [
      "Cross-platform (iOS & Android)",
      "Offline functionality",
      "User-friendly interface",
      "Personal project for the community",
    ],
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
