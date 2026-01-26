export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "FinPay",
    content:
      "Hasnain shipped our MVP in 6 weeks. His understanding of startup constraints and ability to move fast without compromising quality was exactly what we needed. It felt like having a technical co-founder.",
  },
  {
    name: "Marcus Johnson",
    role: "CEO",
    company: "ShopNow",
    content:
      "As a non-technical founder, I was worried about finding the right developer. Hasnain not only built our e-commerce platform but helped me understand the technical decisions we were making. Best decision for our early stage.",
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "TeamFlow",
    content:
      "The AI-assisted development approach meant we shipped features 3x faster than our competitors. Hasnain's combination of technical skills and startup mindset is rare and valuable.",
  },
];
