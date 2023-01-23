<script setup>
// Js
import { animate, timeline, scroll, inView, spring } from "motion";
import { ref, onMounted, watch } from "vue";

// Components
import SvgHandler from "../components/SvgHandler.vue";
import MobileMenu from "../components/MobileMenu.vue";

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
const spotlightSection = ref(null);

onMounted(() => {
  // Create sequence here because photo needs to be mounted to assign animation to photoX.value
  const sequence = [
    [mobilePhoto0.value, { y: 100 }, { at: 0, duration: 1 }],
    [mobilePhoto1.value, { y: 150 }, { at: 0, duration: 1 }],
    [mobilePhoto2.value, { y: 50 }, { at: 0, duration: 1 }],
    [mobilePhoto3.value, { y: -200 }, { at: 0, duration: 1 }],
    [mobilePhoto4.value, { y: -400 }, { at: 0, duration: 1 }],
    [spotlightSection.value, { y: 500 }, { at: 0, duration: 1 }],
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
  <!-- Spotlight section -->
  <div ref="spotlightSection" class="relative h-screen">
    <!-- Ocean background image -->
    <img
      ref="mobilePhoto0"
      class="object-cover absolute h-screen"
      src="..\assets\mobile\photo0.webp"
      alt="Ocean background image"
    />
    <!-- Back left rock image -->
    <img
      ref="mobilePhoto1"
      class="object-cover absolute h-screen"
      src="..\assets\mobile\photo1.webp"
      alt="Back left rock image"
    />
    <!-- Main left cliff image -->
    <img
      ref="mobilePhoto2"
      class="object-cover absolute h-screen"
      src="..\assets\mobile\photo2.webp"
      alt="Main left cliff image"
    />

    <!-- Spotlight text -->
    <div
      class="absolute h-screen w-full flex justify-center items-center animate__animated animate__fadeIn"
    >
      <SvgHandler name="SpotlightText" />
    </div>

    <!-- Back foreground rock image -->
    <img
      ref="mobilePhoto3"
      class="object-cover absolute h-screen"
      src="..\assets\mobile\photo3.webp"
      alt="Back foreground rock image"
    />

    <!-- ScrollBubble -->
    <div
      class="absolute h-screen w-full flex justify-center animate__animated animate__fadeIn animate__delay-1s"
    >
      <SvgHandler name="ScrollBubble" />
    </div>

    <!-- Front forground rock and person image -->
    <img
      ref="mobilePhoto4"
      class="object-cover absolute h-screen"
      src="..\assets\mobile\photo4.webp"
      alt="Front forground rock and person image"
    />

    <!-- Menu, logo -->
    <div class="mt-20 absolute w-full flex justify-between items-center">
      <!-- Logo -->
      <div class="ml-5 flex items-center animate__animated animate__fadeIn">
        <SvgHandler name="BpmillerLogoText" />
        <SvgHandler name="BpmillerLogoTerminal" />
      </div>
      <!-- Menu -->
      <div class="mr-5 animate__animated animate__fadeIn">
        <MobileMenu />
      </div>
    </div>
  </div>

  <!-- Content sections -->
  <div class="absolute">
    <AboutMobile />
    <WorkMobile />
    <ProjectsMobile />
    <ContactMobile />
    <FooterMobile />
  </div>
</template>
