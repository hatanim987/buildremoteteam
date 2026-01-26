import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyPlaceholder } from "@/components/CalendlyEmbed";
import { siteConfig } from "@/data/site";
import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your startup project. Book a free call or send a message.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote (Worldwide)",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
];

export default function ContactPage() {
  return (
    <Section className="pt-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let&apos;s Build Something Great
        </h1>
        <p className="text-xl text-gray-600">
          Have a startup idea? Need help building your MVP? I&apos;d love to hear
          about your project. Book a free call or send me a message.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send a Message
          </h2>
          <ContactForm />
        </div>

        {/* Calendly & Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Or Book a Call
          </h2>
          <CalendlyPlaceholder />

          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
                  <item.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-900 font-medium hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Connect with me</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
