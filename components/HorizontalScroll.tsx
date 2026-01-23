"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// ডামি কার্ড ডাটা (তুমি চাইলে ইমেজ চেঞ্জ করতে পারো)
const cards = [
  {
    id: 1,
    title: "Aerodynamics",
    desc: "Cut through the air with M-specific mirrors and rear diffuser.",
    img: "/Gallery/gallery-1.jpg", // আগের গ্যালারি ইমেজ রিইউজ করছি
  },
  {
    id: 2,
    title: "Carbon Core",
    desc: "Lightweight construction for maximum agility and speed.",
    img: "/Gallery/gallery-2.jpeg",
  },
  {
    id: 3,
    title: "Track Mode",
    desc: "Deactivate all safety systems for pure, unfiltered driving.",
    img: "/Gallery/gallery-3.jpg",
  },
  {
    id: 4,
    title: "M Suspension",
    desc: "Adaptive suspension that reads the road 100 times per second.",
    img: "/Gallery/gallery-4.jpg",
  },
];

export default function HorizontalScroll() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // স্ক্রল লজিক: ১% থেকে -৭৫% পর্যন্ত বামে সরবে
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a]">
      
      {/* Sticky Container (এটা স্ক্রিনে আটকে থাকবে যতক্ষণ স্ক্রল শেষ না হয়) */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* টাইটেল (ফিক্সড থাকবে) */}
        <div className="absolute top-10 left-10 z-20">
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase opacity-20">
                M Capabilities
            </h2>
        </div>

        {/* মুভিং কন্টেইনার (Horizontal Motion) */}
        <motion.div style={{ x }} className="flex gap-10 pl-10 md:pl-20">
          
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#111] group"
            >
              {/* ইমেজ */}
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              
              {/* টেক্সট ওভারলে */}
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-3xl md:text-5xl font-oswald font-bold text-white uppercase mb-2">
                    {card.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base max-w-sm">
                    {card.desc}
                </p>
                
                {/* আইকনিক লাইন ডেকোরেশন */}
                <div className="w-full h-[1px] bg-white/20 mt-6" />
                <div className="flex gap-2 mt-4">
                    <div className="w-8 h-1 bg-sky-500" />
                    <div className="w-8 h-1 bg-blue-700" />
                    <div className="w-8 h-1 bg-red-600" />
                </div>
              </div>
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}