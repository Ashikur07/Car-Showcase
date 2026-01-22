"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// ইমেজের লিস্ট (৭ নম্বর ইমেজ যোগ করা হয়েছে)
const images = [
  "/Gallery/gallery-1.jpg",
  "/Gallery/gallery-2.jpeg", // এটা .jpeg ছিল
  "/Gallery/gallery-3.jpg",
  "/Gallery/gallery-4.jpg",
  "/Gallery/gallery-5.jpg",
  "/Gallery/gallery-6.jpg",
  "/Gallery/gallery-7.jpg", // 🔥 নতুন ৭ নম্বর ইমেজ
];

export default function Gallery() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // --- 🔥 PARALLAX LOGIC ---
  // ১. বাম পাশ (Col 1): নিচে নামবে (Positive Value)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]); 
  
  // ২. মাঝখান (Col 2): উপরে উঠবে (Negative Value)
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]); // ৩টা ইমেজ তাই মুভমেন্ট একটু বাড়ালাম
  
  // ৩. ডান পাশ (Col 3): নিচে নামবে (Positive Value)
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 500]); 

  return (
    <section 
        ref={containerRef} 
        className="relative min-h-[150vh] bg-[#0a0a0a] overflow-hidden"
    >
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 mb-10 text-center relative z-10">
        <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-oswald font-bold text-white uppercase tracking-tighter"
        >
            Pure <span className="text-red-600">Motion</span>
        </motion.h2>
        <p className="text-gray-400 mt-4 tracking-[0.5em] uppercase text-xs md:text-sm">
          Scroll to explore
        </p>
      </div>

      {/* --- PARALLAX GRID --- */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full">
        
        {/* COLUMN 1 (Side - Goes Down) */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-10 md:-mt-[150px]">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105">
                <Image src={images[0]} alt="Gallery 1" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105">
                <Image src={images[1]} alt="Gallery 2" fill className="object-cover" />
            </div>
        </motion.div>

        {/* COLUMN 2 (Middle - Goes UP) 🔥 ৩টা ইমেজ */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-10 mt-10 md:mt-[100px]">
            {/* Image 3 */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105">
                <Image src={images[2]} alt="Gallery 3" fill className="object-cover" />
            </div>
            {/* Image 4 */}
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105">
                <Image src={images[3]} alt="Gallery 4" fill className="object-cover" />
            </div>
            {/* Image 7 (New Addition to fill gap) */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105">
                <Image src={images[6]} alt="Gallery 7" fill className="object-cover" />
            </div>
        </motion.div>

        {/* COLUMN 3 (Side - Goes Down) */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-10 md:-mt-[150px]">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105">
                <Image src={images[4]} alt="Gallery 5" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105">
                <Image src={images[5]} alt="Gallery 6" fill className="object-cover" />
            </div>
        </motion.div>

      </div>

      {/* --- GRADIENT OVERLAY (Bottom) --- */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />

    </section>
  );
}