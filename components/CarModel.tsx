/*
Title: BMW M4 Widebody Test Version
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Mesh }
  materials: { [key: string]: THREE.Material }
}

// আমরা parent থেকে props নিচ্ছি: exploded (true/false)
export function Model({ exploded, ...props }: any) {
  const { nodes, materials } = useGLTF('/models/car.glb') as unknown as GLTFResult
  
  return (
    <group {...props} dispose={null}>
      
      {/* ------------------------------------------- */}
      {/* ১. ইঞ্জিন (Engine): লজিক বসানো হলো        */}
      {/* ------------------------------------------- */}
      <mesh 
        castShadow receiveShadow 
        geometry={nodes.Object_41.geometry} 
        material={materials.bBMW_M4CompetitionG82TNR0_2021EngineA_Material1} 
        // 👇 যদি exploded সত্য হয়, ডানে (x=5) এবং উপরে (y=2) যাবে
        position={exploded ? [5, 2, 0] : [0, 0.444, 0]} 
        rotation={[Math.PI / 2, 0, 0]} 
        scale={4.822} 
      />

      {/* ------------------------------------------- */}
      {/* ২. বাকি সব পার্টস (বডি, গ্লাস, ইন্টেরিয়র)  */}
      {/* ------------------------------------------- */}
      {/* আমরা লুপ চালিয়ে বাকি সব রেন্ডার করছি যাতে কোড ছোট থাকে */}
      {Object.entries(nodes).map(([name, node]) => {
        // ইঞ্জিন (Object_41) আমরা ওপরে ম্যানুয়ালি বসিয়েছি, তাই এখানে বাদ দেব
        if (name === 'Object_41') return null;
        
        // শুধু Mesh গুলো রেন্ডার করব
        if (node.isMesh) {
          return (
            <mesh
              key={name}
              castShadow receiveShadow
              geometry={node.geometry}
              material={node.material}
              position={node.position}
              rotation={node.rotation}
              scale={node.scale}
            />
          )
        }
        return null;
      })}
    </group>
  )
}

useGLTF.preload('/models/car.glb')