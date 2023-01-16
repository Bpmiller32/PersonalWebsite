<script setup>
// JS
import { animate, timeline, scroll, inView, spring } from "motion";
import { ref, onMounted, watch } from "vue";

// Assets
import BpmillerLogoText from "../assets/BpmillerLogoText.vue";
import BpmillerLogoTerminal from "../assets/BpmillerLogoTerminal.vue";
import SpotlightText from "../assets/SpotlightText.vue";
import ScrollBubble from "../assets/ScrollBubble.vue";

// Components
import MobileMenu from "../components/MobileMenu.vue";
import SvgHandler from "../components/SvgHandler.vue";

// Sections
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
const contentSections = ref(null);
const grayFilter = ref(null);

onMounted(() => {
  // Create sequence here because photo needs to be mounted to assign animation to photoX.value
  const sequence = [
    [mobilePhoto0.value, { y: 100 }, { at: 0, duration: 1 }],
    [mobilePhoto1.value, { y: 150 }, { at: 0, duration: 1 }],
    [mobilePhoto2.value, { y: 50 }, { at: 0, duration: 1 }],
    [mobilePhoto3.value, { y: -200 }, { at: 0, duration: 1 }],
    [mobilePhoto4.value, { y: -400 }, { at: 0, duration: 1 }],
    [contentSections.value, { y: -500 }, { at: 0, duration: 1 }],
  ];

  // Animate filter in
  // animate(grayFilter.value, { opacity: [0, 0.4] }, { at: 0, duration: 3 });

  // Scrolling paralax function
  scroll(
    timeline(sequence, {
      direction: "alternate",
    })
  );
});
</script>

<template>
  <!-- Spotlight section -->
  <div class="relative h-screen">
    <img
      ref="mobilePhoto0"
      class="object-cover absolute h-screen"
      src="..\assets\mobilePhoto0.png"
      alt="image of a beach cliff"
    />
    <img
      ref="mobilePhoto1"
      class="object-cover absolute h-screen"
      src="..\assets\mobilePhoto1.png"
      alt="image of a beach cliff"
    />
    <img
      ref="mobilePhoto2"
      class="object-cover absolute h-screen"
      src="..\assets\mobilePhoto2.png"
      alt="image of a beach cliff"
    />

    <!-- Opacity filter for better contrast with elements and text -->
    <div
      ref="grayFilter"
      class="absolute w-full h-screen bg-black opacity-40"
    ></div>

    <!-- Spotlight text -->
    <div
      class="absolute h-screen w-full flex justify-center items-center animate__animated animate__fadeIn"
    >
      <SpotlightText class="mx-5 h-auto w-auto" />
    </div>

    <img
      ref="mobilePhoto3"
      class="object-cover absolute h-screen"
      src="..\assets\mobilePhoto3.png"
      alt="image of a beach cliff"
    />

    <!-- ScrollBubble -->
    <div
      class="absolute h-screen w-full flex justify-center animate__animated animate__fadeIn animate__delay-1s"
    >
      <ScrollBubble class="absolute bottom-0 mb-32 w-12 h-12" />
    </div>

    <img
      ref="mobilePhoto4"
      class="object-cover absolute h-screen"
      src="..\assets\mobilePhoto4.png"
      alt="image of a beach cliff"
    />

    <!-- Menu, logo -->
    <div class="mt-20 absolute w-full flex justify-between">
      <!-- Logo -->
      <div class="mx-5 flex items-center animate__animated animate__fadeIn">
        <SvgHandler name="BpmillerLogoText" />
        <BpmillerLogoTerminal
          class="h-12 animate__animated animate__flash animate__repeat-1"
        />
      </div>
      <!-- Menu -->
      <div class="mx-5 animate__animated animate__fadeIn">
        <MobileMenu />
      </div>
    </div>
  </div>

  <!-- Content sections -->
  <div ref="contentSections">
    <AboutMobile />
    <WorkMobile />
    <ProjectsMobile />
    <ContactMobile />
    <FooterMobile />
  </div>
</template>
