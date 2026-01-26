import { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TechStack } from "@/components/TechStack";
import { CTA } from "@/components/CTA";
import { Code, Rocket, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Hasnain Ahmad Tanim - a dedicated remote developer who integrates seamlessly with distributed teams across Europe, USA, and Saudi Arabia.",
};

const milestones = [
  {
    year: "2019",
    title: "Started Professional Development",
    description: "Began building Android apps and backend systems, learning the craft of remote collaboration.",
  },
  {
    year: "2020",
    title: "First Long-Term Team Engagement",
    description: "Joined my first remote team as a dedicated developer, working across timezones with daily standups.",
  },
  {
    year: "2022",
    title: "Expanded Global Reach",
    description: "Started working with teams in Europe, USA, and Saudi Arabia, mastering distributed team workflows.",
  },
  {
    year: "2024",
    title: "8+ Months Average Engagement",
    description: "Building lasting relationships with teams who value consistent, reliable development partnerships.",
  },
];

const values = [
  {
    icon: Users,
    title: "Team Integration",
    description:
      "I don't just write code — I become part of your team. Daily standups, sprint planning, and Slack collaboration are my standard.",
  },
  {
    icon: Code,
    title: "Quality Code",
    description:
      "I write clean, maintainable code that your team can understand and extend. Code reviews and documentation included.",
  },
  {
    icon: Rocket,
    title: "Reliable Delivery",
    description:
      "Consistent availability and predictable output. No ghosting, no missed deadlines — just steady progress every sprint.",
  },
  {
    icon: Zap,
    title: "AI-Enhanced",
    description:
      "I leverage AI tools to work smarter, delivering faster without compromising the quality your team expects.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m Hasnain
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              I&apos;m a mobile and backend developer who integrates seamlessly
              with distributed teams. With 5+ years of remote experience working
              with companies across Europe, USA, and Saudi Arabia, I understand
              what it takes to be a reliable, long-term team member.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              I combine deep technical expertise with modern collaboration tools
              to deliver consistent value sprint after sprint. Whether your team
              needs Android expertise, backend development, or full-stack
              capabilities, I&apos;m ready to become your dedicated remote developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact">Schedule a Team Fit Call</Button>
              <Button href="/projects" variant="outline">
                See My Work
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
              <Image
                src="/images/profile.jpg"
                alt="Hasnain Ahmad Tanim"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 rounded-xl -z-10" />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="How I Work"
          subtitle="The principles that guide my approach to development"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-6 rounded-2xl border border-gray-200"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl mb-4">
                <value.icon className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Journey Section */}
      <Section>
        <SectionHeader
          title="My Journey"
          subtitle="Key milestones in my development career"
        />

        <div className="max-w-2xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full font-bold text-sm">
                  {milestone.year}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-200 mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <TechStack />

      {/* CTA */}
      <CTA />
    </>
  );
}
