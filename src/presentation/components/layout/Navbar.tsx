"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useUIStore } from "@/presentation/stores/useUIStore";

export const Navbar = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "E-Majalah", href: "#majalah" },
    { name: "Organisasi", href: "#organisasi" },
    { name: "Kenangan", href: "#kenangan" },
    { name: "Kerja Sama", href: "#kerjasama" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition">
              L
            </div>
            <span className="font-serif font-bold text-xl text-primary tracking-wide">
              LENSA MEDIA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium transition duration-300 text-sm lg:text-base relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-blue-800 text-white px-5 py-2.5 rounded-full font-semibold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
            >
              Join Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 transition"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="block mt-4 w-full text-center bg-primary text-white px-4 py-3 rounded-lg font-bold shadow-md active:scale-95 transition"
          >
            Join LPM Lensa Media
          </a>
        </div>
      </div>
    </nav>
  );
};
