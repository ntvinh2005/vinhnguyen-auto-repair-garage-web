import React, { useState } from "react";
import { Wrench, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Name */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" className="w-12 h-12" />
            <span className="text-white font-bold text-xl">
              Vinh Nguyen Auto
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Call Now Button */}
          <Button className="bg-yellow-400 text-red-800 hover:bg-yellow-500 font-semibold ml-4 flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-red-800 px-4 pb-4 space-y-2">
          <a
            href="#home"
            className="block text-white hover:text-yellow-400 transition-colors py-1"
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-white hover:text-yellow-400 transition-colors py-1"
          >
            Services
          </a>
          <a
            href="#about"
            className="block text-white hover:text-yellow-400 transition-colors py-1"
          >
            About
          </a>
          <a
            href="#testimonials"
            className="block text-white hover:text-yellow-400 transition-colors py-1"
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="block text-white hover:text-yellow-400 transition-colors py-1"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
