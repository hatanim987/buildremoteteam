"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "./ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call - replace with actual email sending logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600 mb-6">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
          placeholder="john@startup.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          {...register("projectType")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-white"
        >
          <option value="">Select a project type</option>
          <option value="mvp">MVP Development</option>
          <option value="mobile">Mobile App (Android)</option>
          <option value="backend">Backend / API Development</option>
          <option value="fullstack">Full-Stack Development</option>
          <option value="consultation">Technical Consultation</option>
          <option value="other">Other</option>
        </select>
        {errors.projectType && (
          <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
          Budget Range (Optional)
        </label>
        <select
          id="budget"
          {...register("budget")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-white"
        >
          <option value="">Select a budget range</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k+">$50,000+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Tell Me About Your Project
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none"
          placeholder="Describe your project, goals, and timeline..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
