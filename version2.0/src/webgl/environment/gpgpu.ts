import * as THREE from "three";
import { GPUComputationRenderer } from "three/examples/jsm/Addons.js";
import gpgpuShader from "../shaders/gpgpu.glsl";
import Experience from "../experience";
import Time from "../utils/time";
import Renderer from "../renderer";
import Debug from "../utils/debug";

export default class Gpgpu {
  width: number;
  height: number;
  geometryToSimulate: THREE.BufferGeometry;

  experience: Experience;
  debug?: Debug;
  renderer?: Renderer;
  time?: Time;
  scene?: THREE.Scene;

  instance?: GPUComputationRenderer;
  baseSimulationTexture?: THREE.DataTexture;
  simulationObject?: any;
  debugMesh?: THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >;

  constructor(
    width: number,
    height: number,
    geometryToSimulate: THREE.BufferGeometry
  ) {
    this.width = width;
    this.height = height;
    this.geometryToSimulate = geometryToSimulate;

    this.experience = Experience.getInstance();
    this.debug = this.experience.debug;
    this.renderer = this.experience.renderer;
    this.time = this.experience.time;
    this.scene = this.experience.scene;

    this.setInstance();
    this.setUniforms();
    this.instance?.init();

    this.setMesh();

    this.setDebug();
  }

  setInstance() {
    this.instance = new GPUComputationRenderer(
      this.width,
      this.height,
      this.renderer?.instance!
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

    this.geometryToSimulate.dispose();

    // Adds a "shader variable" - the data that will be computed per render
    // 3rd arg: the data being sent in
    // 2nd arg: the shader to apply the data to
    // 1st arg: the name of the uniform to access the data in the shader
    this.simulationObject = this.instance.addVariable(
      "uSimulationTexture",
      gpgpuShader,
      this.baseSimulationTexture
    );

    // SimulationObject needs to be re-injected into itself every tick
    // 2nd arg: the array of dependencies that are needed for the "shader variable"
    // 1st arg: the "shader variable" (added above) that you want to update
    this.instance.setVariableDependencies(this.simulationObject, [
      this.simulationObject,
    ]);
  }

  setUniforms() {
    this.simulationObject.material.uniforms.uTime = new THREE.Uniform(0);
    this.simulationObject.material.uniforms.uTimeFrequency = new THREE.Uniform(
      0.2
    );
    this.simulationObject.material.uniforms.uDeltaTime = new THREE.Uniform(0);
    this.simulationObject.material.uniforms.uBase = new THREE.Uniform(
      this.baseSimulationTexture
    );
    this.simulationObject.material.uniforms.uFlowFieldInfluence =
      new THREE.Uniform(0.5);
    this.simulationObject.material.uniforms.uFlowFieldInfluenceFrequency =
      new THREE.Uniform(-2.0);
    this.simulationObject.material.uniforms.uFlowFieldStrength =
      new THREE.Uniform(2);
    this.simulationObject.material.uniforms.uFlowFieldFrequency =
      new THREE.Uniform(0.5);
    this.simulationObject.material.uniforms.uDecayRate = new THREE.Uniform(0.3);
    this.simulationObject.material.uniforms.uGlobalDirection =
      new THREE.Uniform(0.0005);

    this.baseSimulationTexture?.dispose();
  }

  setMesh() {
    this.debugMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3, 3),
      new THREE.MeshBasicMaterial({
        map: this.instance!.getCurrentRenderTarget(this.simulationObject)
          .texture,
      })
    );

    this.scene?.add(this.debugMesh);
  }

  update() {
    this.simulationObject.material.uniforms.uTime.value = this.time?.elapsed;
    this.simulationObject.material.uniforms.uDeltaTime.value = this.time?.delta;
    this.instance!.compute();
  }

  destroy() {
    this.debugMesh?.geometry.dispose();
    this.debugMesh?.material.dispose();

    this.instance?.dispose();
  }

  setDebug() {
    if (this.debug?.isActive) {
      const gpgpuFolder = this.debug.ui?.addFolder("gpgpu");
      gpgpuFolder?.open();
      gpgpuFolder!
        .add(this.simulationObject.material.uniforms.uTimeFrequency, "value")
        .min(0)
        .max(1)
        .step(0.1)
        .name("uTimeFrequency");
      gpgpuFolder!
        .add(
          this.simulationObject.material.uniforms.uFlowFieldInfluence,
          "value"
        )
        .min(0)
        .max(1)
        .name("uFlowFieldInfluence");
      gpgpuFolder!
        .add(
          this.simulationObject.material.uniforms.uFlowFieldInfluenceFrequency,
          "value"
        )
        .min(-15)
        .max(15)
        .step(1)
        .name("uFlowFieldInfluenceFrequency");
      gpgpuFolder!
        .add(
          this.simulationObject.material.uniforms.uFlowFieldStrength,
          "value"
        )
        .min(0)
        .max(10)
        .name("uFlowFieldStrength");
      gpgpuFolder!
        .add(
          this.simulationObject.material.uniforms.uFlowFieldFrequency,
          "value"
        )
        .min(0)
        .max(1)
        .step(0.001)
        .name("uFlowFieldFrequency");
      gpgpuFolder!
        .add(this.simulationObject.material.uniforms.uDecayRate, "value")
        .min(0)
        .max(1)
        .step(0.1)
        .name("uDecayRate");
      gpgpuFolder!
        .add(this.simulationObject.material.uniforms.uGlobalDirection, "value")
        .min(0.0001)
        .max(0.003)
        .step(0.0001)
        .name("uGlobalDirection");

      this.debugMesh!.visible = false;
      gpgpuFolder?.add(this.debugMesh!, "visible").name("gpgpuDebugTexture");
    }
  }
}
