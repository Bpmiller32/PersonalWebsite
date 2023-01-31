<script setup>
// Js
import { ref, onMounted } from "vue";
import { animate, timeline, scroll } from "motion";

// Components
import SvgHandler from "../components/SvgHandler.vue";
import MobileMenu from "../components/MobileMenu.vue";

// Vue
const emit = defineEmits(["RouteApp"]);

// Template refs
const spotlightSection = ref(null);

const mobilePhoto0 = ref(null);
const mobilePhoto1 = ref(null);
const mobilePhoto2 = ref(null);
const mobilePhoto3 = ref(null);
const mobilePhoto4 = ref(null);

const bpmillerLogo = ref(null);
const bpmillerTerminal = ref(null);
const mobileMenu = ref(null);
const spotlightText = ref(null);
const scrollBubble = ref(null);

// Animation refs
const flash = ref(null);
const bounce = ref(null);

// Routing function
function RouteSpotlight(route) {
  emit("RouteApp", route);
}

// Control bubble function
function ControlAnimations(action) {
  console.log("heard");

  if (action == "start") {
    bounce.value.play();
    flash.value.play();
  } else if (action == "stop") {
    bounce.value.pause();
    flash.value.pause();
  }
}

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

  // // Animate in scroll bubble
  animate(
    scrollBubble.value,
    { opacity: [0, 1] },
    { delay: 1.1, duration: 1.3 }
  );

  // Bounce scroll bubble
  bounce.value = animate(
    scrollBubble.value,
    {
      transformOrigin: [
        "center bottom",
        "center bottom",
        "center bottom",
        "center bottom",
        "center bottom",
        "center bottom",
        "center bottom",
        "center bottom",
        "center bottom",
      ],
      transform: [
        "",
        "",
        "",
        "translate3d(0, -30px, 0) scaleY(1.1)",
        "scaleY(1.1)",
        "translate3d(0, -15px, 0) scaleY(1.05)",
        "translate3d(0, 0, 0) scaleY(0.95)",
        "translate3d(0, -4px, 0) scaleY(1.02)",
        "translate3d(0, 0, 0)",
      ],
    },
    {
      delay: 3,
      // offset: [0, 0.2, 0.4, 0.43, 0.53, 0.7, 0.8, 0.9, 1],
      offset: [0, 0.066, 0.133, 0.143, 0.176, 0.233, 0.266, 0.3, 0.333, 1],
      easing: [
        "ease",
        "ease",
        "ease",
        [0.755, 0.05, 0.855, 0.06],
        "ease",
        [0.755, 0.05, 0.855, 0.06],
        [0.215, 0.61, 0.355, 1],
        "ease",
        [0.215, 0.61, 0.355, 1],
      ],
      duration: 3,
      repeat: Infinity,
    }
  );

  // Flash terminal in logo
  flash.value = animate(
    bpmillerTerminal.value,
    { opacity: ["", "", "", 0, ""] },
    {
      delay: 2,
      offset: [0, 0.25, 0.5, 0.75],
      easing: "ease",
      duration: 1,
      repeat: Infinity,
      allowWebkitAcceleration: true,
    }
  );

  // Scrolling paralax function
  scroll(
    timeline(sequence, {
      direction: "alternate",
    })
  );
});
</script>

<template>
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
        <div ref="bpmillerTerminal">
          <SvgHandler name="BpmillerLogoTerminal" />
        </div>
      </div>
      <!-- Menu -->
      <div ref="mobileMenu" class="mr-5 opacity-0">
        <MobileMenu
          @route-spotlight="RouteSpotlight"
          @control-animations="ControlAnimations"
        />
      </div>
    </div>
  </div>
</template>
