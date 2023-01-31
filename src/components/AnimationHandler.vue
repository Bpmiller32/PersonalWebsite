<script setup>
// Js
import { animate, timeline, scroll } from "motion";

// Vue
const props = defineProps({
  enterAnimation: { type: String, default: "EmptyAnimation" },
  leaveAnimation: { type: String, default: "EmptyAnimation" },
  args: { type: null, required: false },
  transitionMode: { type: String, default: "out-in" },
});

// Transition handlers
function EnterHandler(el, done) {
  console.log("here");
  if (typeof animations[props.enterAnimation] !== "undefined") {
    animations[props.enterAnimation](el, done);
  } else {
    animations["EmptyAnimation"](el, done);
  }
}

function LeaveHandler(el, done) {
  console.log("here");

  if (typeof animations[props.enterAnimation] !== "undefined") {
    animations[props.leaveAnimation](el, done);
  } else {
    animations["EmptyAnimation"](el, done);
  }
}

// Animations object
const animations = {};

// ******************
// **  Animations  **
// ******************

// Empty animation
animations.EmptyAnimation = (el, done) => {
  animate(el, {}, { at: 0, duration: 0 }).finished.then(() => {
    done;
  });
};

animations.FadeIn = (el, done) => {
  console.log("test recieved");
  animate(el, { opacity: [0, 1] }, { at: 0, duration: 5 }).finished.then(() => {
    done;
  });
};
</script>

<template>
  <Transition
    :mode="props.transitionMode"
    :css="false"
    @enter="
      (el, done) => {
        EnterHandler(el, done);
      }
    "
    @leave="
      (el, done) => {
        LeaveHandler(el, done);
      }
    "
  >
    <slot></slot>
  </Transition>
</template>
