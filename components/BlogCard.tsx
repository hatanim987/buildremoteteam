import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "./ui/Badge";
import { Post } from "@/data/posts";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all"
    >
      {/* Category & Date */}
      <div className="flex items-center gap-3 mb-4">
        <Badge variant="secondary">{post.category}</Badge>
        <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
      </div>

      {/* Title */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
          {post.title}
        </h3>
        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0 ml-2" />
      </div>

      {/* Excerpt */}
      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

      {/* Read time */}
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-1" />
        {post.readTime}
      </div>
    </Link>
  );
}
