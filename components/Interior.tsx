"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

// --- ডাটা (কোনো পরিবর্তন নেই) ---
const features = [
  {
    id: 1,
    name: "M Alcantara Steering",
    description: "Race-inspired grip with red M1/M2 preset buttons and carbon fiber paddle shifters.",
    top: "55%",  
    left: "36%", 
    direction: "up"
  },
  {
    id: 2,
    name: "BMW Curved Display",
    description: "A single glass surface merging a 12.3\" instrument cluster and a 14.9\" control display.",
    top: "32%",  
    left: "50%", 
    direction: "down"
  },
  {
    id: 3,
    name: "M Gear Selector Logic",
    description: "Toggle Drivelogic shift characteristics instantly. Surrounded by real carbon fiber trim.",
    top: "78%",  
    left: "58%", 
    direction: "up"
  },
  {
    id: 4,
    name: "M Carbon Bucket Seats",
    description: "Illuminated M badge, multi-point harness ready, and significant weight savings.",
    top: "60%",  
    left: "83%", 
    direction: "up"
  },
];

export default function Interior() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen w-full bg-[#0a0a0a] py-20 flex flex-col items-center justify-center gap-8">
      
      {/* --- TITLE --- */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center z-20 px-4 mb-4"
      >
        <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase tracking-tight drop-shadow-lg">
          The Driver's <span className="text-red-600">Cockpit</span>
        </h2>
        <div className="h-1 w-24 bg-white/20 mt-4 mx-auto" />
      </motion.div>

      {/* --- INTERIOR IMAGE CONTAINER --- */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={isInView ? { opacity: 1, scale: 1 } : {}}
         transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
         className="relative w-full max-w-7xl aspect-video mx-auto px-4 md:px-0"
      >
        <div className="relative w-full h-full rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden group">
            <Image
            src="/interior.jpg"
            alt="BMW M4 Interior"
            fill
            className="object-cover transition-transform duration-[5s] ease-in-out group-hover:scale-105"
            priority
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* --- PREMIUM HOTSPOTS (Updated Design) --- */}
        {features.map((feature) => (
          <div
            key={feature.id}
            style={{ top: feature.top, left: feature.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
          >
            {/* 🔥 NEW BUTTON DESIGN 🔥 */}
            <button
              onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              className="relative w-10 h-10 flex items-center justify-center group/btn focus:outline-none"
            >
              {/* 1. Outer Pulsing Ring (Now reddish for better visibility) */}
              <span className={`absolute w-full h-full rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] transition-all duration-300
                ${activeFeature === feature.id ? 'bg-red-600/40 scale-110' : 'bg-red-500/30 group-hover/btn:bg-red-600/40'}
              `} />
              
              {/* 2. Hover Halo Effect (Appears on hover) */}
              <span className="absolute w-full h-full bg-red-600/20 rounded-full scale-0 transition-all duration-300 group-hover/btn:scale-150" />

              {/* 3. Inner Circle (Main click target with stronger glow) */}
              <span className={`relative w-4 h-4 rounded-full border-[3px] border-white transition-all duration-300
                shadow-[0_0_15px_rgba(255,255,255,0.3)] // Base white glow
                group-hover/btn:scale-125 group-hover/btn:bg-red-600 group-hover/btn:shadow-[0_0_30px_rgba(255,0,0,1)] // Strong red glow on hover
                ${activeFeature === feature.id ? 'bg-red-600 scale-125 shadow-[0_0_30px_rgba(255,0,0,1)]' : 'bg-black/40 backdrop-blur-sm'}
              `} />
            </button>

            {/* --- PREMIUM GLASS POPUP CARD (No changes here) --- */}
            <AnimatePresence>
              {activeFeature === feature.id && (
                <motion.div
                  initial={{ opacity: 0, y: feature.direction === 'up' ? 10 : -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  className={`absolute left-1/2 -translate-x-1/2 w-72 bg-black/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl text-left z-50
                    ${feature.direction === 'up' ? 'bottom-14 origin-bottom' : 'top-14 origin-top'}
                  `}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-[2px] w-5 bg-red-600"></div>
                    <h3 className="text-white font-oswald text-lg font-bold tracking-wider">
                        {feature.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed font-light border-l border-white/10 pl-3">
                    {feature.description}
                  </p>

                  {/* Close X */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveFeature(null); }}
                    className="absolute top-3 right-3 text-white/30 hover:text-white transition-colors text-xs"
                  >
                    ✕
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

      </motion.div>
    </section>
  );
}