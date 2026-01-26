import { Globe } from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";

const regions = [
  {
    name: "Europe",
    description: "UK, Germany, Netherlands, and EU. Full overlap with CET/GMT business hours.",
    timezone: "CET/GMT",
  },
  {
    name: "United States",
    description: "East Coast and West Coast coverage. Morning syncs EST, afternoon PST.",
    timezone: "EST/PST",
  },
  {
    name: "Saudi Arabia",
    description: "Supporting Vision 2030 tech initiatives. Full AST business hours alignment.",
    timezone: "AST",
  },
];

export function GeographicCoverage() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="Working Across Time Zones"
        subtitle="Flexible availability for teams worldwide"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {regions.map((region) => (
          <div
            key={region.name}
            className="text-center p-6 bg-white rounded-2xl border border-gray-200"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gray-900 rounded-xl">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {region.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{region.description}</p>
            <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
              {region.timezone}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
