import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron } from "@react-three/drei";
import * as THREE from "three";

interface ShapeProps {
  position: [number, number, number];
  mousePosition: { x: number; y: number };
}

const FloatingSphere = ({ position, mousePosition }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mousePosition.y * 0.3;
      meshRef.current.rotation.y = mousePosition.x * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
        <MeshDistortMaterial
          color="#fb923c"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const FloatingTorus = ({ position, mousePosition }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mousePosition.y * -0.5;
      meshRef.current.rotation.z = mousePosition.x * 0.5;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1}>
      <Torus ref={meshRef} args={[1, 0.4, 16, 100]} position={position}>
        <MeshDistortMaterial
          color="#f97316"
          attach="material"
          distort={0.2}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </Torus>
    </Float>
  );
};

const FloatingOctahedron = ({ position, mousePosition }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = mousePosition.x * 0.4;
      meshRef.current.rotation.z = mousePosition.y * 0.4;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={3}>
      <Octahedron ref={meshRef} args={[1.2]} position={position}>
        <MeshDistortMaterial
          color="#fdba74"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.3}
          metalness={0.7}
        />
      </Octahedron>
    </Float>
  );
};

interface SceneProps {
  mousePosition: { x: number; y: number };
}

const Scene = ({ mousePosition }: SceneProps) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#fb923c" intensity={0.5} />
      
      <FloatingSphere position={[-4, 2, -5]} mousePosition={mousePosition} />
      <FloatingTorus position={[4, -2, -8]} mousePosition={mousePosition} />
      <FloatingOctahedron position={[0, 3, -6]} mousePosition={mousePosition} />
      <FloatingSphere position={[5, 1, -7]} mousePosition={mousePosition} />
      <FloatingTorus position={[-3, -3, -9]} mousePosition={mousePosition} />
    </>
  );
};

const FloatingShapes = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  useMemo(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Scene mousePosition={mousePosition.current} />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
