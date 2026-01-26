import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";
import { Button } from "./ui/Button";
import { ProjectCard } from "./ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Section>
      <SectionHeader
        title="Featured Projects"
        subtitle="A selection of startup projects I've helped build"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="text-center">
        <Button href="/projects" variant="outline">
          View All Projects
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Section>
  );
}
