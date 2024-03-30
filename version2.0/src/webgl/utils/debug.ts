/* -------------------------------------------------------------------------- */
/*                       Dat.Gui debug panel for ThreeJs                      */
/* -------------------------------------------------------------------------- */

import dat from "dat.gui";

export default class Debug {
  isActive: boolean;
  ui?: dat.GUI;

  constructor() {
    this.isActive = window.location.hash === "#debug";
    this.isActive = true;

    if (this.isActive) {
      this.ui = new dat.GUI();
    }
  }

  destroy() {
    this.ui?.destroy();
  }
}
