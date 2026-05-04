"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  RoundedBox,
  OrbitControls,
  Environment,
  Float,
  Sphere,
  Line,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(600);
    for (let i = 0; i < 600; i += 3) {
      arr[i] = (Math.random() - 0.5) * 16;
      arr[i + 1] = (Math.random() - 0.5) * 16;
      arr[i + 2] = (Math.random() - 0.5) * 16;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#5B5BFF"
        size={0.04}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </Points>
  );
}

function WireGlobe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -3]}>
      <sphereGeometry args={[4, 20, 20]} />
      <meshBasicMaterial
        color="#5B5BFF"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  );
}

function LaptopScreen() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
      meshRef.current.rotation.x =
        Math.cos(state.clock.elapsedTime * 0.2) * 0.04;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Laptop body */}
      <RoundedBox args={[3.2, 0.12, 2.2]} radius={0.06} position={[0, -0.06, 0.1]}>
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </RoundedBox>

      {/* Screen panel */}
      <group position={[0, 1.05, -0.88]} rotation={[0.15, 0, 0]}>
        <RoundedBox args={[3.2, 2.0, 0.06]} radius={0.06}>
          <meshStandardMaterial color="#0d0d1a" metalness={0.8} roughness={0.15} />
        </RoundedBox>
        {/* Screen display */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[2.9, 1.75]} />
          <meshBasicMaterial color="#0a0a20" />
        </mesh>

        {/* Dashboard UI elements */}
        {[[-0.9, 0.55], [-0.3, 0.55], [0.3, 0.55], [0.9, 0.55]].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0.06]}>
            <planeGeometry args={[0.5, 0.25]} />
            <meshBasicMaterial color={["#5B5BFF", "#00E5FF", "#22D3A0", "#8B7CFF"][i]} />
          </mesh>
        ))}

        {/* Chart bars */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <mesh key={`bar-${i}`} position={[-1.05 + i * 0.42, -0.3, 0.06]}>
            <planeGeometry args={[0.28, [0.4, 0.65, 0.5, 0.8, 0.55, 0.7][i]]} />
            <meshBasicMaterial color="#5B5BFF" transparent opacity={0.8} />
          </mesh>
        ))}

        {/* Status dots */}
        {[0, 1, 2].map((i) => (
          <mesh key={`dot-${i}`} position={[0.4 + i * 0.35, -0.55, 0.06]}>
            <circleGeometry args={[0.05, 16]} />
            <meshBasicMaterial color={["#22D3A0", "#22D3A0", "#FF6B6B"][i]} />
          </mesh>
        ))}
      </group>

      {/* Apple-like notch area */}
      <mesh position={[0, 2.09, -0.88]}>
        <circleGeometry args={[0.05, 16]} />
        <meshBasicMaterial color="#2a2a3e" />
      </mesh>
    </group>
  );
}

interface OrbitingScreenProps {
  angle: number;
  radius: number;
  speed: number;
  height: number;
  color: string;
  w?: number;
  h?: number;
  vertical?: boolean;
}

function OrbitingScreen({
  angle,
  radius,
  speed,
  height,
  color,
  w = 1.2,
  h = 0.75,
  vertical = false,
}: OrbitingScreenProps) {
  const ref = useRef<THREE.Group>(null);
  const lineStart = useRef(new THREE.Vector3());
  const lineEnd = new THREE.Vector3(0, 0, 0);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + angle;
      const x = Math.cos(t) * radius;
      const z = Math.sin(t) * radius;
      ref.current.position.set(x, height, z);
      ref.current.rotation.y = -t;
      lineStart.current.set(x, height, z);
    }
  });

  return (
    <group ref={ref}>
      {/* Bezel */}
      <RoundedBox
        args={[w + 0.08, h + 0.08, 0.04]}
        radius={0.03}
        rotation={vertical ? [0, 0, Math.PI / 2] : [0, 0, 0]}
      >
        <meshStandardMaterial color="#111128" metalness={0.8} roughness={0.2} />
      </RoundedBox>
      {/* Screen */}
      <mesh position={[0, 0, 0.025]} rotation={vertical ? [0, 0, Math.PI / 2] : [0, 0, 0]}>
        <planeGeometry args={[w - 0.06, h - 0.06]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>
      {/* Glow */}
      <pointLight color={color} intensity={0.4} distance={2} />
    </group>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
  });

  const screens = [
    { angle: 0, radius: 2.8, height: 0.8 },
    { angle: 1.05, radius: 2.4, height: -0.4 },
    { angle: 2.1, radius: 3.0, height: 0.5 },
    { angle: 3.15, radius: 2.6, height: -0.6 },
    { angle: 4.2, radius: 2.8, height: 0.2 },
    { angle: 5.25, radius: 2.5, height: 0.9 },
  ];

  return (
    <group ref={linesRef}>
      {screens.map((s, i) => {
        const t = time.current * 0.3 + s.angle;
        const x = Math.cos(t) * s.radius;
        const z = Math.sin(t) * s.radius;
        const points: [number, number, number][] = [
          [0, 0, 0],
          [x * 0.5, s.height * 0.5, z * 0.5],
          [x, s.height, z],
        ];
        return (
          <Line
            key={i}
            points={points}
            color="#5B5BFF"
            lineWidth={1}
            transparent
            opacity={0.3}
            dashed
            dashSize={0.15}
            gapSize={0.1}
          />
        );
      })}
    </group>
  );
}

function SceneContent({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      const targetX = (mouseY / window.innerHeight - 0.5) * 0.15;
      const targetY = (mouseX / window.innerWidth - 0.5) * 0.15;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
    }
  });

  const screenConfigs: OrbitingScreenProps[] = [
    { angle: 0, radius: 2.8, speed: 0.18, height: 0.8, color: "#FF6B6B", vertical: true, w: 0.7, h: 1.2 },
    { angle: 1.05, radius: 2.4, speed: 0.14, height: -0.4, color: "#5B5BFF" },
    { angle: 2.1, radius: 3.0, speed: 0.22, height: 0.5, color: "#22D3A0" },
    { angle: 3.15, radius: 2.6, speed: 0.16, height: -0.6, color: "#00E5FF", w: 1.5, h: 0.85 },
    { angle: 4.2, radius: 2.8, speed: 0.2, height: 0.2, color: "#8B7CFF" },
    { angle: 5.25, radius: 2.5, speed: 0.15, height: 0.9, color: "#F59E0B", w: 0.8, h: 0.55 },
  ];

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, 2, 2]} intensity={2} color="#5B5BFF" distance={8} />
      <pointLight position={[3, -1, 1]} intensity={1.5} color="#00E5FF" distance={6} />

      <WireGlobe />
      <ParticleField />

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <LaptopScreen />
      </Float>

      <ConnectionLines />

      {screenConfigs.map((cfg, i) => (
        <OrbitingScreen key={i} {...cfg} />
      ))}
    </group>
  );
}

interface HeroSceneProps {
  mouseX: number;
  mouseY: number;
}

export default function HeroScene({ mouseX, mouseY }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 1, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      aria-label="3D visualization of Recoda Intelligence controlling multiple screens"
      role="img"
    >
      <Suspense fallback={null}>
        <SceneContent mouseX={mouseX} mouseY={mouseY} />
      </Suspense>
    </Canvas>
  );
}
