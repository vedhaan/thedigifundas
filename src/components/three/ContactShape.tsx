// src/components/three/ContactShape.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useRef, useState, useMemo } from "react";
import * as THREE from "three";

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.004;
    meshRef.current.rotation.x += (target.y * 0.5 - meshRef.current.rotation.x) * 0.04;
    meshRef.current.rotation.z += (-target.x * 0.4 - meshRef.current.rotation.z) * 0.04;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.1} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        scale={0.85}
        onPointerMove={(e) => {
          setTarget({ x: e.uv ? e.uv.x - 0.5 : 0, y: e.uv ? e.uv.y - 0.5 : 0 });
        }}
      >
        <torusKnotGeometry args={[1, 0.32, 180, 24, 2, 3]} />
        <meshStandardMaterial
          color="#FF8A00"
          emissive="#FF8A00"
          emissiveIntensity={0.12}
          roughness={0.5}
          metalness={0.25}
        />
      </mesh>
    </Float>
  );
}

function OrbitParticles() {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    return Array.from({ length: 24 }, () => {
      const radius = 2.1 + Math.random() * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      return {
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi),
        ] as [number, number, number],
        scale: 0.02 + Math.random() * 0.03,
      };
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0012;
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position} scale={p.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#FF8A00" : "#FFB347"}
            emissive={i % 2 === 0 ? "#FF8A00" : "#FFB347"}
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ContactShape() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 40 }}
      gl={{ alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 3]} intensity={0.9} color="#FFB347" />
      <directionalLight position={[-3, -2, 2]} intensity={0.35} color="#FF8A00" />
      <Suspense fallback={null}>
        <TorusKnot />
        <OrbitParticles />
      </Suspense>
    </Canvas>
  );
}