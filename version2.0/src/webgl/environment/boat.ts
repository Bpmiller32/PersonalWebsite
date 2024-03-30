import * as THREE from "three";
import Experience from "../experience";
import Gpgpu from "./gpgpu";
import VertexShader from "../shaders/vertex.glsl";
import FragmentShader from "../shaders/fragment.glsl";

export default class Boat {
  experience: any;
  scene: any;
  resources: any;

  model: any;
  gpgpu: Gpgpu | undefined;
  geometry: any;
  simulationTextureSize: number | undefined;
  material: any;
  mesh: any;
  sizes: any;
  time: any;
  debug: any;

  constructor() {
    this.experience = Experience.getInstance();
    this.debug = this.experience.debug;
    this.time = this.experience.time;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setGeometry();
    this.setGpgpu();
    this.setMaterial();
    this.setMesh();

    if (this.debug.isActive) {
      this.debug.ui
        .add(this.material?.uniforms.uSize, "value")
        .min(0)
        .max(1)
        .step(0.001)
        .name("uSize");
    }
  }

  setGeometry() {
    // Import the boat model, make convience variables for vertex count and gpgpu render size
    this.model = this.resources.items.boat.scene.children[0].geometry;

    const modelVertexCount = this.model.attributes.position.count;
    this.simulationTextureSize = Math.ceil(Math.sqrt(modelVertexCount));

    // Premake a UV texture for the boat's vertex shader, also a good place for random particle sizes array init
    const particlesUvArray = new Float32Array(modelVertexCount * 2);
    const particleSizesArray = new Float32Array(modelVertexCount);

    for (let y = 0; y < this.simulationTextureSize; y++) {
      for (let x = 0; x < this.simulationTextureSize; x++) {
        // Index and stride for xy
        const i = y * this.simulationTextureSize + x;
        const i2 = i * 2;

        // UV texture, almost good but not in the middle of the cell. At the corner without the +0.5. Would have worked but it is vague what rgb value to take on a corner....
        const uvX = (x + 0.5) / this.simulationTextureSize;
        const uvY = (y + 0.5) / this.simulationTextureSize;

        particlesUvArray[i2 + 0] = uvX;
        particlesUvArray[i2 + 1] = uvY;

        // Random particle sizes array
        particleSizesArray[i] = Math.random();
      }
    }

    // Because BufferGeometry is an empty array there is no aPosition attribute that would be automatically created by shortcut Three.SphereGeometry().
    // Three.Points() mesh shortcut needs aPosition. SetDrawRange() says draw this many verticies with all aPosition default
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setDrawRange(0, modelVertexCount);

    // Set vertex shader attributes
    this.geometry.setAttribute(
      "aParticlesUv",
      new THREE.BufferAttribute(particlesUvArray, 2)
    );
    this.geometry.setAttribute("aColor", this.model.attributes.color);
    this.geometry.setAttribute(
      "aSize",
      new THREE.BufferAttribute(particleSizesArray, 1)
    );
  }

  setGpgpu() {
    this.gpgpu = new Gpgpu(
      this.simulationTextureSize,
      this.simulationTextureSize,
      this.experience.renderer,
      this.model
    );
  }

  setMaterial() {
    const width = this.experience.sizes.width;
    const height = this.experience.sizes.height;
    const pixelRatio = this.experience.sizes.pixelRatio;

    this.material = new THREE.ShaderMaterial({
      vertexShader: VertexShader,
      fragmentShader: FragmentShader,
      uniforms: {
        uSize: new THREE.Uniform(0.07),
        uResolution: new THREE.Uniform(
          new THREE.Vector2(width * pixelRatio, height * pixelRatio)
        ),
        uParticlesTexture: new THREE.Uniform(new THREE.Texture()),
      },
    });
  }

  setMesh() {
    this.mesh = new THREE.Points(this.geometry, this.material);
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);
  }

  update() {
    this.gpgpu?.update();

    this.material!.uniforms.uParticlesTexture.value =
      this.gpgpu?.instance.getCurrentRenderTarget(
        this.gpgpu.simulationObject
      ).texture;
  }
}
