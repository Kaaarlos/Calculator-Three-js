/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF,Html } from "@react-three/drei";
import Calculadora from "./Calculadora";

export default function Escritorio(props) {
  const { nodes, materials } = useGLTF("/Escritorio.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 9.68, -7.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials.Black}
        />
      </group>
      <group position={[0, 9.68, -7.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_1.geometry}
          material={materials.grey}
        />
      </group>
      <mesh       
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
        position={[0, 9.68, -7.2]}>
        <Html
            position={[0, 13, -5.3]}
            occlude
            transform>
           <Calculadora/>
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
        position={[0, 9.68, -7.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials["Keys.001"]}
        position={[0, 9.68, -7.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials["Keys.001"]}
        position={[0, 9.68, -7.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesa.geometry}
        material={materials["Material.010"]}
        position={[0, 4.89, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[34.99, 15.98, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BaseLap.geometry}
        material={materials["Material.014"]}
        position={[-10.24, 6.41, -3.95]}
        scale={[0.26, 0.47, 8.35]}
      />
      <group
        position={[-17.7, 14.31, -4.59]}
        rotation={[0, -0.46, -1.42]}
        scale={[0.79, 2.61, 0.79]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_3.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_4.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_5.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_6.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group
        position={[15.37, 6.54, 10.17]}
        rotation={[0, 0.41, 0]}
        scale={[1.13, 0.77, 1.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MousePad.geometry}
        material={materials["Material.011"]}
        position={[0, 6.02, 9.95]}
        scale={[19.61, 1, 4.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.teclado.geometry}
        material={materials["Material.012"]}
        position={[-0.42, 6.24, 9.93]}
        scale={[7.27, 1.71, 2.68]}
      />
      <group
        position={[-6.91, 6.61, 8.05]}
        rotation={[0.04, 0, 0]}
        scale={0.34}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["Material.015"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Escritorio.glb");
