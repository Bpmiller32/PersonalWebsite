<script setup>
import { animate, timeline, scroll, inView, spring } from "motion";
import { ref, onMounted, watch } from "vue";
// import AppLink from "./AppLink.vue";

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
const contentSections = ref(null);
const para0 = ref(null);
const para1 = ref(null);
const para2 = ref(null);
const para3 = ref(null);
const para4 = ref(null);

// Brower window variables
const pictureHeight = ref(null);
const appWidth = ref(null);
const appHeight = ref(null);

function CalculatePictureHeight(windowWidth) {
  let factor = 100;
  let units = 1;

  // Debug
  // console.log("window width: ", window.innerWidth);
  // console.log("rendered height: ", para0.value.clientHeight);
  // console.log("ratio: ", window.innerWidth / para0.value.clientHeight);
  // console.log(" ");

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
  // Set photo and app dimensions on mount and on browser window resize
  appHeight.value = window.innerHeight;
  appWidth.value = window.innerWidth;

  console.log("App height: ", appHeight.value);
  console.log("App width: ", appWidth.value);

  pictureHeight.value = CalculatePictureHeight(window.innerWidth);

  window.addEventListener("resize", () => {
    appHeight.value = window.innerHeight;
    appWidth.value = window.innerWidth;

    console.log("App height: ", appHeight.value);
    console.log("App width: ", appWidth.value);

    pictureHeight.value = CalculatePictureHeight(window.innerWidth);
  });

  // Create sequence here because photo needs to be mounted to assign to paraX.value
  const sequence = [
    [para0.value, { y: 50 }, { at: 0, duration: 1 }],
    [para1.value, { y: 100 }, { at: 0, duration: 1 }],
    [para2.value, { y: -100 }, { at: 0, duration: 1 }],
    [para3.value, { y: -400 }, { at: 0, duration: 1 }],
    [para4.value, { y: -700 }, { at: 0, duration: 50 }],
    [contentSections.value, { top: "0%" }, { at: 0, duration: 0.1 }],
  ];

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
    <div class="flex flex-col w-full max-w-7xl">
      <div ref="contentSections" class="relative z-50">
        <div class="relative" v-if="appWidth <= 640">
          <SpotlightMobile />
          <AboutMobile />
          <WorkMobile />
          <ProjectsMobile />
          <ContactMobile />
          <FooterMobile />
        </div>
        <div v-else-if="appWidth <= 768">
          <AboutSection />
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    </div>
  </div>
</template>
