import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";
import { posts, getPostBySlug } from "@/data/posts";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section className="pt-12" containerSize="md">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Header */}
        <article>
          <header className="mb-12">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">HAT</span>
                </div>
                <span className="font-medium text-gray-700">{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {/* Author box */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-600 font-bold text-lg">HAT</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Written by {post.author}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Mobile & Backend Developer helping startup founders build products
                  faster with AI-assisted development.
                </p>
                <Button href="/contact" size="sm">
                  Work With Me
                </Button>
              </div>
            </div>
          </div>
        </article>
      </Section>

      <CTA />
    </>
  );
}

// Simple markdown-like formatting
function formatContent(content: string): string {
  let html = content
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .trim();

  // Wrap consecutive list items in <ul>
  html = html.replace(/(<li>[\s\S]*?<\/li>)+/g, '<ul>$&</ul>');

  return html;
}
