/* -------------------------------------------------------------------------- */
/*         The "World" in which all resources for the webgl scene live        */
/* -------------------------------------------------------------------------- */

import * as THREE from "three";
import Experience from "../experience";
import ResourceLoader from "../utils/resourceLoader";
import ParicleObject from "./particleObject";

export default class World {
  experience: Experience;
  scene?: THREE.Scene;
  resources?: ResourceLoader;

  boat?: ParicleObject;
  needle?: ParicleObject;

  constructor() {
    this.experience = Experience.getInstance();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;

    this.resources?.on("ready", () => {
      this.boat = new ParicleObject(
        this.resources?.items.boat.scene.children[0].geometry
      );
      this.needle = new ParicleObject(
        this.resources?.items.needle.scene.children[0].geometry
      );

      this.boat.gpgpu!.debugMesh!.position.x += -5;
      this.boat.mesh!.position.x += -5;

      this.needle.mesh!.position.x += 5;
      this.needle.gpgpu!.debugMesh!.position.x += 5;
    });
  }

  update() {
    if (this.boat && this.needle) {
      this.boat.update();
      this.needle.update();
    }
  }

  destroy() {
    this.boat?.destroy();
    this.needle?.destroy();
  }
}
