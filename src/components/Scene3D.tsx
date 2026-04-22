"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function IcosahedronWireframe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.2, 1), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.3;
      meshRef.current.rotation.y = t * 0.08;
      meshRef.current.rotation.z = Math.cos(t * 0.12) * 0.1;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x = Math.sin(t * 0.15) * 0.3;
      edgesRef.current.rotation.y = t * 0.08;
      edgesRef.current.rotation.z = Math.cos(t * 0.12) * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial transparent opacity={0.02} color="#48cae4" />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edges}>
        <lineBasicMaterial color="#48cae4" transparent opacity={0.6} />
      </lineSegments>
    </group>
  );
}

function InnerSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * -0.2;
      meshRef.current.rotation.x = t * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.2, 2]} />
      <MeshDistortMaterial
        color="#48cae4"
        transparent
        opacity={0.08}
        distort={0.3}
        speed={2}
        roughness={0.2}
      />
    </mesh>
  );
}

function FloatingParticles({ count = 80 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02;
      pointsRef.current.rotation.x = Math.sin(t * 0.01) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#48cae4"
        size={0.02}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function OrbitRing({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ringRef.current) {
      ringRef.current.rotation.z = tilt;
      ringRef.current.rotation.y = t * speed;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.003, 8, 128]} />
      <meshBasicMaterial color="#48cae4" transparent opacity={0.15} />
    </mesh>
  );
}

function OrbitingDot({ radius, speed, offset, tilt }: { radius: number; speed: number; offset: number; tilt: number }) {
  const dotRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    if (dotRef.current) {
      dotRef.current.position.x = Math.cos(t) * radius;
      dotRef.current.position.z = Math.sin(t) * radius;
      dotRef.current.position.y = Math.sin(t) * Math.sin(tilt) * radius * 0.3;
    }
  });

  return (
    <mesh ref={dotRef}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color="#48cae4" />
    </mesh>
  );
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#48cae4" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#48cae4" />

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <IcosahedronWireframe />
        <InnerSphere />
      </Float>

      <OrbitRing radius={3.2} speed={0.1} tilt={0.3} />
      <OrbitRing radius={3.8} speed={-0.07} tilt={-0.5} />
      <OrbitRing radius={4.3} speed={0.05} tilt={0.8} />

      <OrbitingDot radius={3.2} speed={0.1} offset={0} tilt={0.3} />
      <OrbitingDot radius={3.8} speed={-0.07} offset={2} tilt={-0.5} />
      <OrbitingDot radius={4.3} speed={0.05} offset={4} tilt={0.8} />

      <FloatingParticles count={100} />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <HeroScene />
      </Canvas>
    </div>
  );
}
