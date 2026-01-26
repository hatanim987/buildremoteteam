import { Hero } from "@/components/Hero";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyWorkWithMe />
      <FeaturedProjects />
      <TechStack />
      <Testimonials />
      <CTA />
    </>
  );
}
