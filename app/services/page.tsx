import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTA } from "@/components/CTA";
import { services } from "@/data/services";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MVP development, mobile apps, backend systems, and AI-assisted development services for startup founders.",
};

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We discuss your idea, goals, and timeline. I'll ask questions to understand your vision and provide initial recommendations.",
  },
  {
    step: "02",
    title: "Proposal & Planning",
    description:
      "I'll provide a detailed proposal with scope, timeline, and pricing. We'll align on priorities and create a roadmap.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "I build your product using AI-assisted development for speed and quality. You'll get regular updates and demos.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your product to production and ensure everything runs smoothly. Post-launch support included.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services for Startups
          </h1>
          <p className="text-xl text-gray-600">
            From MVP to scale, I offer end-to-end development services designed
            for the unique needs of startup founders. Fast, lean, and built to grow.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="How It Works"
          subtitle="A simple, transparent process from first call to launch"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item) => (
            <div key={item.step} className="relative">
              <div className="text-5xl font-bold text-gray-200 mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section>
        <SectionHeader
          title="What's Always Included"
          subtitle="Every project comes with these essentials"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "Clean, maintainable code",
            "Regular progress updates",
            "Technical documentation",
            "Deployment to production",
            "Post-launch support",
            "Knowledge transfer",
            "Git repository access",
            "Performance optimization",
            "Security best practices",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTA />
    </>
  );
}
