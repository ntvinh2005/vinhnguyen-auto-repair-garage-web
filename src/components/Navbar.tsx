import React, { useState } from "react";
import { Wrench, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#home", label: "Trang chủ" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#about", label: "Về chúng tôi" },
  { href: "#testimonials", label: "Khách hàng" },
  { href: "#contact", label: "Liên hệ" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-red-800/80 backdrop-blur-md shadow-xl transition-all duration-300"
      style={{
        WebkitBackdropFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              className="w-12 h-12 drop-shadow-lg"
              alt="logo"
            />
            <span className="text-white font-extrabold text-2xl tracking-wide drop-shadow">
              Vinh Nguyên
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group text-white font-medium text-lg px-2 py-1 transition-colors"
              >
                {link.label}
                <span
                  className="block absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"
                  style={{ transitionProperty: "width" }}
                ></span>
              </a>
            ))}
          </div>

          {/* Call Now Button */}
          <a
            href="tel:0911980131"
            className="ml-4 bg-yellow-400 hover:bg-yellow-300 transition-colors px-5 py-2 rounded-full font-bold text-red-800 flex items-center shadow-md group focus:outline-none focus:ring-2 focus:ring-yellow-300"
            style={{ boxShadow: "0 2px 10px 0 rgba(251,191,36,0.14)" }}
          >
            <Phone className="w-5 h-5 mr-2 animate-bounce group-hover:animate-none" />
            Gọi ngay
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden ml-3 p-2 rounded-full bg-white/10 hover:bg-yellow-400/10 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="text-yellow-300 w-7 h-7" />
            ) : (
              <Menu className="text-white w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav - animated slide down */}
      <div
        className={`md:hidden bg-red-800/95 backdrop-blur-lg shadow-xl px-6 pb-5 pt-3 transition-all duration-400 ${
          menuOpen
            ? "max-h-[340px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block text-white font-medium text-lg py-2 border-b border-red-900 last:border-b-0 hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:0911980131"
          className="mt-5 w-full inline-flex items-center justify-center rounded-full bg-yellow-400 text-red-900 font-semibold py-2 px-6 shadow-md hover:bg-yellow-300 transition"
        >
          <Phone className="w-5 h-5 mr-2" />
          Gọi ngay
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
