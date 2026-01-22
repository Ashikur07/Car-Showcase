"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
    "/Gallery/gallery-1.jpg",  
    "/Gallery/gallery-2.jpeg",  
    "/Gallery/gallery-3.jpg",
    "/Gallery/gallery-4.jpg",
    "/Gallery/gallery-5.jpg",
    "/Gallery/gallery-6.jpg",
  ];

export default function Gallery() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // --- PARALLAX LOGIC ---
  // কলাম ১: স্ক্রল করলে উপরের দিকে উঠবে (দ্রুত)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  // কলাম ২: স্ক্রল করলে নিচের দিকে নামবে (উল্টো ডিরেকশন)
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  // কলাম ৩: স্ক্রল করলে আবার উপরের দিকে উঠবে (ধীরে)
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section 
        ref={containerRef} 
        className="relative min-h-screen bg-[#0a0a0a] py-20 overflow-hidden"
    >
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 mb-20 text-center relative z-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase"
        >
            Pure <span className="text-red-600">Emotion</span>
        </motion.h2>
        <p className="text-gray-400 mt-4 tracking-widest uppercase text-sm">Captured in motion</p>
      </div>

      {/* --- PARALLAX GRID --- */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] md:h-[1000px] overflow-hidden">
        
        {/* COLUMN 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-6">
            <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image src={images[0]} alt="Gallery 1" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image src={images[1]} alt="Gallery 2" fill className="object-cover" />
            </div>
        </motion.div>

        {/* COLUMN 2 (মাঝখানের কলাম - একটু নিচে থেকে শুরু হবে) */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-6 -mt-20 md:-mt-32">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image src={images[2]} alt="Gallery 3" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image src={images[3]} alt="Gallery 4" fill className="object-cover" />
            </div>
        </motion.div>

        {/* COLUMN 3 */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-6">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image src={images[4]} alt="Gallery 5" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image src={images[5]} alt="Gallery 6" fill className="object-cover" />
            </div>
        </motion.div>

      </div>

      {/* --- GRADIENT OVERLAY (নিচের দিকে ফেড আউট করার জন্য) --- */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

    </section>
  );
}