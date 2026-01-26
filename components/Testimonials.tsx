import { Quote } from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="What Founders Say"
        subtitle="Feedback from startup founders I've worked with"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-gray-200 relative"
          >
            <Quote className="w-8 h-8 text-gray-200 absolute top-6 right-6" />

            <p className="text-gray-700 mb-6 relative z-10">
              &ldquo;{testimonial.content}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
