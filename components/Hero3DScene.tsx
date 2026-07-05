"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";
import * as THREE from "three";

useGLTF.preload("/models/burger.glb");

const Burger = ({ isRotating }: { isRotating: boolean }) => {
  const burgerRef = useRef<THREE.Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scene } = useGLTF("/models/burger.glb");

  const model = useMemo(() => {
    const clonedScene = scene.clone();

    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const box = new THREE.Box3().setFromObject(clonedScene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    clonedScene.position.set(-center.x, -center.y, -center.z);
    clonedScene.scale.setScalar(4.25 / maxDim);
    clonedScene.position.y -= 0.1;

    return clonedScene;
  }, [scene]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX - innerWidth / 2) / 120;
      const y = (event.clientY - innerHeight / 2) / 120;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  useEffect(() => {
    if (!isRotating) return;

    const rotationAnimation = animate(0, Math.PI * 2, {
      duration: 12,
      repeat: Infinity,
      ease: "linear",
      onUpdate: (value) => {
        if (burgerRef.current) {
          burgerRef.current.rotation.y = value;
        }
      },
    });

    return () => rotationAnimation.stop();
  }, [isRotating]);

  const rotateX = useTransform(mouseY, (value) => value * 0.04);
  const rotateY = useTransform(mouseX, (value) => value * 0.04);

  return (
    <Float
      speed={2}
      rotationIntensity={0.45}
      floatIntensity={0.35}
      floatingRange={[-0.15, 0.15]}
    >
      <group ref={burgerRef} rotation={[rotateX.get(), rotateY.get(), 0]}>
        <primitive object={model} />
      </group>
    </Float>
  );
};

const Hero3DScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 1.4, 6.8], fov: 40 }}
      shadows
      className="w-full h-full"
    >
      <PerspectiveCamera makeDefault position={[0, 1.4, 6.8]} />
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0005}
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#fbbf24" />
      <Suspense fallback={null}>
        <Burger isRotating />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} minDistance={4} maxDistance={8} />
    </Canvas>
  );
};

export default Hero3DScene;
