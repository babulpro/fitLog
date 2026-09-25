"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import SaveNavbar from './subNavnar/Save';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Workouts", url: "/" },
    { name: "My Plan", url: "/plan" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f] text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* LEFT SIDE: Hamburger (Mobile) + Logo */}
        <div className="flex items-center gap-3 z-50">
          {/* Mobile Menu Button (Hamburger) - Only visible on small screens */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-gray-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-wider">
            FITLOG
          </Link>
        </div>

        {/* CENTER: Navigation Links (Desktop only) */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                key={link.name}
                href={link.url}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#d4ff00] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE: Save/Plan Counters */}
        <div className="flex items-center gap-4 z-50">
          <SaveNavbar />
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-gray-800 shadow-xl absolute top-16 left-0 w-full">
          <div className="flex flex-col p-4 gap-2">
            {links.map((link) => {
              const isActive = pathname === link.url;
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wide transition-colors ${
                    isActive
                      ? 'bg-[#1a2312] text-[#d4ff00]'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;