"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./CarModel"; // আমাদের গাড়ির কম্পোনেন্ট

export default function Experience() {
  return (
    <div className="h-screen w-full bg-slate-900">
      <Canvas shadows camera={{ position: [4, 2, 5], fov: 50 }}>
        {/* লাইটিং এবং পরিবেশ */}
        <Environment preset="city" />
        <ambientLight intensity={0.5} />

        {/* লোডিং এর সময় যেন ক্র্যাশ না করে */}
        <Suspense fallback={null}>
          <Model scale={1.5} position={[0, -0.5, 0]} /> 
        </Suspense>

        {/* গাড়ির নিচে ছায়া */}
        <ContactShadows resolution={1024} scale={50} blur={1} opacity={0.5} far={10} color="#000000" />

        {/* মাউস দিয়ে ঘোরানোর কন্ট্রোল */}
        <OrbitControls enableZoom={true} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}