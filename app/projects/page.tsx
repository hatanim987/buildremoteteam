import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { CTA } from "@/components/CTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of startup projects including mobile apps, web applications, and backend systems.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Work
          </h1>
          <p className="text-xl text-gray-600">
            A selection of projects I&apos;ve built for startup founders. Each one
            represents a unique challenge solved with clean code and fast execution.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 pb-8 border-b border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">30+</div>
            <div className="text-gray-600">Startup Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTA />
    </>
  );
}
