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

const spotlightText = ref(null);
const scrollBubble = ref(null);
const bpmillerLogo = ref(null);
const mobileMenu = ref(null);

const bounce = animate(
  scrollBubble.value,
  {
    transformOrigin: "center bottom",
    y: ["0px", "30px"],
    // scaleY: [1, 1.1],
  },
  {
    easing: spring({ damping: 100 }),
    direction: "alternate",
    delay: 0,
    repeat: Infinity,
  }
);

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

  // Animate in nav bar, spotlight text
  animate(
    [bpmillerLogo.value, mobileMenu.value, spotlightText.value],
    { opacity: [0, 1] },
    { duration: 1.3 }
  );

  // Animate in scroll bubble
  // animate(
  //   scrollBubble.value,
  //   { opacity: [0, 1] },
  //   { delay: 1.1, duration: 1.3 }
  // );

  // Bounce scroll bubble
  // setInterval(() => {
  //   animate(
  //     scrollBubble.value,
  //     {
  //       transformOrigin: "center bottom",
  //       y: ["0%", "-6%", "-3%", "0%", "-0.5%", "0%"],
  //       scaleY: [1, 1.1, 1.05, 1],
  //     },
  //     {
  //       // delay: 3,
  //       duration: 1,
  //       // repeat: Infinity,
  //     }
  //   ).finished.then(() => {
  //     console.log("test");
  //     scrollBubble.value.style = "";
  //   });
  // }, 3000);

  // Test 2
  setInterval(() => {
    animate(
      scrollBubble.value,
      {
        y: ["0px", "30px"],
        // scaleY: [1, 1.1],
      },
      {
        easing: spring({ damping: 100 }),
        direction: "alternate",
        delay: 0,
        repeat: Infinity,
      }
    ).finished.then(() => {
      console.log("test");
      scrollBubble.value.style = "";
    });
  }, 5000);

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
      ref="spotlightText"
      class="absolute h-screen w-full flex justify-center items-center opacity-0"
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
      ref="scrollBubble"
      class="absolute h-screen w-full flex justify-center"
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
      <div ref="bpmillerLogo" class="ml-5 flex items-center opacity-0">
        <SvgHandler name="BpmillerLogoText" />
        <SvgHandler name="BpmillerLogoTerminal" />
      </div>
      <!-- Menu -->
      <div ref="mobileMenu" class="mr-5 opacity-0">
        <MobileMenu />
      </div>
    </div>
  </div>

  <!-- Content sections -->
  <div class="absolute w-full">
    <AboutMobile />
    <WorkMobile />
    <ProjectsMobile />
    <ContactMobile />
    <FooterMobile />
  </div>
</template>
