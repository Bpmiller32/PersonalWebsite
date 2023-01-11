<script setup>
import { animate, timeline, scroll, inView, spring } from "motion";
import { ref, onMounted, watch } from "vue";
// import AppLink from "./AppLink.vue";
import NavBar from "../components/NavBar.vue";

import AboutSection from "../sections/AboutDesktop.vue";
import ContactSection from "../sections/ContactDesktop.vue";
import FooterSection from "../sections/FooterDesktop.vue";

import SpotlightMobile from "../sections/SpotlightMobile.vue";
import AboutMobile from "../sections/AboutMobile.vue";
import WorkMobile from "../sections/WorkMobile.vue";
import ProjectsMobile from "../sections/ProjectsMobile.vue";
import ContactMobile from "../sections/ContactMobile.vue";
import FooterMobile from "../sections/FooterMobile.vue";

// Template refs
const mobilePhoto0 = ref(null);
const mobilePhoto1 = ref(null);
const mobilePhoto2 = ref(null);
const mobilePhoto3 = ref(null);
const mobilePhoto4 = ref(null);

const contentMobile = ref(null);
const aboutMobile = ref(null);
const contentDesktop = ref(null);

// Brower window variables
const pictureHeight = ref(null);
const appWidth = ref(null);
const appHeight = ref(null);

// function CalculatePictureHeight(windowWidth) {
//   let factor = 100;
//   let units = 1;

//   // Debug
//   // console.log("window width: ", window.innerWidth);
//   // console.log("rendered height: ", para0.value.clientHeight);
//   // console.log("ratio: ", window.innerWidth / para0.value.clientHeight);
//   // console.log(" ");

//   if (windowWidth < 640) {
//     // Factor is roughly 1.5 under 640px
//     factor = windowWidth / 1.1;
//   } else if (windowWidth < 768) {
//     units = (windowWidth - 768) / 20;
//     factor = windowWidth / (1.7 - units * 0.01);
//   } else if (windowWidth < 1024) {
//     units = (windowWidth - 1024) / 30;
//     factor = windowWidth / (1.7 - units * 0.01);
//   } else if (windowWidth < 1280) {
//     units = (windowWidth - 1280) / 30;
//     factor = windowWidth / (1.7 - units * 0.01);
//   } else {
//     units = (windowWidth - 1280) / 30;
//     factor = windowWidth / (1.8 - units * 0.01);
//   }

//   return factor;
// }

onMounted(() => {
  // Set photo and app dimensions on mount and on browser window resize
  appHeight.value = window.innerHeight;
  appWidth.value = window.innerWidth;

  // pictureHeight.value = CalculatePictureHeight(window.innerWidth);

  window.addEventListener("resize", () => {
    appHeight.value = window.innerHeight;
    appWidth.value = window.innerWidth;

    console.log("app width: ", appWidth.value);

    // pictureHeight.value = CalculatePictureHeight(window.innerWidth);
  });

  // Create sequence here because photo needs to be mounted to assign to paraX.value
  const sequence = [
    [mobilePhoto0.value, { y: 100 }, { at: 0, duration: 1 }],
    [mobilePhoto1.value, { y: 150 }, { at: 0, duration: 1 }],
    [mobilePhoto2.value, { y: 0 }, { at: 0, duration: 1 }],
    [mobilePhoto3.value, { y: -200 }, { at: 0, duration: 1 }],
    [mobilePhoto4.value, { y: -400 }, { at: 0, duration: 1 }],
    [contentMobile.value, { y: -500 }, { at: 0, duration: 1 }],
    // [contentDesktop.value, { rotate: }, { at: 0, duration: 1 }],
  ];

  // animate(
  //   contentDesktop.value,
  //   {
  //     opacity: 1,
  //     transform: "rotate(90deg)",
  //   },
  //   { at: 0, duration: 2 }
  // );
  // animate(
  //   contentMobile.value,
  //   {
  //     transform: "translateY(-50%)",
  //   },
  //   { at: 0, duration: 2 }
  // );

  // animate(aboutMobile.value, { x: -400 }, { at: 0, duration: 2 });

  // Scrolling paralax function
  scroll(
    timeline(sequence, {
      direction: "alternate",
    })
  );
});
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full max-w-7xl overflow-clip">
      <!-- Spotlight Photo -->
      <div class="relative h-screen">
        <img
          ref="mobilePhoto0"
          class="object-cover absolute h-screen"
          src="..\assets\mobilePhoto0.png"
        />
        <img
          ref="mobilePhoto1"
          class="object-cover absolute h-screen"
          src="..\assets\mobilePhoto1.png"
        />
        <img
          ref="mobilePhoto2"
          class="object-cover absolute h-screen"
          src="..\assets\mobilePhoto2.png"
        />
        <img
          ref="mobilePhoto3"
          class="object-cover absolute h-screen"
          src="..\assets\mobilePhoto3.png"
        />
        <img
          ref="mobilePhoto4"
          class="object-cover absolute h-screen"
          src="..\assets\mobilePhoto4.png"
        />
      </div>

      <div ref="contentMobile" class="relative" v-if="appWidth <= 640">
        <AboutMobile />
        <WorkMobile />
        <ProjectsMobile />
        <ContactMobile />
        <FooterMobile />
      </div>
      <div ref="contentDesktop" class="relative" v-else>
        <div class="w-full h-[300vh] bg-red-500 text-white">asdf</div>
      </div>
      <div class="text-white">Hello !</div>
    </div>
  </div>
</template>
