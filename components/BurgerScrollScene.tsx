"use client";

import { useEffect, useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { LazyCanvas } from "./LazyCanvas";

const BurgerModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const tiltRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/burger.glb");
  const targetRotation = useRef({ x: 0, y: 0 });

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
    clonedScene.scale.setScalar(4.5 / maxDim);
    clonedScene.position.y -= 0.1;
    return clonedScene;
  }, [scene]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (event.clientY - innerHeight / 2) / (innerHeight / 2);
      targetRotation.current.x = y * 0.25;
      targetRotation.current.y = x * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12; // slow continuous rotation
    }
    if (tiltRef.current) {
      tiltRef.current.rotation.x = THREE.MathUtils.lerp(tiltRef.current.rotation.x, targetRotation.current.x, 0.08);
      tiltRef.current.rotation.y = THREE.MathUtils.lerp(tiltRef.current.rotation.y, targetRotation.current.y, 0.08);
    }
  });

  return (
    <Float
      speed={1.6}
      rotationIntensity={0.35}
      floatIntensity={0.25}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={tiltRef}>
        <group ref={groupRef}>
          <primitive object={model} />
        </group>
      </group>
    </Float>
  );
};

export const BurgerScrollScene = () => {
  return (
    <LazyCanvas className="h-full w-full">
      <Canvas camera={{ position: [0, 0.2, 5.5], fov: 40 }} shadows className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0.2, 5.5]} />
        <ambientLight intensity={0.65} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0005}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#fbbf24" />
        <Suspense fallback={null}>
          <BurgerModel />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} minDistance={3.5} maxDistance={7} />
      </Canvas>
    </LazyCanvas>
  );
};
