import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/CTA";
import { projects, getProjectBySlug } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const categoryLabels = {
    mobile: "Mobile App",
    backend: "Backend",
    fullstack: "Full-Stack",
  };

  return (
    <>
      <Section className="pt-12">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            {categoryLabels[project.category]}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>

          {/* Links */}
          <div className="flex gap-4 mb-12">
            {project.liveUrl && (
              <Button href={project.liveUrl}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="outline">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            )}
            <Button href="/contact" variant="outline">
              Build Something Similar
            </Button>
          </div>
        </div>

        {/* Project Image Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-16">
          <span className="text-gray-400">Project Screenshot</span>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {project.longDescription}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <ul className="space-y-3 mb-8">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.results.map((result) => (
                <div
                  key={result}
                  className="p-4 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <span className="text-gray-700">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-gray-900 rounded-2xl text-white">
                <h3 className="font-semibold mb-2">
                  Need something similar?
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Let&apos;s discuss how I can help build your product.
                </p>
                <Button
                  href="/contact"
                  className="w-full bg-white text-gray-900 hover:bg-gray-100"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
