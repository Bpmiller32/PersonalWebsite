/* -------------------------------------------------------------------------- */
/*             The camera and camera controls for the webgl scene             */
/* -------------------------------------------------------------------------- */

import * as THREE from "three";
import Experience from "./experience";
import Sizes from "./utils/sizes";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default class Camera {
  experience: Experience;
  sizes: Sizes;
  scene: THREE.Scene;
  canvas: HTMLCanvasElement | null;
  instance: THREE.PerspectiveCamera | undefined;
  controls: OrbitControls | undefined;
  //   canvas is |null because the element is null before mounting, instance and controls are undefined before the constructor and the methods don't know about them

  constructor() {
    this.experience = Experience.getInstance();

    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.setInstance();
    this.setOrbitControls();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );

    this.instance.position.set(6, 4, 8);
    this.scene.add(this.instance);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.instance!, this.canvas!);
    this.controls.enableDamping = true;
  }

  resize() {
    this.instance!.aspect = this.sizes.width / this.sizes.height;
    this.instance!.updateProjectionMatrix();
  }

  update() {
    this.controls!.update();
  }

  destroy() {
    this.controls!.dispose();
  }
}
