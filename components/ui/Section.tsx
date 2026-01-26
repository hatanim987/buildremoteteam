import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl";
  id?: string;
}

export function Section({ children, className, containerSize = "lg", id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
