import { Globe, Users, Calendar, Layers } from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";

const benefits = [
  {
    icon: Globe,
    title: "Global Timezone Coverage",
    description:
      "I maintain flexible working hours that overlap with European, US, and Middle Eastern business hours. Your team always has coverage.",
  },
  {
    icon: Users,
    title: "True Team Integration",
    description:
      "I join your Slack, attend your standups, and participate in sprint planning. I'm not a black-box contractor - I'm a team member.",
  },
  {
    icon: Calendar,
    title: "Long-Term Commitment",
    description:
      "My average client engagement is 8+ months. I invest in understanding your codebase, culture, and long-term goals.",
  },
  {
    icon: Layers,
    title: "End-to-End Capability",
    description:
      "From Android apps to Node.js backends, I handle the full stack. One integrated team member for your entire technical needs.",
  },
];

export function WhyWorkWithMe() {
  return (
    <Section>
      <SectionHeader
        title="Why Work With Me"
        subtitle="The advantages of having a dedicated remote team member"
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
