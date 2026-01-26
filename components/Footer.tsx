import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Container } from "./ui/Container";
import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  const socialLinks = [
    { href: siteConfig.links.github, icon: Github, label: "GitHub" },
    { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: siteConfig.links.twitter, icon: Twitter, label: "Twitter" },
    { href: `mailto:${siteConfig.links.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block">
                <span className="text-xl font-bold text-gray-900">
                  Build<span className="text-gray-600">RemoteTeam</span>
                </span>
              </Link>
              <p className="mt-4 text-gray-600 max-w-md">
                Helping startup founders build and ship products faster with
                AI-assisted development. Your remote technical partner.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {siteConfig.links.email}
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Book a Free Call
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Built with Next.js & AI-assisted development
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
