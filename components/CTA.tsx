import { ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

export function CTA() {
  return (
    <Section className="bg-gray-900">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build Your Product?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Let&apos;s discuss your startup idea and create a plan to bring it to life.
          First call is always free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/contact"
            className="bg-white text-gray-900 hover:bg-gray-100"
            size="lg"
          >
            Book a Free Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            href="/projects"
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-800"
            size="lg"
          >
            View My Work
          </Button>
        </div>
      </div>
    </Section>
  );
}
