"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- স্পেশাল কাউন্টার কম্পোনেন্ট ---
// এটা নাম্বার ০ থেকে কাউন্ট করে বাড়াবে
const StatItem = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // স্ক্রিনে আসলে কাউন্ট শুরু হবে
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // ২ সেকেন্ড ধরে কাউন্ট হবে
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      // ফ্লোটিং নাম্বার বা বড় নাম্বারের জন্য অপটিমাইজেশন (Simple version)
      if (end > 100) {
         // বড় নাম্বার হলে ফাস্ট বাড়ানোর লজিক
         clearInterval(timer);
         let startBig = 0;
         const timerBig = setInterval(() => {
            startBig += 5; // ৫ করে বাড়বে
            if(startBig > end) {
                setCount(end);
                clearInterval(timerBig);
            } else {
                setCount(startBig);
            }
         }, 10);
      }
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <h4 className="text-5xl md:text-7xl font-oswald font-bold text-white mb-2">
        {value < 10 ? value.toFixed(1) : count}{suffix}
      </h4>
      <p className="text-gray-400 uppercase tracking-widest text-sm">{label}</p>
    </div>
  );
};

export default function Performance() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] py-20 overflow-hidden flex flex-col items-center justify-center">
      
      {/* --- BACKGROUND GLOW (লাল আভা) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* --- TITLE --- */}
      <div className="relative z-10 container mx-auto px-6 mb-12 md:mb-20 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase tracking-tight"
        >
          The Heart of <span className="text-red-600">The Beast</span>
        </motion.h2>
        <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-white/20 mt-4 mx-auto md:mx-0"
        />
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: ENGINE IMAGE */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
        >
            <Image 
                src="/engine.png" // তোমার ফাইলের নাম চেক করো
                alt="BMW S58 Engine"
                width={800}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
        </motion.div>

        {/* RIGHT: SPECS / COUNTERS */}
        <div className="flex flex-col gap-10 md:gap-16">
            <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed text-lg font-light">
                    Powered by the legendary <span className="text-white font-bold">S58 TwinPower Turbo</span> inline-6 engine. It’s not just an engine; it’s a masterpiece of engineering delivering instant throttle response and a symphony of power.
                </p>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-8 md:gap-12">
                <StatItem value={503} label="Horsepower" suffix=" HP" />
                <StatItem value={479} label="Lb-Ft Torque" />
                {/* 0-60 এর জন্য আমরা ম্যানুয়ালি টেক্সট বসাচ্ছি কারণ এটা ফ্লোট নাম্বার */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <h4 className="text-5xl md:text-7xl font-oswald font-bold text-white mb-2">3.8<span className="text-3xl">s</span></h4>
                    <p className="text-gray-400 uppercase tracking-widest text-sm">0-60 MPH</p>
                </motion.div>
                
                <StatItem value={6} label="Cylinders" />
            </div>
        </div>

      </div>

    </section>
  );
}