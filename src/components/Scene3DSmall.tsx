"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function MiniGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => new THREE.OctahedronGeometry(1.4, 0), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.15;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x = t * 0.2;
      edgesRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial transparent opacity={0.03} color="#48cae4" />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edges}>
        <lineBasicMaterial color="#48cae4" transparent opacity={0.4} />
      </lineSegments>
    </group>
  );
}

function SmallParticles({ count = 30 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#48cae4" size={0.015} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export default function Scene3DSmall() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent", height: "300px" }}
    >
      <ambientLight intensity={0.1} />
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <MiniGeometry />
      </Float>
      <SmallParticles />
    </Canvas>
  );
}
