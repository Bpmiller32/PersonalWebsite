/* -------------------------------------------------------------------------- */
/*         The "World" in which all resources for the webgl scene live        */
/* -------------------------------------------------------------------------- */

import * as THREE from "three";
import Experience from "../experience";
import ResourceLoader from "../utils/resourceLoader";

export default class World {
  experience: Experience;
  scene: THREE.Scene;
  resources: ResourceLoader;

  constructor() {
    this.experience = Experience.getInstance();
    this.resources = this.experience.resources;

    this.scene = this.experience.scene;

    this.resources.on("ready", () => {
      console.log("resources loaded");
      const testMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ wireframe: true })
      );
      this.scene.add(testMesh);
    });
  }
}
