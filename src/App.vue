<script setup>
// Js
import { ref, onMounted } from "vue";
import { animate, timeline, scroll, inView, spring } from "motion";

// Sections
import SpotlightMobile from "./sections/SpotlightMobile.vue";
import AboutMobile from "./sections/AboutMobile.vue";
import WorkMobile from "./sections/WorkMobile.vue";
import ProjectsMobile from "./sections/ProjectsMobile.vue";
import ContactMobile from "./sections/ContactMobile.vue";
import FooterMobile from "./sections/FooterMobile.vue";

import SpotlightDesktop from "./sections/SpotlightDesktop.vue";

const appWidth = ref(null);

onMounted(() => {
  // Set app dimensions on mount and on browser window resize
  appWidth.value = window.innerWidth;

  window.addEventListener("resize", () => {
    appWidth.value = window.innerWidth;
  });

  // Global animations
  inView(".animateFadeUp", (info) => {
    animate(
      info.target,
      { opacity: [0, 1], y: [30, 0] },
      { duration: 1, allowWebkitAcceleration: true }
    );
  });

  inView(".animateFadeUpSlow", (info) => {
    animate(
      info.target,
      { opacity: [0, 0.2], y: [50, 0] },
      { duration: 2.5, allowWebkitAcceleration: true }
    );
  });

  // inView(".animateFadeUpSmall", (info) => {
  //   animate(
  //     info.target,
  //     { opacity: [0, 1], y: [15, 0] },
  //     { duration: 1, allowWebkitAcceleration: true }
  //   );
  // });

  inView(".animateFadeIn", (info) => {
    animate(
      info.target,
      { opacity: [0, 1] },
      { duration: 1.3, allowWebkitAcceleration: true }
    );
  });
});
</script>

<template>
  <div ref="contentMobile" v-if="appWidth <= 640">
    <!-- Spotlight section -->
    <SpotlightMobile />

    <!-- Content sections -->
    <div class="absolute w-full">
      <AboutMobile />
      <WorkMobile />
      <ProjectsMobile />
      <ContactMobile />
      <FooterMobile />
    </div>
  </div>
  <div ref="contentDesktop" v-else>
    <SpotlightDesktop />
  </div>
</template>
