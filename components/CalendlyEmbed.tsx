"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  url?: string;
}

export function CalendlyEmbed({ url = "https://calendly.com/your-calendly-link" }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Schedule a Free Call
      </h3>
      <p className="text-gray-600 mb-6">
        Let&apos;s discuss your project. Pick a time that works for you.
      </p>

      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: "630px" }}
      />

      {/* Fallback for when Calendly URL is not configured */}
      <noscript>
        <p className="text-center text-gray-500">
          Please enable JavaScript to view the scheduling widget, or{" "}
          <a href={url} className="text-gray-900 underline">
            click here to schedule directly
          </a>
          .
        </p>
      </noscript>
    </div>
  );
}

// Simple placeholder version for when Calendly is not set up
export function CalendlyPlaceholder() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Schedule a Free Call
      </h3>
      <p className="text-gray-600 mb-6">
        Let&apos;s discuss your project. I typically respond within 24 hours.
      </p>
      <div className="bg-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300">
        <p className="text-gray-500 text-sm">
          Calendly widget will appear here once configured.
          <br />
          <span className="text-xs">
            Update the Calendly URL in CalendlyEmbed component.
          </span>
        </p>
      </div>
    </div>
  );
}
