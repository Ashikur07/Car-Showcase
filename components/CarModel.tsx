/*
Title: BMW M4 Widebody (Fixed Hierarchy)
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Mesh }
  materials: { [key: string]: THREE.Material }
}

// exploded প্রপস রিসিভ করছি
export function Model({ exploded, ...props }: any) {
  const { nodes, materials } = useGLTF('/models/car.glb') as unknown as GLTFResult
  
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004} position={[0, 4.614, 4.994]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_32.geometry} material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']} scale={14.746} />
      <mesh castShadow receiveShadow geometry={nodes.Object_35.geometry} material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']} position={[0, 0.424, 0]} />
      
      {/* 🔥 পরিবর্তন শুধু এখানে: ইঞ্জিন (Object_41) */}
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Object_41.geometry} 
        material={materials.bBMW_M4CompetitionG82TNR0_2021EngineA_Material1} 
        // যদি exploded হয়, দূরে যাবে [4, 2, 0], নাহলে নিজের জায়গায় [0, 0.444, 0]
        position={exploded ? [4, 2, 0] : [0, 0.444, 0]} 
        rotation={[Math.PI / 2, 0, 0]} 
        scale={4.822} 
      />
      
      {/* বাকি সব আগের মতো (কোনো লুপ নেই, তাই পজিশন ঠিক থাকবে) */}
      <mesh castShadow receiveShadow geometry={nodes.Object_44.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_47.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Carbon1_Material1} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_50.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha5A_Material1} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_53.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha9A_Material1} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <group position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822}>
        <mesh castShadow receiveShadow geometry={nodes.Object_56.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021InteriorA_Material1} />
        <mesh castShadow receiveShadow geometry={nodes.Object_58.geometry} material={materials.phong2} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Object_61.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_64.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_67.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha6A_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_70.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha7A_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_73.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha8A_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_76.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021BadgeA_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_79.geometry} material={materials.dark} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_82.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_85.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021LightA_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_88.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021ManufacturerPlateA_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <group position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822}>
        <mesh castShadow receiveShadow geometry={nodes.Object_91.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004} />
        <mesh castShadow receiveShadow geometry={nodes.Object_93.geometry} material={materials.glasswindshiled} />
      </group>
      <group position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822}>
        <mesh castShadow receiveShadow geometry={nodes.Object_96.geometry} material={materials.glasswindshiled} />
        <mesh castShadow receiveShadow geometry={nodes.Object_98.geometry} material={materials.red_glass} />
        <mesh castShadow receiveShadow geometry={nodes.Object_100.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Object_103.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_106.geometry} material={materials.emit} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_109.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021BadgeA_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh castShadow receiveShadow geometry={nodes.Object_112.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha9A_Material1} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_115.geometry} material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']} position={[0, 0.177, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_118.geometry} material={materials.glass} position={[0, 0.172, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_121.geometry} material={materials.wmit_red} position={[0, 0.172, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_124.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Base_Material1} position={[0, 0.172, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_127.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Base_Material1} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_130.geometry} material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_133.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021LightA_Material1} position={[0, 0.177, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_136.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Base_Material1} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_139.geometry} material={materials.dark} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_142.geometry} material={materials['Material.002']} rotation={[2.558, 0, Math.PI]} scale={0.553} />
      <mesh castShadow receiveShadow geometry={nodes.Object_167.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021PaintTNR_Material_004} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_170.geometry} material={materials.dark} position={[0, 0.424, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_173.geometry} material={materials['Material.002']} position={[0, 0, -13.784]} rotation={[2.558, 0, Math.PI]} scale={0.553} />
      <mesh castShadow receiveShadow geometry={nodes.Object_29.geometry} material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Object_38.geometry} material={materials['bBMW_M4CompetitionG82TNR0_2021Base_Material1.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Object_145.geometry} material={materials['Material.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Object_147.geometry} material={materials['disk.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Object_149.geometry} material={materials.main} />
      <mesh castShadow receiveShadow geometry={nodes.Object_151.geometry} material={materials.metalblack} />
      <mesh castShadow receiveShadow geometry={nodes.Object_153.geometry} material={materials.sidetyre} />
      <mesh castShadow receiveShadow geometry={nodes.Object_156.geometry} material={materials['Material.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Object_158.geometry} material={materials['disk.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Object_160.geometry} material={materials.main} />
      <mesh castShadow receiveShadow geometry={nodes.Object_162.geometry} material={materials.metalblack} />
      <mesh castShadow receiveShadow geometry={nodes.Object_164.geometry} material={materials.sidetyre} />
      <mesh castShadow receiveShadow geometry={nodes.Object_176.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/models/car.glb')