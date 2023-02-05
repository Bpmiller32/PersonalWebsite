<script setup>
// Js
import { ref, onMounted, render } from "vue";
import { animate, timeline, scroll } from "motion";

// Components
import SvgHandler from "../components/SvgHandler.vue";
import MobileMenu from "../components/MobileMenu.vue";
import { Portal } from "@headlessui/vue";

// Vue
const emit = defineEmits(["RouteLink0"]);
const portraitMode = ref(null);

// Animation refs
const flash = ref(null);
const bounce = ref(null);

// Routing function
function RouteLink1(route) {
  emit("RouteLink0", route);
}

// Control animations
function ControlAnimations(action) {
  if (action == "start") {
    bounce.value.play();
    flash.value.play();
  } else if (action == "stop") {
    bounce.value.pause();
    flash.value.pause();
  }
}

// Reload page
function ReloadPage() {
  window.location.reload();
}

// Calculate spotlight section height
function CalculateHeight() {
  // Detect portrait mode
  if (window.innerHeight > window.innerWidth) {
    return "100vh";
  }
  // Landscape mode
  else {
    // Calculate image rendered height
    const imageWidth = 1360;
    const imageHeight = 906;
    let renderedHeight;

    if (window.innerWidth >= imageWidth) {
      renderedHeight = imageHeight;
    } else {
      renderedHeight = imageHeight * (window.innerWidth / imageWidth);
    }

    return renderedHeight + "px";
  }
}

function SetHeight() {
  const sectionHeight = CalculateHeight();

  const sections = [
    "#mobilePhoto0",
    "#mobilePhoto1",
    "#mobilePhoto2",
    "#mobilePhoto3",
    "#mobilePhoto4",

    "#spotlightSection",
    "#scrollBubble",
    // "#spotlightText",
    "#opacityOverlay",
  ];

  sections.forEach((element) => {
    document.querySelector(element).style.height = sectionHeight;
  });
}

onMounted(() => {
  // Set spotlight section dimensions on mount and on browser window resize
  SetHeight();

  window.addEventListener("resize", () => {
    SetHeight();
  });

  // Create sequence here because photo needs to be mounted to assign animation to photoX.value
  const sequence = [
    ["#mobilePhoto0", { y: 1100 }, { at: 0, duration: 1 }],
    ["#mobilePhoto1", { y: 1300 }, { at: 0, duration: 1 }],
    ["#mobilePhoto2", { y: 1000 }, { at: 0, duration: 1 }],
    ["#mobilePhoto3", { y: -300 }, { at: 0, duration: 1 }],
    ["#mobilePhoto4", { y: -700 }, { at: 0, duration: 1 }],
    ["#spotlightSection", { y: 1000 }, { at: 0, duration: 1 }],
  ];

  // // Animate in scroll bubble
  animate("#scrollBubble", { opacity: [0, 1] }, { delay: 1.1, duration: 1.3 });

  // Bounce scroll bubble
  bounce.value = animate(
    "#scrollBubble",
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
      // offset: [0, 0.004, 0.008, 0.086, 0.106, 0.14, 0.16, 0.18, 0.2, 1] for 5 second,
      offset: [0, 0.05, 0.1, 0.1075, 0.1325, 0.175, 0.2, 0.225, 0.25, 1],
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
      duration: 4,
      repeat: Infinity,
    }
  );

  // Flash terminal in logo
  flash.value = animate(
    "#bpmillerTerminal",
    {
      opacity: [1, 0, 1, 1, 0, 1, 1],
    },
    {
      delay: 0.5,
      offset: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
      easing: "ease",
      duration: 5,
      repeat: Infinity,
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
  <div id="spotlightSection" class="relative flex justify-center">
    <!-- Opacity overlay -->
    <div
      id="opacityOverlay"
      class="absolute w-full bg-black opacity-25 z-10"
    ></div>

    <!-- Ocean background image -->
    <img
      id="mobilePhoto0"
      class="object-cover absolute"
      src="..\assets\desktop\photo0.webp"
      alt="Ocean background image"
    />
    <!-- Back left rock image -->
    <img
      id="mobilePhoto1"
      class="object-cover absolute"
      src="..\assets\desktop\photo1.webp"
      alt="Back left rock image"
    />
    <!-- Main left cliff image -->
    <img
      id="mobilePhoto2"
      class="object-cover absolute"
      src="..\assets\desktop\photo2.webp"
      alt="Main left cliff image"
    />

    <!-- Spotlight text -->
    <!-- <div
      id="spotlightText"
      class="animateFadeInFast absolute w-full h-[93vh] flex items-center z-20"
    >
      <SvgHandler name="SpotlightText" />
    </div> -->

    <!-- Back foreground rock image -->
    <img
      id="mobilePhoto3"
      class="object-cover absolute"
      src="..\assets\desktop\photo3.webp"
      alt="Back foreground rock image"
    />

    <!-- ScrollBubble -->
    <div
      id="scrollBubble"
      class="absolute h-screen w-full flex justify-center z-20"
    >
      <SvgHandler name="ScrollBubble" />
    </div>

    <!-- Front forground rock and person image -->
    <img
      id="mobilePhoto4"
      class="object-cover absolute"
      src="..\assets\desktop\photo4.webp"
      alt="Front forground rock and person image"
    />

    <!-- Menu, logo -->
    <div class="mt-20 absolute w-full flex justify-between items-center z-20">
      <!-- Logo -->
      <button
        aria-label="logo link to refresh home page"
        @click="ReloadPage"
        class="animateFadeInFast ml-5 flex items-center"
      >
        <SvgHandler name="BpmillerLogoText" />
        <div id="bpmillerTerminal">
          <SvgHandler name="BpmillerLogoTerminal" />
        </div>
      </button>
      <!-- Menu -->
      <div class="animateFadeInFast mr-5">
        <MobileMenu
          @route-link1="RouteLink1"
          @control-animations="ControlAnimations"
        />
      </div>
    </div>
  </div>
</template>
