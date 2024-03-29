/* -------------------------------------------------------------------------- */
/*         The "World" in which all resources for the webgl scene live        */
/* -------------------------------------------------------------------------- */

import * as THREE from "three";
import Experience from "../experience";
import ResourceLoader from "../utils/resourceLoader";
import Boat from "./boat";

export default class World {
  experience: Experience;
  scene: THREE.Scene;
  resources: ResourceLoader;
  boat: Boat | undefined;

  constructor() {
    this.experience = Experience.getInstance();
    this.resources = this.experience.resources;

    this.scene = this.experience.scene;

    this.resources.on("ready", () => {
      const testMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ wireframe: true })
      );
      this.scene.add(testMesh);

      this.boat = new Boat();
    });
  }

  update() {
    if (this.boat) {
      // this.boat.gpgpu?.update();
      // this.boat.update();
    }
  }
}
