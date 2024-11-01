import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Mesh } from "three";
import { GPUComputationRenderer } from "three/examples/jsm/Addons.js";

export const BoatModel = () => {
  const { gl } = useThree();

  // Load model and geometry properties
  const model = useGLTF("./boat.glb");

  const baseGeometry = {
    instance: (model.scene.children[0] as Mesh).geometry,
    count: (model.scene.children[0] as Mesh).geometry.attributes.position.count,
  };

  console.log(baseGeometry);

  // Setup GPGPU
  const gpgpuRendererSize = Math.ceil(Math.sqrt(baseGeometry.count));
  const gpgpu = {
    size: gpgpuRendererSize,
    computation: new GPUComputationRenderer(
      gpgpuRendererSize,
      gpgpuRendererSize,
      gl
    ),
  };

  return <primitive object={model.scene} scale={0.35} />;
};
