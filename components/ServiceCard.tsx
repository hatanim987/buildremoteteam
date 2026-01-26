import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="group p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl mb-5 group-hover:bg-gray-900 transition-colors">
        <Icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-5">
        {service.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-start text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Ideal for */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="font-medium text-gray-700">Ideal for: </span>
        {service.idealFor}
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="inline-flex items-center text-gray-900 font-medium hover:underline"
      >
        Get started
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
