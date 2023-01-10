<script setup>
import { animate, timeline, scroll, inView, spring } from "motion";
import { ref, onMounted, watch } from "vue";
import AppLink from "./AppLink.vue";

import AboutSection from "../sections/AboutDesktop.vue";
import ContactSection from "../sections/ContactDesktop.vue";
import FooterSection from "../sections/FooterDesktop.vue";

const testWidth = ref(null);
const testHeight = ref(null);

const content = ref(null);

const pictureHeight = ref(null);

const para0 = ref(null);
const para1 = ref(null);
const para2 = ref(null);
const para3 = ref(null);
const para4 = ref(null);

function CalculatePictureHeight(windowWidth) {
  let factor = 100;
  let units = 1;

  console.log("window width: ", window.innerWidth);
  console.log("rendered height: ", para0.value.clientHeight);
  console.log("ratio: ", window.innerWidth / para0.value.clientHeight);
  console.log(" ");

  if (windowWidth < 640) {
    // Factor is roughly 1.5 under 640px
    factor = windowWidth / 1.1;
  } else if (windowWidth < 768) {
    units = (windowWidth - 768) / 20;
    factor = windowWidth / (1.7 - units * 0.01);
  } else if (windowWidth < 1024) {
    units = (windowWidth - 1024) / 30;
    factor = windowWidth / (1.7 - units * 0.01);
  } else if (windowWidth < 1280) {
    units = (windowWidth - 1280) / 30;
    factor = windowWidth / (1.7 - units * 0.01);
  } else {
    units = (windowWidth - 1280) / 30;
    factor = windowWidth / (1.8 - units * 0.01);
  }

  return factor;
}

onMounted(() => {
  testWidth.value = window.innerWidth;
  testHeight.value = window.innerHeight;

  pictureHeight.value = CalculatePictureHeight(window.innerWidth);

  window.addEventListener("resize", () => {
    pictureHeight.value = CalculatePictureHeight(window.innerWidth);
  });

  const sequence = [
    [para0.value, { y: 50 }, { at: 0, duration: 1 }],
    [para1.value, { y: 100 }, { at: 0, duration: 1 }],
    [para2.value, { y: -100 }, { at: 0, duration: 1 }],
    [para3.value, { y: -400 }, { at: 0, duration: 1 }],
    [para4.value, { y: -700 }, { at: 0, duration: 50 }],
    [content.value, { top: "0%" }, { at: 0, duration: 0.1 }],
  ];

  // animate(
  //   test.value,
  //   { x: 100 },
  //   {
  //     duration: 1,
  //     easing: spring(),
  //     repeat: Infinity,
  //     direction: "alternate",
  //   }
  // );

  // timeline(sequence, {
  //   duration: 3,
  //   ease: spring(),
  //   repeat: Infinity,
  //   direction: "alternate",
  // });

  scroll(
    timeline(sequence, {
      direction: "alternate",
    })
  );

  // inView(test.value, () => {
  //   console.log("target spotted");

  //   return () => {
  //     console.log("target lost");
  //   };
  // });
});
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col w-full max-w-7xl sm:mx-10">
      <div class="relative sm:mx-10" :style="'height: ' + pictureHeight + 'px'">
        <img
          ref="para0"
          class="absolute -left-[14%] sm:left-0"
          src="..\assets\base.png"
          alt=""
        />
        <img
          ref="para1"
          class="absolute -left-[14%] sm:left-0"
          src="..\assets\backRock.png"
          alt=""
        />
        <img
          ref="para2"
          class="absolute -left-[14%] sm:left-0"
          src="..\assets\leftRock.png"
          alt=""
        />
        <img
          ref="para3"
          class="absolute -left-[14%] sm:left-0"
          src="..\assets\frontRock.png"
          alt=""
        />
        <img
          ref="para4"
          class="absolute -left-[14%] sm:left-0"
          src="..\assets\billy.png"
          alt=""
        />
      </div>
      <div ref="content" class="relative z-50">
        <AboutSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  </div>
</template>
