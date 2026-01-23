"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // --- 1. Fake Loading Logic ---
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; // স্পিড কন্ট্রোল
      });
    }, 20); // প্রতি ২০ms এ ১% বাড়বে (মোট ২ সেকেন্ড লাগবে)

    // --- 2. Remove Preloader after loading ---
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // ২.৫ সেকেন্ড পর গায়েব হবে

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // বডি স্ক্রল অফ করা (যখন লোডিং চলছে)
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }} // উপরের দিকে ফেইড হয়ে যাবে
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white"
        >
          
          {/* --- LOGO ANIMATION --- */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="mb-8"
          >
            {/* BMW M Logo Text */}
            <h1 className="text-6xl font-oswald font-bold tracking-tighter italic">
              <span className="text-white">///</span> M
            </h1>
          </motion.div>

          {/* --- PROGRESS BAR --- */}
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
            <motion.div 
                className="h-full bg-red-600"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
            />
          </div>

          {/* --- PERCENTAGE TEXT --- */}
          <div className="mt-4 font-mono text-sm text-gray-400">
            LOADING {progress}%
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}