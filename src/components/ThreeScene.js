import React, { Suspense } from "react";
//three js
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import Monitor from "./Monitor";
import Escritorio from "./Escritorio";

export default function ThreeScene() {
  return (
    <div className="container">
      <Canvas
        camera={{ position: [0, 50, 40], fov: 65 }}
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 3.4,
        }}
      >
        <Suspense fallback={null}>
          {/* <Monitor /> */}
          <Escritorio/>
        </Suspense>
        <directionalLight
          position={[10, 10, 10]}
          color={"white"}
          intensity={.4}
        />
        <ambientLight intensity={0.01} color={"#ffffff"} />
        <OrbitControls />
        <Stars />
      </Canvas>
    </div>
  );
}
