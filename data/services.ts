import { Rocket, Smartphone, Server, Bot, MessageSquare, Users } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: typeof Rocket;
  features: string[];
  idealFor: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "dedicated-developer-retainer",
    title: "Dedicated Developer Retainer",
    description:
      "Secure ongoing development capacity with a monthly retainer. I integrate with your team for long-term projects, attending standups and contributing to your roadmap.",
    icon: Users,
    features: [
      "Fixed monthly hours guaranteed",
      "Team integration (Slack, daily standups)",
      "Priority response and communication",
      "Long-term roadmap planning",
    ],
    idealFor: "Companies needing 20-40+ hours/month of dedicated development",
    deliverables: [
      "Dedicated availability each month",
      "Sprint participation and planning",
      "Code reviews and team collaboration",
      "Flexible scope adjustments",
    ],
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    description:
      "Go from idea to working product fast. I help you validate your concept with a lean, functional MVP that real users can test.",
    icon: Rocket,
    features: [
      "Rapid prototyping and development",
      "User-focused feature prioritization",
      "Scalable architecture from day one",
      "Launch-ready in weeks, not months",
    ],
    idealFor: "Pre-seed and seed-stage startups validating product-market fit",
    deliverables: [
      "Functional MVP application",
      "Technical documentation",
      "Deployment to production",
      "2 weeks post-launch support",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Native Android applications built for performance and user experience. From concept to Play Store launch.",
    icon: Smartphone,
    features: [
      "Native Android development (Kotlin/Java)",
      "Modern UI/UX following Material Design",
      "Offline-first architecture",
      "Push notifications & analytics",
    ],
    idealFor: "Startups needing a mobile presence for their product",
    deliverables: [
      "Production-ready Android app",
      "Play Store listing optimization",
      "App analytics integration",
      "Ongoing maintenance options",
    ],
  },
  {
    slug: "backend-development",
    title: "Backend & API Development",
    description:
      "Robust, scalable backend systems with Node.js. RESTful APIs, database design, and cloud infrastructure.",
    icon: Server,
    features: [
      "Node.js / Express / NestJS",
      "Database design (PostgreSQL, MongoDB)",
      "Authentication & authorization",
      "Cloud deployment (AWS, GCP, Vercel)",
    ],
    idealFor: "Startups needing reliable infrastructure to power their apps",
    deliverables: [
      "API documentation",
      "Deployed backend system",
      "Database schema & migrations",
      "CI/CD pipeline setup",
    ],
  },
  {
    slug: "ai-assisted-development",
    title: "AI-Assisted Full-Stack Development",
    description:
      "Leverage the power of AI to ship 3x faster. I combine AI tools with deep expertise to accelerate your development.",
    icon: Bot,
    features: [
      "AI-powered code generation & review",
      "Rapid feature development",
      "Full-stack capabilities",
      "Quality maintained with AI oversight",
    ],
    idealFor: "Startups on tight timelines who need to move fast",
    deliverables: [
      "Full-stack application",
      "Comprehensive testing",
      "Documentation",
      "Knowledge transfer",
    ],
  },
  {
    slug: "technical-consultation",
    title: "Technical Consultation",
    description:
      "Get expert advice on architecture, tech stack decisions, and development strategy. Perfect for non-technical founders.",
    icon: MessageSquare,
    features: [
      "Architecture review & recommendations",
      "Tech stack selection",
      "Development roadmap planning",
      "Team scaling advice",
    ],
    idealFor: "Non-technical founders needing strategic tech guidance",
    deliverables: [
      "Written recommendations report",
      "Architecture diagrams",
      "Priority roadmap",
      "Follow-up call included",
    ],
  },
];
