import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            Available for new projects
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            I Help Startup Founders{" "}
            <span className="text-gray-500">Build & Ship Products Faster</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Mobile apps, backend systems, and full-stack development with AI-assisted
            speed. Your remote technical partner from MVP to scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Book a Free Call
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              View My Work
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-6">
              Trusted by startup founders building the next big thing
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">50+</span>
                <span className="text-sm text-gray-600">Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">5+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">100%</span>
                <span className="text-sm text-gray-600">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
