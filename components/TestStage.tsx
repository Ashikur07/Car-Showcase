"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { useState } from "react";
import { Model } from "./CarModel";

export default function TestStage() {
  // টেস্টিং স্টেট: বাটন চাপলে এটা true/false হবে
  const [isExploded, setIsExploded] = useState(false);

  return (
    <div className="h-screen w-full bg-slate-800 relative">
      
      {/* --- UI BUTTON (উপরে ভাসবে) --- */}
      <div className="absolute top-10 left-10 z-50 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
        <h1 className="text-white text-2xl font-bold mb-4">Mechanic Mode</h1>
        <button 
          onClick={() => setIsExploded(!isExploded)}
          className={`px-6 py-3 rounded-lg font-bold text-white transition-all ${
            isExploded ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isExploded ? "Reset Car 🔄" : "Explode Engine 💥"}
        </button>
      </div>

      {/* --- 3D SCENE --- */}
      <Canvas shadows camera={{ position: [5, 2, 8], fov: 40 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        
        <group position={[0, -0.5, 0]} scale={0.20}>
           {/* আমরা স্টেট-টা মডেলের কাছে পাঠিয়ে দিচ্ছি */}
           <Model exploded={isExploded} />
        </group>

        <ContactShadows resolution={1024} scale={50} blur={1} opacity={0.5} far={10} color="#000000" />
        <OrbitControls enableZoom={true} enableRotate={true} />
      </Canvas>

    </div>
  );
}