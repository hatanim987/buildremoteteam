import { Zap, TrendingUp, DollarSign, Layers } from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";

const benefits = [
  {
    icon: TrendingUp,
    title: "Startup Experience",
    description:
      "I understand pivots, lean methodology, and the pressure to ship fast. I've helped 50+ startups build their products.",
  },
  {
    icon: Zap,
    title: "AI-Powered Speed",
    description:
      "Using AI-assisted development, I deliver 3x faster without sacrificing quality. Ship your MVP in weeks, not months.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description:
      "Get senior-level expertise without the overhead of a full-time hire. Pay for results, not headcount.",
  },
  {
    icon: Layers,
    title: "End-to-End Capability",
    description:
      "From Android apps to Node.js backends, I handle the full stack. One point of contact for your entire technical build.",
  },
];

export function WhyWorkWithMe() {
  return (
    <Section>
      <SectionHeader
        title="Why Work With Me"
        subtitle="The advantages of partnering with a startup-focused developer"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex gap-5 p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-xl">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
