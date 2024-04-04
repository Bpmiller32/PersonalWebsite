/* -------------------------------------------------------------------------- */
/*         The "World" in which all resources for the webgl scene live        */
/* -------------------------------------------------------------------------- */

import * as THREE from "three";
import Experience from "../experience";
import ResourceLoader from "../utils/resourceLoader";
import ParicleObject from "./particleObject";
import Camera from "../camera";

export default class World {
  experience: Experience;
  scene?: THREE.Scene;
  resources?: ResourceLoader;
  camera?: Camera;
  scrollY: number;

  boat?: ParicleObject;
  needle?: ParicleObject;
  columbiaTower?: ParicleObject;
  combined?: ParicleObject;

  constructor() {
    this.experience = Experience.getInstance();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;

    this.scrollY = window.scrollY;

    this.resources?.on("ready", () => {
      // this.boat = new ParicleObject(
      //   this.resources?.items.boat.scene.children[0].geometry
      // );
      // this.needle = new ParicleObject(
      //   this.resources?.items.needle.scene.children[0].geometry
      // );
      // this.columbiaTower = new ParicleObject(
      //   this.resources?.items.columbiaTower.scene.children[0].geometry
      // );
      this.combined = new ParicleObject(
        this.resources?.items.combined.scene.children[0].geometry
      );

      // this.boat.gpgpu!.debugMesh!.position.x += -5;
      // this.boat.mesh!.position.x += -5;
      // this.boat.mesh!.position.y += -1;

      // this.needle.mesh!.position.x += 5;
      // this.needle.gpgpu!.debugMesh!.position.x += 5;

      // this.combined.mesh!.position.x = 0;
      // this.combined.mesh!.position.y = 0;
      // this.combined.mesh!.position.z = 0;
      // this.combined.mesh!.rotateY(180);
      this.combined.mesh!.rotateX(90);
      // this.combined.gpgpu!.debugMesh!.position.x += 5;
    });
  }

  update() {
    // this.scrollY = window.scrollY;
    // this.camera!.instance!.position.z = this.scrollY;

    if (this.boat) {
      this.boat.update();
    }

    if (this.combined) {
      this.combined.update();
    }
  }

  destroy() {
    this.boat?.destroy();
    this.needle?.destroy();
  }
}
