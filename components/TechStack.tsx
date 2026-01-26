import { Smartphone, Server, Bot, Code, Database, Cloud } from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";

const technologies = [
  {
    name: "Android",
    description: "Native mobile development",
    icon: Smartphone,
  },
  {
    name: "Node.js",
    description: "Backend & APIs",
    icon: Server,
  },
  {
    name: "AI Tools",
    description: "AI-assisted development",
    icon: Bot,
  },
  {
    name: "TypeScript",
    description: "Type-safe development",
    icon: Code,
  },
  {
    name: "PostgreSQL",
    description: "Database design",
    icon: Database,
  },
  {
    name: "Cloud",
    description: "AWS, GCP, Vercel",
    icon: Cloud,
  },
];

export function TechStack() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="Tech Stack"
        subtitle="Modern tools and technologies for building scalable products"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
              <tech.icon className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">{tech.name}</h3>
            <p className="text-xs text-gray-500 mt-1 text-center">{tech.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
