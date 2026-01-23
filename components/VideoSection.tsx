"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // --- ANIMATION LOGIC ---
  // স্ক্রল করার সাথে সাথে ভিডিওর সাইজ ছোট থেকে বড় হবে
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section 
        ref={containerRef} 
        className="relative w-full h-[80vh] md:h-screen bg-[#0a0a0a] flex items-center justify-center py-20 overflow-hidden"
    >
      
      {/* Background Text (Optional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <h2 className="text-[10vw] font-oswald font-bold text-white/5 uppercase tracking-tighter whitespace-nowrap">
            Adrenaline
        </h2>
      </div>

      {/* --- VIDEO CONTAINER --- */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative w-[90%] md:w-[95%] h-[90%] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.2)]"
      >
        {/* VIDEO TAG */}
        <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
        >
            <source src="/cinematic.mp4" type="video/mp4" />
            {/* ভিডিও না থাকলে নিচের টেক্সট দেখাবে */}
            Your browser does not support the video tag.
        </video>

        {/* Overlay Darken */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Center Play Button Icon (Visual Only) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm z-20">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
        </div>

        {/* Text Overlay */}
        <div className="absolute bottom-10 left-10 z-20">
            <h3 className="text-3xl font-oswald font-bold text-white uppercase mb-2">
                Unleash the <span className="text-red-600">Power</span>
            </h3>
            <p className="text-gray-300 text-sm tracking-widest">
                Watch the M4 in its natural habitat.
            </p>
        </div>

      </motion.div>

    </section>
  );
}