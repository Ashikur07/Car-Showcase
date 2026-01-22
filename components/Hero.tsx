"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion"; // Variants টাইপ ইমপোর্ট করলাম
import { useRef } from "react";

// --- 🔥 SLOW CINEMATIC VARIANTS (Fixed) ---

// ১. টেক্সট মাস্ক
const maskReveal: Variants = {
  hidden: { y: "100%" },
  visible: { 
    y: "0%",
    transition: { 
      duration: 2.2, 
      // 👇 এখানে ফিক্স করা হয়েছে: 'as [number, number, number, number]' যোগ করা হয়েছে
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number], 
    }
  },
};

// ২. গাড়ি ব্লার ইফেক্ট
const carCinematic: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 1.1, 
    filter: "blur(15px)" 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { 
      duration: 2.5, 
      // 👇 এখানেও ফিক্স করা হয়েছে
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.4 
    }
  },
};

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const carY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center"
    >
      
      {/* --- BACKGROUND TEXT --- */}
      <motion.div 
        style={{ y: textY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center"
      >
        <div className="overflow-hidden">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={maskReveal}
              className="font-oswald font-bold text-[16vw] leading-none text-white/5 tracking-tighter select-none whitespace-nowrap"
            >
              M4 COMPETITION
            </motion.h1>
        </div>
      </motion.div>

      {/* --- HERO CAR IMAGE --- */}
      <motion.div 
        style={{ y: carY }}
        className="relative z-10 w-full max-w-5xl px-4 mt-4"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={carCinematic}
        >
          <Image
            src="/hero-car.png"
            alt="BMW M4 Competition"
            width={1200}
            height={600}
            className="w-full h-auto drop-shadow-2xl object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      {/* --- BOTTOM DETAILS (Slow Fade In) --- */}
      <div className="absolute bottom-10 left-10 z-20 flex flex-col overflow-hidden">
         <div className="overflow-hidden">
            <motion.h3 
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 1.5, duration: 1.5, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
              className="font-oswald text-xl text-red-600 tracking-widest uppercase"
            >
              The Ultimate
            </motion.h3>
         </div>
         <div className="overflow-hidden">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 1.8, duration: 1.5, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
              className="text-gray-400 text-sm"
            >
              Driving Machine
            </motion.p>
         </div>
      </div>

    </section>
  );
}