"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- হটস্পট ডাটা (পজিশন % হিসেবে দেওয়া যাতে সব স্ক্রিনে কাজ করে) ---
const features = [
  {
    id: 1,
    name: "M Leather Steering Wheel",
    description: "Multifunction controls, red M1/M2 buttons for instant setup access, and carbon fiber trim.",
    top: "45%",  // উপর থেকে পজিশন
    left: "35%", // বাম থেকে পজিশন
  },
  {
    id: 2,
    name: "Curved Display",
    description: "12.3-inch instrument cluster and 14.9-inch central display merged into one single unit.",
    top: "32%",
    left: "52%",
  },
  {
    id: 3,
    name: "M Gear Selector",
    description: "Drivelogic switch to adjust shift speed. Pure tactile feedback for the ultimate control.",
    top: "65%",
    left: "55%",
  },
  {
    id: 4,
    name: "Carbon Bucket Seats",
    description: "Combines racing functionality with long-distance comfort. Illuminated M logo embedded.",
    top: "60%",
    left: "85%",
  },
];

export default function Interior() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* --- TITLE --- */}
      <div className="absolute top-10 left-0 w-full text-center z-20 pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase tracking-widest drop-shadow-lg">
          The <span className="text-red-600">Cockpit</span>
        </h2>
        <p className="text-gray-300 text-sm tracking-widest mt-2">Explore the details</p>
      </div>

      {/* --- INTERIOR IMAGE CONTAINER --- */}
      <div className="relative w-full h-full md:w-[90%] md:h-[85%] rounded-lg overflow-hidden shadow-2xl border border-white/10 group">
        <Image
          src="/interior.jpg" // তোমার ইমেজের নাম
          alt="BMW M4 Interior"
          fill
          className="object-cover transition-transform duration-[3s] group-hover:scale-105"
        />
        
        {/* --- BLACK OVERLAY (যাতে টেক্সট পড়া যায়) --- */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

        {/* --- HOTSPOTS (লুপ চালিয়ে পয়েন্ট বসানো) --- */}
        {features.map((feature) => (
          <div
            key={feature.id}
            style={{ top: feature.top, left: feature.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
          >
            {/* Pulsing Dot Button */}
            <button
              onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              className="relative w-8 h-8 flex items-center justify-center group/btn"
            >
              <span className="absolute w-full h-full bg-red-600 rounded-full opacity-50 animate-ping" />
              <span className="relative w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg group-hover/btn:scale-125 transition-transform" />
            </button>

            {/* --- INFO CARD (TOOLTIP) --- */}
            <AnimatePresence>
              {activeFeature === feature.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl text-left"
                >
                  <h3 className="text-white font-oswald text-lg font-bold mb-1 border-b border-red-600 pb-1 inline-block">
                    {feature.name}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed mt-2">
                    {feature.description}
                  </p>
                  {/* Close Button (X) */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveFeature(null); }}
                    className="absolute top-2 right-2 text-gray-500 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

      </div>
    </section>
  );
}