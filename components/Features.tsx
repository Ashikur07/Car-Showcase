"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Reusable Card Component
const FeatureCard = ({ 
    children, 
    className, 
    delay = 0 
}: { 
    children: React.ReactNode, 
    className?: string, 
    delay?: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] group ${className}`}
    >
        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
        {children}
    </motion.div>
  );
};

export default function Features() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* HEADER */}
      <div className="container mx-auto px-6 mb-16 text-center md:text-left">
        <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight"
        >
            Engineering <span className="text-red-600">Mastery</span>
        </motion.h2>
        <div className="h-1 w-20 bg-white/20 mt-4 md:ml-1 rounded-full" />
      </div>

      {/* --- BENTO GRID LAYOUT --- */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
        
        {/* CARD 1: LASER LIGHTS (বড় ইমেজ - বাম পাশে) */}
        <FeatureCard className="md:col-span-2 md:row-span-2 relative min-h-[300px]">
            <Image 
                src="/feature-light.jpg" 
                alt="BMW Laser Light" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold font-oswald uppercase mb-2">Iconic Glow</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                    Adaptive BMW Laserlight with yellow icons, inspired by GT racing cars, illuminating the dark up to 650m.
                </p>
            </div>
        </FeatureCard>

        {/* CARD 2: CARBON BRAKES (ছোট ইমেজ - উপরে ডানে) */}
        <FeatureCard className="relative min-h-[250px]" delay={0.2}>
            <Image 
                src="/feature-brake.jpg" 
                alt="Carbon Ceramic Brakes" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-xl font-bold font-oswald uppercase text-red-500">M Carbon Ceramic</h3>
                <p className="text-gray-400 text-xs mt-1">Ultimate stopping power.</p>
            </div>
        </FeatureCard>

        {/* CARD 3: EXHAUST SYSTEM (🔥 নতুন - ৩য় ইমেজ এখানে বসানো হলো) */}
        <FeatureCard className="relative min-h-[250px]" delay={0.3}>
            <Image 
                src="/feature-rear.jpg" // তোমার ৩য় ইমেজের নাম চেক করো
                alt="M Sport Exhaust" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-xl font-bold font-oswald uppercase">M Sport Exhaust</h3>
                <p className="text-gray-400 text-xs mt-1">Quad tailpipes with active sound.</p>
            </div>
        </FeatureCard>

        {/* CARD 4: DRIFT ANALYZER (নিচে ডানে - গ্রাফিক্স) */}
        <FeatureCard className="md:col-span-2 relative min-h-[250px] flex items-center bg-gradient-to-r from-[#151515] to-[#0f0f0f]" delay={0.4}>
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 w-full z-20">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-600 w-2 h-2 rounded-full animate-pulse" />
                        <h3 className="text-xl font-bold font-oswald uppercase">M Drift Analyzer</h3>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Records the duration, distance, and angle of your latest drift. Are you ready to beat your high score?
                    </p>
                </div>
                {/* Visual Representation (Graph) */}
                <div className="w-full md:w-1/3 h-16 flex items-end gap-1 opacity-50">
                    {[40, 60, 30, 80, 50, 90, 70, 40].map((h, i) => (
                        <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                            className="w-full bg-red-600/50 rounded-t-sm" 
                        />
                    ))}
                </div>
            </div>
        </FeatureCard>

      </div>
    </section>
  );
}