import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/BlogCard";
import { CTA } from "@/components/CTA";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on startup development, MVP building, and AI-assisted development for founders.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Thoughts on startup development, building MVPs, and leveraging AI to
            ship products faster. Written for non-technical founders and
            technical teams alike.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTA />
    </>
  );
}
