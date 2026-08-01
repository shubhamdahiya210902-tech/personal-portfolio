import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

type NodeSpec = {
  color: string;
  emissive: string;
  position: [number, number, number];
  shape: 'sphere' | 'box' | 'octahedron' | 'database';
};

const nodes: NodeSpec[] = [
  { color: '#4ade80', emissive: '#1f8f4b', position: [2.25, 0.95, 0.2], shape: 'sphere' },
  { color: '#38bdf8', emissive: '#0e7490', position: [-2.05, 0.7, -0.25], shape: 'box' },
  { color: '#f59e0b', emissive: '#92400e', position: [1.45, -1.42, -0.15], shape: 'database' },
  { color: '#a7f3d0', emissive: '#047857', position: [-1.72, -1.08, 0.3], shape: 'octahedron' },
];

function ConnectionLines() {
  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    nodes.forEach((node) => {
      points.push(new THREE.Vector3(0, 0, 0));
      points.push(new THREE.Vector3(...node.position));
    });
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#38bdf8" transparent opacity={0.28} />
    </lineSegments>
  );
}

function NodeMesh({ node }: { node: NodeSpec }) {
  return (
    <group position={node.position}>
      <mesh>
        {node.shape === 'sphere' && <sphereGeometry args={[0.24, 24, 24]} />}
        {node.shape === 'box' && <boxGeometry args={[0.42, 0.42, 0.42]} />}
        {node.shape === 'octahedron' && <octahedronGeometry args={[0.32, 0]} />}
        {node.shape === 'database' && <cylinderGeometry args={[0.28, 0.28, 0.42, 24]} />}
        <meshStandardMaterial color={node.color} emissive={node.emissive} emissiveIntensity={0.45} roughness={0.28} metalness={0.25} />
      </mesh>
      <mesh scale={1.55}>
        <sphereGeometry args={[0.24, 20, 20]} />
        <meshBasicMaterial color={node.color} transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function CoreSystem() {
  const coreRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.45;
      coreRef.current.rotation.x = Math.sin(t * 0.5) * 0.18;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.z = t * 0.22;
      orbitRef.current.rotation.y = t * 0.18;
    }
  });

  return (
    <group>
      <group ref={coreRef}>
        <mesh>
          <icosahedronGeometry args={[0.78, 1]} />
          <meshStandardMaterial color="#0f3d28" emissive="#22c55e" emissiveIntensity={0.32} roughness={0.2} metalness={0.48} />
        </mesh>
        <mesh scale={1.18}>
          <icosahedronGeometry args={[0.78, 1]} />
          <meshBasicMaterial color="#4ade80" wireframe transparent opacity={0.28} />
        </mesh>
      </group>

      <group ref={orbitRef}>
        <mesh rotation={[Math.PI / 2.6, 0, 0]}>
          <torusGeometry args={[1.28, 0.012, 10, 88]} />
          <meshBasicMaterial color="#4ade80" transparent opacity={0.74} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2.8, Math.PI / 8]}>
          <torusGeometry args={[1.62, 0.01, 10, 88]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.42} />
        </mesh>
        <mesh rotation={[Math.PI / 5, Math.PI / 4, 0]}>
          <torusGeometry args={[2.02, 0.008, 10, 88]} />
          <meshBasicMaterial color="#f59e0b" transparent opacity={0.26} />
        </mesh>
      </group>
    </group>
  );
}

function Scene() {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sceneRef.current) {
      sceneRef.current.rotation.y = Math.sin(t * 0.22) * 0.16 + state.pointer.x * 0.22;
      sceneRef.current.rotation.x = state.pointer.y * 0.08;
      sceneRef.current.position.y = Math.sin(t * 0.55) * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 4]} intensity={1.8} />
      <pointLight position={[-3, -2, 3]} color="#38bdf8" intensity={6} distance={7} />
      <pointLight position={[2, 1, 2]} color="#4ade80" intensity={4} distance={6} />
      <group ref={sceneRef}>
        <ConnectionLines />
        <CoreSystem />
        {nodes.map((node) => (
          <NodeMesh key={`${node.shape}-${node.color}`} node={node} />
        ))}
      </group>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-scene" data-hero-scene>
      <Canvas
        dpr={[1, 1.4]}
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Scene />
      </Canvas>
      <div className="hero-scene-label hero-scene-label-ai">LLM Review</div>
      <div className="hero-scene-label hero-scene-label-api">FastAPI</div>
      <div className="hero-scene-label hero-scene-label-data">PostgreSQL</div>
      <div className="hero-scene-label hero-scene-label-sec">MISP Security</div>
    </div>
  );
}
