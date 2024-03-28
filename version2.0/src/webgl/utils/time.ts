/* -------------------------------------------------------------------------- */
/*    Used to pass all time and tick related to Experience and its children   */
/* -------------------------------------------------------------------------- */

import EventEmitter from "./eventEmitter";

export default class Time extends EventEmitter {
  start: number;
  current: number;
  elapsed: number;
  delta: number;

  constructor() {
    super();

    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    // 16 because at 60 fps delta for 1 frame is ~16. Avoid using 0 for bugs
    this.delta = 16;

    // instead of calling tick() immediately, wait 1 frame for delta time subtraction
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;

    this.trigger("tick");

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  destroy() {
    this.off("tick");
  }
}
