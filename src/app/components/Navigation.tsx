'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio companies", path: "/portfolio-companies" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`nav-container ${
        isScrolled ? "nav-scrolled" : ""
      } transition-all duration-300`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center hover-float">
            <span className="mr-2 gradient-text-gold">REA</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`nav-link ${
                  pathname === link.path 
                    ? "active" 
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="ml-4 px-4 py-2 rounded-md btn-secondary text-[#2A2A2A] hover:text-[#1D2530] transition-all hover-float"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-200 hover:text-[#D4AF37] focus:outline-none glass-light p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 invisible"
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 mt-2 border-t border-[#8599AC]/30 stagger-fade-in">
            {navigationLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === link.path 
                    ? "text-[#F9DF74] glass-light" 
                    : "text-gray-200 hover:text-[#D4AF37] hover:glass-light"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium btn-secondary text-[#2A2A2A] transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
