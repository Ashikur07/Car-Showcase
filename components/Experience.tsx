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
  const carRef = useRef<Group>(null);

  useGSAP(() => {
    if (!carRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // এখানে শুধু গাড়ির ঘোরানোর কাজ হবে
    // ইঞ্জিন বের হওয়ার কাজ CarModel.tsx নিজেই করবে

    // ধাপ ১: গাড়ি ঘুরবে এবং বামে যাবে
    tl.to(carRef.current.position, { x: -3 }, 0);
    tl.to(carRef.current.rotation, { y: Math.PI / 2 }, 0);

    // ধাপ ২: রিসেট
    tl.to(carRef.current.position, { x: 0 }, 1);
    tl.to(carRef.current.rotation, { y: 0 }, 1);

  }, { scope: carRef });

  return (
    <div className="h-screen w-full bg-slate-900">
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 45 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />

        <Suspense fallback={null}>
          <group ref={carRef} position={[0, -0.5, 0]} scale={0.20}>
            <Model />
          </group>
        </Suspense>

        <ContactShadows resolution={1024} scale={50} blur={1} opacity={0.5} far={10} color="#000000" />
        <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} />
      </Canvas>
    </div>
  );
}