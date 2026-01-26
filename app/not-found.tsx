import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="pt-24">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-8xl font-bold text-gray-200 mb-8">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Go Home</Button>
          <Button href="/contact" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
    </Section>
  );
}
