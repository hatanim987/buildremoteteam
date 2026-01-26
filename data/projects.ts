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
    slug: "cylinderbd-gas-delivery",
    title: "Cylinderbd - LPG Gas Delivery Platform",
    description:
      "Complete gas delivery ecosystem with 5 Android apps and Node.js backend serving customers, sellers, resellers, and restaurants across multiple cities.",
    longDescription:
      "Cylinderbd is a comprehensive LPG gas delivery platform I built from the ground up. The ecosystem includes five distinct Android applications: a customer app for ordering gas cylinders, a seller app for managing inventory and fulfilling orders, a reseller app for distribution management, a restaurant app for bulk orders with special pricing, and an ops team app for delivery coordination and logistics. The Node.js backend leverages clustering for high availability and processes thousands of orders daily. The system features real-time order tracking, automated inventory alerts, multi-tier pricing, and seamless payment integration. Firebase powers the push notification system ensuring instant updates across all stakeholders.",
    image: "/images/projects/cylinderbd.png",
    category: "fullstack",
    techStack: [
      "Android",
      "Java",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Heroku",
      "Firebase",
    ],
    features: [
      "5-app ecosystem serving different user roles",
      "Real-time order tracking with live status updates",
      "Multi-role inventory management system",
      "Clustered Node.js backend for high availability",
      "Firebase push notifications for instant alerts",
      "Multi-tier pricing for different customer types",
      "Automated low-stock alerts for sellers",
      "Delivery route optimization",
    ],
    results: [
      "5 production Android apps",
      "Thousands of daily orders processed",
      "Multi-city operations across Bangladesh",
      "99.9% backend uptime",
      "Reduced delivery time by 40%",
    ],
    featured: true,
  },
  {
    slug: "gaspro-business-management",
    title: "Gaspro - LPG Business Management System",
    description:
      "Enterprise-grade LPG business management platform with multi-tenant architecture, photocard generation, and comprehensive seller management tools.",
    longDescription:
      "Gaspro is an enterprise-level LPG business management system designed to streamline operations for gas distributors and retailers. The platform features a robust Node.js backend with PostgreSQL database, supporting multi-tenant architecture for different business entities. Key innovations include an automated photocard generation system using Sharp and Canvas for image manipulation, integrated AWS S3 for cloud storage, and Firebase for real-time notifications. The system handles seller management, inventory tracking, order processing, and customer relationship management. Built with scalability in mind, Gaspro runs on Heroku with optimized database queries and efficient cron jobs for automated tasks.",
    image: "/images/projects/gaspro.png",
    category: "fullstack",
    techStack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "AWS S3",
      "Firebase",
      "Sharp",
      "Heroku",
    ],
    features: [
      "Multi-tenant business architecture",
      "Automated photocard generation system",
      "AWS S3 cloud storage integration",
      "Real-time Firebase notifications",
      "Comprehensive seller management",
      "Inventory tracking and alerts",
      "Order processing automation",
      "Google Trends API integration for insights",
    ],
    results: [
      "Production-ready enterprise system",
      "Multi-business support deployed",
      "Automated image processing pipeline",
      "99.9% uptime on Heroku",
    ],
    featured: true,
  },
  {
    slug: "dheo-ecommerce-automation",
    title: "DHEO - E-commerce AI Automation",
    description:
      "AI-powered automation system for a skincare e-commerce brand with Shopify integration, intelligent inventory forecasting, and fully automated daily operations.",
    longDescription:
      "DHEO is a skincare e-commerce brand operating in Bangladesh, and I built their complete business automation system from scratch. The system integrates deeply with Shopify's Admin API for order and inventory management, uses Anthropic's Claude AI for intelligent decision-making and report generation, and connects to Supabase for real-time data storage. Running 24/7 on AWS EC2, the automation handles daily sales reporting with insights, inventory forecasting based on historical trends, ad spend optimization recommendations, and automated operational tasks. The system processes sales data, generates actionable reports, and syncs inventory across multiple sales channels automatically.",
    image: "/images/projects/dheo.png",
    category: "fullstack",
    techStack: [
      "Node.js",
      "Bun",
      "Anthropic Claude AI",
      "Shopify API",
      "Supabase",
      "AWS EC2",
      "Google APIs",
    ],
    features: [
      "AI-powered operations using Claude",
      "Deep Shopify store integration",
      "Automated daily sales reports with insights",
      "Predictive inventory forecasting",
      "Ad spend optimization recommendations",
      "24/7 automated operations on AWS",
      "Multi-channel inventory sync",
      "Automated reorder point alerts",
    ],
    results: [
      "Fully automated daily operations",
      "80% reduction in manual reporting",
      "Real-time inventory accuracy",
      "Deployed and running on AWS EC2",
    ],
    liveUrl: "https://dheo.com.bd",
    featured: true,
  },
  {
    slug: "stocky-inventory-management",
    title: "Stocky - Multi-Location Inventory Management",
    description:
      "Real-time inventory management system for tracking stock across 6 retail locations with Shopify sync, bill collection, and transfer management.",
    longDescription:
      "Stocky is a comprehensive inventory management solution I built for DHEO's retail operations spanning 6 physical locations. The system provides real-time stock visibility across all outlets, manages inter-location transfers with full audit trails, and syncs product data with Shopify (42 SKUs). Built with a modern JavaScript frontend and Bun-powered API server, it uses Supabase for the database backend. Features include draft cart system for staging transfers, bill collection and sales reconciliation, location-based product filtering, and detailed transfer history tracking. The system ensures inventory accuracy and prevents overselling across channels.",
    image: "/images/projects/dheo.png",
    category: "fullstack",
    techStack: [
      "JavaScript",
      "Bun",
      "Supabase",
      "Shopify API",
      "AWS S3",
      "REST API",
    ],
    features: [
      "Multi-location real-time stock tracking",
      "Inter-location transfer management",
      "Shopify product sync (42 SKUs)",
      "Bill collection and reconciliation",
      "Draft cart system for transfers",
      "Complete transfer history audit trail",
      "Location-based inventory filtering",
      "Stock validation to prevent errors",
    ],
    results: [
      "6 retail locations managed",
      "Real-time inventory accuracy",
      "Reduced stock discrepancies by 90%",
      "Streamlined transfer operations",
    ],
    featured: true,
  },
  {
    slug: "pillcare-medicine-tracker",
    title: "PillCare - Family Medicine Tracker",
    description:
      "360-degree family medicine management app with real-time stock tracking, cost analytics, and medication history for multiple family members.",
    longDescription:
      "PillCare (formerly PillMate) is a comprehensive Android application designed to help families manage medications for multiple dependents. The app provides real-time medicine stock tracking, medication history with detailed analytics, cost breakdown by person and medicine type, and monthly budget tracking. Built with Kotlin and Material Design 3, it features JWT-based secure authentication with token refresh, offline mode with sync capability, and beautiful analytics dashboards using MPAndroidChart. The app includes smart low-medicine alerts, medication search with suggestions, and an intuitive onboarding flow for new users. Security is paramount with EncryptedSharedPreferences for sensitive data.",
    image: "/images/projects/pillcare.png",
    category: "mobile",
    techStack: [
      "Android",
      "Kotlin",
      "Retrofit",
      "Material Design 3",
      "MPAndroidChart",
      "JWT Auth",
      "SQLite",
    ],
    features: [
      "Multi-family member medicine tracking",
      "Real-time medicine stock monitoring",
      "Cost analytics and budget tracking",
      "Medication history with insights",
      "Low medicine alerts and reminders",
      "Offline mode with cloud sync",
      "Secure JWT authentication",
      "Analytics dashboard with charts",
    ],
    results: [
      "Version 1.0.6 in production",
      "Comprehensive family health tracking",
      "Secure data with encryption",
      "Ready for global launch",
    ],
    featured: true,
  },
  {
    slug: "arakne-rental-marketplace",
    title: "Arakne - Rental Marketplace Platform",
    description:
      "Full-stack rental marketplace with dual Android apps for customers and businesses, AWS-powered backend, and real-time booking management.",
    longDescription:
      "Arakne is a comprehensive rental marketplace platform connecting renters with businesses offering items for rent. The ecosystem includes a customer-facing Android app for browsing, searching, and booking rental items, and a business app for listing management, order processing, and inventory control. The robust Node.js backend handles user authentication, payment processing, and real-time notifications. AWS S3 powers the image storage system with optimized uploads, while Firebase enables instant push notifications for booking updates. The platform supports various rental categories and provides a seamless experience from discovery to return.",
    image: "/images/projects/arakne.png",
    category: "fullstack",
    techStack: [
      "Android",
      "Kotlin",
      "Node.js",
      "Express",
      "AWS S3",
      "Firebase",
      "PostgreSQL",
    ],
    features: [
      "Dual Android apps (Customer & Business)",
      "Product listing with rich media",
      "Advanced search and filtering",
      "Real-time booking management",
      "AWS S3 optimized image storage",
      "Firebase push notifications",
      "Secure payment integration",
      "Rating and review system",
    ],
    results: [
      "2 production Android apps",
      "Version 1.0.31 deployed",
      "Scalable cloud infrastructure",
      "Real-time booking system",
    ],
    featured: false,
  },
  {
    slug: "dheo-courier",
    title: "DHEO Courier - Delivery Management App",
    description:
      "Android delivery management app for logistics teams with real-time tracking, route management, and photo proof of delivery.",
    longDescription:
      "Built specifically for DHEO's delivery operations, this Android app empowers riders to manage their deliveries efficiently. The app features real-time order updates from the central system, intelligent route suggestions, delivery confirmation with photo proof, and instant push notifications for new assignments. Riders can view their daily delivery queue, mark deliveries as complete with customer signatures or photos, and track their performance metrics. The app integrates seamlessly with the DHEO backend system ensuring order status updates reflect immediately across all platforms.",
    image: "/images/projects/dheo-courier.png",
    category: "mobile",
    techStack: [
      "Android",
      "Kotlin",
      "Google Maps API",
      "Firebase",
      "REST API",
      "Camera API",
    ],
    features: [
      "Real-time delivery queue management",
      "Google Maps route integration",
      "Photo proof of delivery",
      "Customer signature capture",
      "Push notifications for new orders",
      "Rider performance dashboard",
      "Offline delivery recording",
      "Instant status sync with backend",
    ],
    results: [
      "Streamlined delivery operations",
      "30% reduction in delivery times",
      "Real-time order visibility",
      "Zero lost delivery records",
    ],
    featured: false,
  },
  {
    slug: "niyyah-habit-tracker",
    title: "Niyyah - Islamic Habit Tracker",
    description:
      "Beautiful habit tracking app designed for Muslims to build and maintain positive daily habits with streak tracking and motivational features.",
    longDescription:
      "Niyyah (meaning 'intention' in Arabic) is a thoughtfully designed Android app to help Muslims build and maintain positive daily habits. The app features an elegant Material Design 3 interface with support for both English and Bangla languages. Users can add custom habits, track daily completion, and build streaks with visual badges that celebrate consistency. The app includes smooth animations, dark mode support, and local file-based persistence for offline-first functionality. Designed with simplicity in mind, Niyyah focuses on encouraging users to form good habits through consistent tracking and positive reinforcement.",
    image: "/images/projects/muslim-checklist.png",
    category: "mobile",
    techStack: [
      "Android",
      "Kotlin",
      "Material Design 3",
      "Gson",
      "Local Storage",
    ],
    features: [
      "Custom habit creation and tracking",
      "Streak tracking with visual badges",
      "Dark mode support",
      "Bilingual support (English & Bangla)",
      "Smooth UI animations",
      "Offline-first architecture",
      "Daily habit reminders",
      "Progress visualization",
    ],
    results: [
      "Clean, intuitive interface",
      "Offline functionality",
      "Active development",
      "Community-focused project",
    ],
    featured: false,
  },
  {
    slug: "qardlink-community-app",
    title: "QardLink - Interest-Free Lending Community",
    description:
      "Community platform for Qarde Hasanah (interest-free loans) connecting lenders with those in need within trusted community circles.",
    longDescription:
      "QardLink is an Android application built to facilitate Qarde Hasanah - the Islamic concept of interest-free loans given as an act of goodwill. The app connects community members who can offer interest-free loans with those who need financial assistance, all within trusted circles. Built with Material Design principles, QardLink aims to modernize this beautiful tradition by providing a secure platform for managing loan requests, tracking repayments, and building trust within communities. The app emphasizes privacy, trust verification, and ease of use to encourage more people to participate in this form of charitable giving.",
    image: "/images/projects/muslim-checklist.png",
    category: "mobile",
    techStack: ["Android", "Kotlin", "Material Design", "Firebase", "REST API"],
    features: [
      "Community-based lending circles",
      "Loan request management",
      "Repayment tracking",
      "Trust verification system",
      "Privacy-focused design",
      "Notification reminders",
      "Transaction history",
      "Community guidelines integration",
    ],
    results: [
      "Early stage development",
      "Core functionality complete",
      "Community testing phase",
      "Positive initial feedback",
    ],
    featured: false,
  },
  {
    slug: "ragbot-ai-chatbot",
    title: "RagBot - AI-Powered Knowledge Assistant",
    description:
      "Intelligent chatbot using RAG architecture for accurate, context-aware responses from custom knowledge bases.",
    longDescription:
      "RagBot is an AI-powered chatbot built using Retrieval-Augmented Generation (RAG) architecture. Unlike traditional chatbots that rely solely on pre-trained knowledge, RagBot retrieves relevant context from a custom knowledge base before generating responses, ensuring accuracy and relevance. The system uses vector embeddings for semantic search, allowing it to understand the meaning behind queries rather than just matching keywords. Deployed on Vercel for instant scaling and global edge performance, RagBot delivers sub-second response times while maintaining context throughout conversations.",
    image: "/images/projects/ragbot.jpg",
    category: "fullstack",
    techStack: [
      "Node.js",
      "OpenAI API",
      "Vector Database",
      "Vercel",
      "REST API",
      "TypeScript",
    ],
    features: [
      "RAG architecture for accurate responses",
      "Vector-based semantic search",
      "Custom knowledge base integration",
      "Context-aware conversations",
      "Sub-second response times",
      "Conversation memory",
      "Easy knowledge base updates",
      "API-first design",
    ],
    results: [
      "Deployed on Vercel edge",
      "Sub-second response times",
      "High accuracy responses",
      "Scalable architecture",
    ],
    featured: false,
  },
  {
    slug: "deshito-mobile-app",
    title: "Deshito - Service Platform App",
    description:
      "Feature-rich Android application connecting users with local services, featuring modern UI and seamless booking experience.",
    longDescription:
      "Deshito is a native Android application built to connect users with local service providers. The app features a clean, intuitive Material Design interface that makes finding and booking services effortless. With robust backend integration, users can browse services, view provider profiles, make bookings, and track service status in real-time. The app includes secure authentication, push notifications for booking updates, and an offline-first architecture that caches essential data. Currently at version 1.3.2, Deshito receives regular updates based on user feedback and continues to evolve with new features.",
    image: "/images/projects/deshito.png",
    category: "mobile",
    techStack: [
      "Android",
      "Java/Kotlin",
      "Firebase",
      "REST API",
      "Material Design",
      "Room DB",
    ],
    features: [
      "Service discovery and booking",
      "Provider profiles and ratings",
      "Real-time booking status",
      "Modern Material Design UI",
      "Offline-first with caching",
      "Push notifications",
      "Secure authentication",
      "Search and filtering",
    ],
    results: [
      "Version 1.3.2 in production",
      "Published on Play Store",
      "Active user base",
      "Regular feature updates",
    ],
    featured: false,
  },
  {
    slug: "muslim-checklist-flutter",
    title: "Muslim Checklist - Daily Ibadah Tracker",
    description:
      "Cross-platform Flutter app helping Muslims track daily prayers, Quran reading, and spiritual goals with progress analytics.",
    longDescription:
      "Muslim Checklist is a cross-platform Flutter application designed to help Muslims maintain consistency in their daily religious practices. The app allows users to track their five daily prayers, Quran reading progress, dhikr (remembrance), and other acts of worship. With gentle reminders and progress statistics, it encourages spiritual growth through consistency. The clean, minimal interface reduces distractions and keeps focus on what matters. Built with Flutter for both iOS and Android, the app works offline with local storage and syncs data when connected. This is a personal project created to serve the Muslim community.",
    image: "/images/projects/muslim-checklist.png",
    category: "mobile",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Local Storage",
      "Material Design",
    ],
    features: [
      "Five daily prayer tracking",
      "Quran reading progress log",
      "Dhikr and dua tracking",
      "Customizable spiritual goals",
      "Gentle reminder notifications",
      "Progress statistics and streaks",
      "Clean, distraction-free UI",
      "Offline functionality",
    ],
    results: [
      "Cross-platform (iOS & Android)",
      "Complete offline support",
      "User-friendly interface",
      "Community-focused project",
    ],
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
