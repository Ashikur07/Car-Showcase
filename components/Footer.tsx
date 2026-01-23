"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white py-20 overflow-hidden border-t border-white/10">
      
      {/* --- BIG SLOGAN (Background) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <h1 className="text-[12vw] font-oswald font-bold tracking-tighter leading-none whitespace-nowrap">
          SHEER DRIVING PLEASURE
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- TOP SECTION: CTA --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
            <div>
                <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-2">
                    Ready to <span className="text-red-600">Drive?</span>
                </h2>
                <p className="text-gray-400 text-sm tracking-widest">
                    Experience the M Power yourself.
                </p>
            </div>

            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors duration-300"
            >
                Build Your Own
            </motion.button>
        </div>

        {/* --- DIVIDER --- */}
        <div className="h-[1px] w-full bg-white/10 mb-12" />

        {/* --- BOTTOM LINKS --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-400">
            
            {/* Column 1: Brand */}
            <div>
                <h3 className="text-white font-bold text-lg mb-4">BMW M</h3>
                <p className="leading-relaxed">
                    The ultimate driving machine. Designed for the track, built for the road.
                </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-red-600 transition-colors">Models</Link></li>
                    <li><Link href="#" className="hover:text-red-600 transition-colors">Configurator</Link></li>
                    <li><Link href="#" className="hover:text-red-600 transition-colors">Find a Dealer</Link></li>
                    <li><Link href="#" className="hover:text-red-600 transition-colors">Financial Services</Link></li>
                </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-4">Legal</h4>
                <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Cookies</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Imprint</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Legal Disclaimer</Link></li>
                </ul>
            </div>

            {/* Column 4: Social Text */}
            <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-4">Follow Us</h4>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                    <Link href="#" className="hover:text-white transition-colors">YouTube</Link>
                    <Link href="#" className="hover:text-white transition-colors">Facebook</Link>
                </div>
            </div>

        </div>

        {/* --- COPYRIGHT --- */}
        <div className="mt-20 text-center text-xs text-gray-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} BMW M4 Showcase Project. Created by You.
        </div>

      </div>
    </footer>
  );
}