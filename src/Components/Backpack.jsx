import React,{Suspense, useRef} from "react";
import {useLoader, useFrame, useThree, extend } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import url from '../models/Backpack.gltf'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BoxBufferGeometry } from "three";



function Loading() {
	console.log('loading')

	return (
	  <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
		<sphereGeometry attach="geometry" args={[1, 16, 16]} />
		<meshStandardMaterial
		  attach="material"
		  color="white"
		  transparent
		  opacity={0.6}
		  roughness={1}
		  metalness={0}
		/>
	  </mesh>
	);
  }

function BackpackMesh() {

	const group = useRef();

	const { scene } = useLoader(GLTFLoader, url);
	console.log('ran')

	// useFrame will run outside of react in animation frames to optimize updates.
	useFrame(() => {
	  group.current.rotation.y += 0.004;
	});
	return (
	  // Add a ref to the group. This gives us a hook to manipulate the properties of this geometry in the useFrame callback.
	  <group ref={group}>
		<primitive visible object={scene}>
		 
		</primitive>
	  </group>
	);
  }



export const Backpack = () => {
  return (
	  <>

	     <Suspense fallback={<Loading/>}>
	       <BackpackMesh />
	     </Suspense>

	  </>
  );
}