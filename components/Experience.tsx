"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Model } from "./CarModel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Group } from "three";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  // ১. গাড়িকে ধরার জন্য রেফারেন্স তৈরি করলাম
  const carRef = useRef<Group>(null);

  useGSAP(() => {
    // যদি গাড়ি লোড না হয়ে থাকে, তাহলে অপেক্ষা করবে
    if (!carRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: true, // 👉 ডিবাগ করার জন্য মার্কার অন রাখলাম (পরে মুছে দেব)
      },
    });

    // --- Animation Logic ---

    // সেকশন ১ -> ২: গাড়ি ৯০ ডিগ্রি ঘুরবে এবং বামে সরবে
    tl.to(carRef.current.rotation, {
      y: Math.PI / 2, // ৯০ ডিগ্রি
      duration: 1
    }, 0);

    tl.to(carRef.current.position, {
      x: -1.5, // বামে
      duration: 1
    }, 0);

    // সেকশন ২ -> ৩: গাড়ি উল্টো দিকে ঘুরবে
    tl.to(carRef.current.rotation, {
      y: 0, // আবার সোজা
      duration: 1
    }, 1);

    tl.to(carRef.current.position, {
      x: 0, // আবার মাঝখানে
      duration: 1
    }, 1);

  }, { scope: carRef }); // স্কোপ সেট করে দিলাম

  return (
    <div className="h-screen w-full bg-slate-900">
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 45 }}>
        
        <Environment preset="city" />
        <ambientLight intensity={0.5} />

        <Suspense fallback={null}>
          {/* ২. এই গ্রুপে ref বসালাম যাতে GSAP এটাকে ধরতে পারে */}
          <group ref={carRef} position={[0, -0.5, 0]} scale={0.20}>
            <Model />
          </group>
        </Suspense>

        <ContactShadows resolution={1024} scale={50} blur={1} opacity={0.5} far={10} color="#000000" />
        
        {/* ৩. মাউস কন্ট্রোল অন করে দিলাম (চেক করার জন্য) */}
        <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} />
        
      </Canvas>
    </div>
  );
}