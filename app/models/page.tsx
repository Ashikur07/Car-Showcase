"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- ১. ২০টি BMW গাড়ির ডাটাবেস (রিয়েল ইমেজ লিংক) ---
const carData = [
  // --- COUPE ---
  { id: 1, name: "BMW M4 Competition", category: "Coupe", power: "503 HP", price: "$79,000", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, name: "BMW M2 Coupe", category: "Coupe", power: "453 HP", price: "$63,200", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "BMW M8 Competition", category: "Coupe", power: "617 HP", price: "$138,800", image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=2069&auto=format&fit=crop" },
  { id: 4, name: "BMW i4 M50", category: "Coupe", power: "536 HP", price: "$69,700", image: "https://images.unsplash.com/photo-1658422312683-195f190623d6?q=80&w=2071&auto=format&fit=crop" },
  { id: 5, name: "BMW 4 Series", category: "Coupe", power: "382 HP", price: "$49,900", image: "https://images.unsplash.com/photo-1619362280286-f1f8fd503244?q=80&w=1974&auto=format&fit=crop" },
  { id: 6, name: "BMW M4 CSL", category: "Coupe", power: "543 HP", price: "$139,900", image: "https://images.unsplash.com/photo-1662581871665-f226cc124b43?q=80&w=2070&auto=format&fit=crop" },

  // --- SEDAN ---
  { id: 7, name: "BMW M3 Competition", category: "Sedan", power: "503 HP", price: "$80,200", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop" },
  { id: 8, name: "BMW M5 CS", category: "Sedan", power: "627 HP", price: "$142,000", image: "https://images.unsplash.com/photo-1621257077695-1f6b5b597c5e?q=80&w=2070&auto=format&fit=crop" },
  { id: 9, name: "BMW 3 Series", category: "Sedan", power: "382 HP", price: "$44,500", image: "https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=2070&auto=format&fit=crop" },
  { id: 10, name: "BMW 5 Series", category: "Sedan", power: "523 HP", price: "$57,900", image: "https://images.unsplash.com/photo-1580273916550-e323be2ebdd4?q=80&w=2070&auto=format&fit=crop" },
  { id: 11, name: "BMW 7 Series", category: "Sedan", power: "536 HP", price: "$96,400", image: "https://images.unsplash.com/photo-1556189250-72ba954e96d5?q=80&w=2070&auto=format&fit=crop" },
  { id: 12, name: "BMW i7 M70", category: "Sedan", power: "650 HP", price: "$168,500", image: "https://images.unsplash.com/photo-1688647781033-b24844391392?q=80&w=2070&auto=format&fit=crop" },

  // --- SUV ---
  { id: 13, name: "BMW X5 M", category: "SUV", power: "600 HP", price: "$122,300", image: "https://images.unsplash.com/photo-1600712242805-5f78671d24da?q=80&w=2070&auto=format&fit=crop" },
  { id: 14, name: "BMW X6 M", category: "SUV", power: "617 HP", price: "$127,200", image: "https://images.unsplash.com/photo-1632757275095-21d428795d38?q=80&w=2070&auto=format&fit=crop" },
  { id: 15, name: "BMW XM", category: "SUV", power: "738 HP", price: "$159,000", image: "https://images.unsplash.com/photo-1674507664673-d1446b38c11e?q=80&w=1932&auto=format&fit=crop" },
  { id: 16, name: "BMW X3 M", category: "SUV", power: "473 HP", price: "$75,500", image: "https://images.unsplash.com/photo-1631557929878-8386345d1b71?q=80&w=1974&auto=format&fit=crop" },
  { id: 17, name: "BMW X7 M60i", category: "SUV", power: "523 HP", price: "$108,700", image: "https://images.unsplash.com/photo-1678788910049-741bd8222b46?q=80&w=2070&auto=format&fit=crop" },

  // --- CONVERTIBLE / OTHERS ---
  { id: 18, name: "BMW Z4 M40i", category: "Convertible", power: "382 HP", price: "$66,300", image: "https://images.unsplash.com/photo-1594979146197-0808e0105342?q=80&w=2069&auto=format&fit=crop" },
  { id: 19, name: "BMW 8 Convertible", category: "Convertible", power: "523 HP", price: "$100,500", image: "https://images.unsplash.com/photo-1616423664037-2d4df5589139?q=80&w=2070&auto=format&fit=crop" },
  { id: 20, name: "BMW M4 Convertible", category: "Convertible", power: "503 HP", price: "$89,700", image: "https://images.unsplash.com/photo-1658145293297-c88c7f763920?q=80&w=2070&auto=format&fit=crop" },
];

const categories = ["All", "Coupe", "Sedan", "SUV", "Convertible"];

export default function ModelsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCars = activeCategory === "All" 
    ? carData 
    : carData.filter(car => car.category === activeCategory);

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-20">
      <Navbar />

      {/* --- HEADER SECTION --- */}
      <section className="relative container mx-auto px-6 mb-16 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Fleet</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto tracking-wide">
            Explore the complete range of high-performance driving machines. 
            From the track-ready M Series to the luxury X Series.
            </p>
        </motion.div>

        {/* --- FILTER BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full border text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300
                ${activeCategory === cat 
                    ? "bg-red-600 border-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-105" 
                    : "border-white/10 text-gray-400 hover:border-white hover:text-white bg-[#111]"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- CAR GRID --- */}
      <motion.div 
        layout 
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredCars.map((car) => (
            <motion.div
              layout
              key={car.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative h-[450px] bg-[#111] rounded-[2rem] overflow-hidden border border-white/5 hover:border-red-600/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Image Area */}
              <div className="absolute inset-0 h-full w-full">
                <Image 
                    src={car.image} 
                    alt={car.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                />
                {/* Gradient Overlay (Bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-white/10 text-white">
                    {car.category}
                </span>
              </div>

              {/* Content (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-oswald font-bold uppercase text-white mb-2 leading-none">
                    {car.name}
                </h3>
                
                {/* Specs (Hidden by default, shows on hover) */}
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    <div className="flex items-center gap-6 text-gray-300 text-sm mt-4 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 uppercase tracking-wider">Power</span>
                            <span className="font-bold text-white">{car.power}</span>
                        </div>
                        <div className="w-[1px] h-8 bg-white/20"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 uppercase tracking-wider">0-60 mph</span>
                            <span className="font-bold text-white">3.2s</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-2">
                    <p className="text-lg font-bold text-gray-200">{car.price}</p>
                    <button className="text-red-500 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2 group/btn">
                        Build Now <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Footer />
    </main>
  );
}