"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Models", href: "/models" },
  { name: "Specs", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Experience", href: "#" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} // Hero এর সাথে মিল রেখে স্মুথ এন্ট্রি
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm bg-black/10 border-b border-white/5"
    >
      
      {/* --- LOGO --- */}
      <div className="flex items-center gap-2">
        {/* BMW Logo Text */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="font-bold text-black text-xs">BMW</span>
        </div>
        <span className="text-white font-oswald font-bold text-xl tracking-widest hidden md:block">
          M4 / G82
        </span>
      </div>

      {/* --- MENU LINKS --- */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.href} 
              className="text-white/70 hover:text-white text-sm uppercase tracking-widest font-medium transition-colors duration-300 relative group"
            >
              {link.name}
              {/* Hover Line Animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* --- CTA BUTTON --- */}
      <button className="hidden md:block px-6 py-2 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
        Test Drive
      </button>

      {/* Mobile Menu Icon (Simple Hamburger) */}
      <div className="md:hidden text-white cursor-pointer">
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-4 h-0.5 bg-white ml-auto"></div>
      </div>

    </motion.nav>
  );
}