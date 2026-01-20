"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Model } from "./CarModel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Group, Mesh } from "three";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const carRef = useRef<Group>(null);
  const engineRef = useRef<Mesh>(null); // ইঞ্জিনের জন্য আলাদা রেফারেন্স

  useGSAP(() => {
    if (!carRef.current || !engineRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // --- MAGIC ANIMATION START ---

    // ধাপ ১: গাড়ি বামে যাবে, ইঞ্জিন ডানে বেরিয়ে আসবে
    
    // ১. পুরো গাড়ি ঘুরবে এবং বামে সরবে
    tl.to(carRef.current.rotation, { y: Math.PI / 2 }, 0);
    tl.to(carRef.current.position, { x: -2 }, 0);

    // ২. ইঞ্জিন শরীর থেকে বেরিয়ে আসবে (Explosion!) 💥
    tl.to(engineRef.current.position, {
      x: 5,   // ডানে সরে যাবে
      y: 2,   // একটু উপরে উঠবে
      z: 2,   // সামনে আসবে
      duration: 1
    }, 0); // '0' মানে গাড়ির সাথে সাথেই বের হবে

    // ধাপ ২: ইঞ্জিন আবার শরীরে ঢুকে যাবে (Reset)
    tl.to(carRef.current.rotation, { y: 0 }, 1);
    tl.to(carRef.current.position, { x: 0 }, 1);
    
    // ইঞ্জিন রিসেট (আগের জায়গায় ফিরে যাবে)
    tl.to(engineRef.current.position, {
      x: 0, // অরিজিনাল পজিশন (রিলেটিভ)
      y: 0.444, // অরিজিনাল Y (CarModel ফাইলে যা ছিল)
      z: 0,
      duration: 1
    }, 1);

  }, { scope: carRef });

  return (
    <div className="h-screen w-full bg-slate-900">
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 45 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />

        <Suspense fallback={null}>
          <group ref={carRef} position={[0, -0.5, 0]} scale={0.20}>
            {/* আমরা engineRef টা প্রপস হিসেবে পাঠিয়ে দিচ্ছি */}
            <Model engineRef={engineRef} />
          </group>
        </Suspense>

        <ContactShadows resolution={1024} scale={50} blur={1} opacity={0.5} far={10} color="#000000" />
        <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} />
      </Canvas>
    </div>
  );
}