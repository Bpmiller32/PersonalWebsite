import * as THREE from "three";
import { GPUComputationRenderer } from "three/examples/jsm/Addons.js";
import gpgpuParticlesShader from "../shaders/particles.glsl";
import Experience from "../experience";

export default class Gpgpu {
  width: any;
  height: any;
  renderer: any;
  geometryToSimulate: any;

  instance: any;
  baseSimulationTexture: any;
  simulationObject: any;
  debugMesh:
    | THREE.Mesh<
        THREE.PlaneGeometry,
        THREE.MeshBasicMaterial,
        THREE.Object3DEventMap
      >
    | undefined;
  experience: any;
  scene: any;

  constructor(width: any, height: any, renderer: any, geometryToSimulate: any) {
    this.width = width;
    this.height = height;
    this.renderer = renderer;
    this.geometryToSimulate = geometryToSimulate;

    this.experience = Experience.getInstance();
    this.scene = this.experience.scene;

    this.setInstance();
    this.instance?.init();

    this.setMesh();
  }

  setInstance() {
    this.instance = new GPUComputationRenderer(
      this.width,
      this.height,
      this.renderer.instance
    );

    this.baseSimulationTexture = this.instance.createTexture();

    for (
      let i = 0;
      i < this.geometryToSimulate.attributes.position.count;
      i++
    ) {
      const i3 = i * 3;
      const i4 = i * 4;

      this.baseSimulationTexture.image.data[i4 + 0] =
        this.geometryToSimulate.attributes.position.array[i3 + 0];
      this.baseSimulationTexture.image.data[i4 + 1] =
        this.geometryToSimulate.attributes.position.array[i3 + 1];
      this.baseSimulationTexture.image.data[i4 + 2] =
        this.geometryToSimulate.attributes.position.array[i3 + 2];
      this.baseSimulationTexture.image.data[i4 + 3] = Math.random();
    }

    // Adds a "shader variable" - the data that will be computed per render
    // 3rd arg: the data being sent in
    // 2nd arg: the shader to apply the data to
    // 1st arg: the name of the uniform to access the data in the shader
    this.simulationObject = this.instance.addVariable(
      "uSimulationTexture",
      gpgpuParticlesShader,
      this.baseSimulationTexture
    );

    // SimulationObject needs to be re-injected into itself every tick
    // 2nd arg: the array of dependencies that are needed for the "shader variable"
    // 1st arg: the "shader variable" (added above) that you want to update
    this.instance.setVariableDependencies(this.simulationObject, [
      this.simulationObject,
    ]);
  }

  setMesh() {
    const debugMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3, 3),
      new THREE.MeshBasicMaterial({
        map: this.instance.getCurrentRenderTarget(this.simulationObject)
          .texture,
      })
    );

    this.scene.add(debugMesh);
  }

  update() {
    this.simulationObject.material.uniforms.uTime.value =
      this.experience.time.elapsed;
    this.simulationObject.material.uniforms.uDeltaTime.value =
      this.experience.time.delta;
    this.instance.compute();
  }
}
