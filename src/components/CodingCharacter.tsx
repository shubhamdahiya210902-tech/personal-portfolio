import { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';

// --- Animated Matrix Screen Component ---
function MatrixScreen({ color }: { color: string }) {
  const textRef = useRef<THREE.Group>(null!);
  const columns = useMemo(() => Array.from({ length: 6 }, (_, i) => ({
    x: -0.25 + (i * 0.1),
    speed: 0.7 + i * 0.22,
    chars: Array.from({ length: 8 }, (_, j) => ((i + j * 3) % 10).toString()).join('\n')
  })), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (textRef.current && textRef.current.children.length === columns.length) {
      textRef.current.children.forEach((child, i) => {
        child.position.y = ((t * columns[i].speed) % 1) - 0.5;
      });
    }
  });

  return (
    <group ref={textRef} position={[0, 0, 0.01]}>
      {columns.map((col, i) => (
        <Text key={i} position={[col.x, 0, 0]} fontSize={0.04} color={color} anchorX="center" anchorY="middle">
          {col.chars}
        </Text>
      ))}
    </group>
  );
}

function HumanBoy({ isAngry, onHover, onLeave }: { isAngry: boolean, onHover: () => void, onLeave: () => void }) {
  const mainGlow = isAngry ? "#ff3333" : "#4ade80";
  const hoodieColor = "#0f0f0f";
  const jeansColor = "#1e3a8a";
  const skinColor = "#d4a373";

  const headRef = useRef<THREE.Group>(null!);
  const leftArmRef = useRef<THREE.Mesh>(null!);
  const rightArmRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (headRef.current) {
        headRef.current.position.y = 0.85 + Math.sin(t * 1.5) * 0.005;
    }
    
    if (isAngry) {
      leftArmRef.current.rotation.x = 1.9 + Math.sin(t * 60) * 0.1;
      rightArmRef.current.rotation.x = 1.9 + Math.cos(t * 60) * 0.1;
    } else {
      leftArmRef.current.rotation.x = 1.85;
      rightArmRef.current.rotation.x = 1.85;
    }
  });

  return (
    <group 
      position={[0, 0.7, 0.35]} 
      onPointerOver={(e) => { e.stopPropagation(); onHover(); }}
      onPointerOut={() => onLeave()}
    >
      {/* Legs - Blue Jeans */}
      <mesh position={[-0.15, -0.3, 0]}><capsuleGeometry args={[0.07, 0.5]} /><meshStandardMaterial color={jeansColor} /></mesh>
      <mesh position={[0.15, -0.3, 0]}><capsuleGeometry args={[0.07, 0.5]} /><meshStandardMaterial color={jeansColor} /></mesh>
      
      {/* Shoes */}
      <mesh position={[-0.15, -0.6, 0.05]}><boxGeometry args={[0.18, 0.1, 0.3]} /><meshStandardMaterial color="#ffffff" /></mesh>
      <mesh position={[0.15, -0.6, 0.05]}><boxGeometry args={[0.18, 0.1, 0.3]} /><meshStandardMaterial color="#ffffff" /></mesh>

      {/* Torso - Black Hoodie (Scaled correctly) */}
      <mesh castShadow position={[0, 0.25, 0]}><capsuleGeometry args={[0.2, 0.45]} /><meshStandardMaterial color={hoodieColor} roughness={1} /></mesh>
      
      {/* Arms & Hands (Directly on table level) */}
      <group>
         <mesh position={[-0.25, 0.3, -0.1]} rotation={[1.8, 0, 0.2]} ref={leftArmRef}><capsuleGeometry args={[0.04, 0.5]} /><meshStandardMaterial color={hoodieColor} /></mesh>
         <mesh position={[0.25, 0.3, -0.1]} rotation={[1.8, 0, -0.2]} ref={rightArmRef}><capsuleGeometry args={[0.04, 0.5]} /><meshStandardMaterial color={hoodieColor} /></mesh>
         {/* Hands on Keys */}
         <mesh position={[-0.2, 0.1, -0.55]}><sphereGeometry args={[0.05]} /><meshStandardMaterial color={skinColor} /></mesh>
         <mesh position={[0.2, 0.1, -0.55]}><sphereGeometry args={[0.05]} /><meshStandardMaterial color={skinColor} /></mesh>
      </group>

      {/* Head Area (Elevated and Visible) */}
      <group ref={headRef} position={[0, 0.85, 0]} rotation={[0.4, 0, 0]}>
        <mesh castShadow><sphereGeometry args={[0.22, 32, 32]} /><meshStandardMaterial color={skinColor} /></mesh>
        <mesh position={[0, 0.05, 0]}><sphereGeometry args={[0.23, 16, 16]} /><meshStandardMaterial color={hoodieColor} /></mesh>
        <mesh rotation={[0.2, 0, 0]}><torusGeometry args={[0.25, 0.04, 16, 32]} /><meshStandardMaterial color="#000" /></mesh>
        <mesh rotation={[0.2, 0, 0]}><torusGeometry args={[0.26, 0.01, 16, 64]} /><meshBasicMaterial color={mainGlow} /></mesh>
      </group>
    </group>
  );
}

function RoomScene({ isAngry, setIsAngry }: { isAngry: boolean, setIsAngry: (v: boolean) => void }) {
  const mainGlow = isAngry ? "#ff3333" : "#4ade80";

  return (
    <group position={[0, -1, 0]}>
      {/* Floor */}
      <mesh receiveShadow position={[0, -0.05, 0]}><boxGeometry args={[10, 0.1, 10]} /><meshStandardMaterial color="#050505" /></mesh>
      
      {/* Walls */}
      <mesh position={[-5, 2.5, 0]}><boxGeometry args={[0.1, 5, 10]} /><meshStandardMaterial color="#080808" /></mesh>
      <mesh position={[0, 2.5, -5]}><boxGeometry args={[10, 5, 0.1]} /><meshStandardMaterial color="#080808" /></mesh>

      {/* Desk */}
      <group position={[0, 0.75, -0.5]}>
        <mesh castShadow receiveShadow><boxGeometry args={[3.5, 0.08, 1.4]} /><meshStandardMaterial color="#111" /></mesh>
        {/* Laptop (Centered) */}
        <group position={[0, 0.05, -0.1]}>
          <mesh><boxGeometry args={[0.8, 0.02, 0.6]} /><meshStandardMaterial color="#333" /></mesh>
          <mesh position={[0, 0.3, -0.3]} rotation={[0.4, 0, 0]}><boxGeometry args={[0.8, 0.6, 0.02]} /><meshStandardMaterial color="#222" /></mesh>
          <mesh position={[0, 0.3, -0.28]} rotation={[0.4, 0, 0]}>
            <planeGeometry args={[0.75, 0.55]} /><meshBasicMaterial color="#000" />
            <MatrixScreen color={mainGlow} />
          </mesh>
          <pointLight position={[0, 0.2, 0.3]} intensity={4} color={mainGlow} distance={4} />
        </group>
      </group>

      <HumanBoy isAngry={isAngry} onHover={() => setIsAngry(true)} onLeave={() => setIsAngry(false)} />

      <Stars radius={100} depth={50} count={8000} factor={6} saturation={0} fade speed={1.5} />
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.5} />
    </group>
  );
}

export default function CodingCharacter() {
  const [isAngry, setIsAngry] = useState(false);

  return (
    <div className="relative h-[380px] w-full overflow-hidden sm:h-[460px] lg:h-[520px]" aria-label="Interactive 3D coding scene">
      <Canvas shadows dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }} camera={{ position: [5, 4, 6], fov: 32 }}>
        <RoomScene isAngry={isAngry} setIsAngry={setIsAngry} />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2.2} />
        <Environment preset="night" />
      </Canvas>
      {isAngry && (
        <div className="absolute left-1/2 top-6 z-50 -translate-x-1/2 rounded-md border border-red-500 bg-red-950/30 px-4 py-1.5 font-mono text-[10px] text-red-500 animate-pulse pointer-events-none">
          DND: ARCHITECT_BUSY
        </div>
      )}
    </div>
  );
}
