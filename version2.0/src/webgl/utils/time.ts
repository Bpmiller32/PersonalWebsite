/* -------------------------------------------------------------------------- */
/*    Used to pass all time and tick related to Experience and its children   */
/* -------------------------------------------------------------------------- */

import EventEmitter from "./eventEmitter";
import * as THREE from "three";

export default class Time extends EventEmitter {
  clock: THREE.Clock;
  start: number;
  elapsed: number;
  delta: number;
  previous: number;

  constructor() {
    super();

    this.clock = new THREE.Clock();

    this.start = this.clock.startTime;
    this.elapsed = this.clock.getElapsedTime();
    this.previous = 0;
    this.delta = this.clock.getDelta();

    // instead of calling tick() immediately, wait 1 frame for delta time subtraction
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    this.elapsed = this.clock.getElapsedTime();
    //   Clamp this value to a minimum framerate, this way when tab is suspended the deltaTime does not get huge
    // this.delta = Math.min(this.elapsed - this.previous, 1 / 30);
    this.delta = this.elapsed - this.previous;
    this.previous = this.elapsed;

    this.trigger("tick");

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  destroy() {
    this.off("tick");
  }
}
