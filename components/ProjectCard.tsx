import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/Badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const categoryLabels = {
    mobile: "Mobile App",
    backend: "Backend",
    fullstack: "Full-Stack",
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all"
    >
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Project Preview</span>
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary">{categoryLabels[project.category]}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0 ml-2" />
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-gray-500 text-xs">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
