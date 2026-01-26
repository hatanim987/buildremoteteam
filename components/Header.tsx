"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { navLinks } from "@/data/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              Build<span className="text-gray-600">RemoteTeam</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-4">
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
