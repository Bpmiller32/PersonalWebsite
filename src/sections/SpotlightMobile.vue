<script setup>
// Js
import { ref, onMounted } from "vue";
import { animate, timeline, scroll } from "motion";
// Components
import SvgHandler from "../components/SvgHandler.vue";
import MobileMenu from "../components/MobileMenu.vue";
// Vue
const emit = defineEmits(["RouteApp"]);

// Animation refs
const flash = ref(null);
const bounce = ref(null);

// Routing function
function RouteSpotlight(route) {
  emit("RouteApp", route);
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

onMounted(() => {
  // Create sequence here because photo needs to be mounted to assign animation to photoX.value
  const sequence = [
    ["#mobilePhoto0", { y: 1000 }, { at: 0, duration: 1 }],
    ["#mobilePhoto1", { y: 1400 }, { at: 0, duration: 1 }],
    ["#mobilePhoto2", { y: 1000 }, { at: 0, duration: 1 }],
    ["#mobilePhoto3", { y: -250 }, { at: 0, duration: 1 }],
    ["#mobilePhoto4", { y: -500 }, { at: 0, duration: 1 }],
    ["#spotlightSection", { y: 500 }, { at: 0, duration: 1 }],
  ];

  // Animate in nav bar, spotlight text
  animate(".animateFadeInFast", { opacity: [0, 1] }, { duration: 1.3 });

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
      // offset: [0, 0.2, 0.4, 0.43, 0.53, 0.7, 0.8, 0.9, 1, ...extra] base rule,
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
      // 50%, 75%, 100%, 150%, 175%, 200%, extra
      opacity: [1, 0, 1, 1, 0, 1, 1],
    },
    {
      delay: 0.5,
      // 50%, 75%, 100%, 150%, 175%, 200%, extra
      offset: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
      easing: "ease",
      duration: 5,
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
  <div id="spotlightSection" class="relative h-screen">
    <!-- Ocean background image -->
    <img
      id="mobilePhoto0"
      class="object-cover absolute h-screen"
      src="..\assets\mobile\photo0.webp"
      alt="Ocean background image"
    />
    <!-- Back left rock image -->
    <img
      id="mobilePhoto1"
      class="object-cover absolute h-screen"
      src="..\assets\mobile\photo1.webp"
      alt="Back left rock image"
    />
    <!-- Main left cliff image -->
    <img
      id="mobilePhoto2"
      class="object-cover absolute h-screen"
      src="..\assets\mobile\photo2.webp"
      alt="Main left cliff image"
    />

    <!-- Spotlight text -->
    <div
      class="animateFadeInFast absolute h-screen w-full flex justify-center items-center opacity-0"
    >
      <SvgHandler name="SpotlightText" />
    </div>
    <!-- <div
      class="animateFadeInFast absolute h-screen w-full flex justify-center items-center font-poppins font-bold"
    >
      <h1>
        <div class="text-xl text-bteal-50">
          <span>H</span>
          <span>i</span>
          <span>m</span>
          <span>y</span>
          <span>n</span>
          <span>a</span>
          <span>m</span>
          <span>e</span>
          <span>i</span>
          <span>s</span>
        </div>
        <div class="text-5xl text-bteal-50">
          <span>B</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span>y</span>
          <span>M</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>r</span>
        </div>
        <div class="text-5xl text-bteal-50">
          <span>S</span>
          <span>o</span>
          <span>f</span>
          <span>t</span>
          <span>w</span>
          <span>a</span>
          <span>r</span>
          <span>e</span>
          <span>E</span>
          <span>n</span>
          <span>g</span>
          <span>i</span>
          <span>n</span>
          <span>e</span>
          <span>e</span>
          <span>r</span>
        </div>
        <div class="text-5xl text-bteal-50">
          <span>F</span>
          <span>u</span>
          <span>l</span>
          <span>l</span>
          <span>S</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>k</span>
          <span>&</span>
          <span>D</span>
          <span>e</span>
          <span>s</span>
          <span>k</span>
          <span>t</span>
          <span>o</span>
          <span>p</span>
        </div>
      </h1>
    </div> -->

    <!-- Back foreground rock image -->
    <img
      id="mobilePhoto3"
      class="object-cover absolute h-screen"
      src="..\assets\mobile\photo3.webp"
      alt="Back foreground rock image"
    />

    <!-- ScrollBubble -->
    <div id="scrollBubble" class="absolute h-screen w-full flex justify-center">
      <SvgHandler name="ScrollBubble" />
    </div>

    <!-- Front forground rock and person image -->
    <img
      id="mobilePhoto4"
      class="object-cover absolute h-screen"
      src="..\assets\mobile\photo4.webp"
      alt="Front forground rock and person image"
    />

    <!-- Menu, logo -->
    <div class="mt-20 absolute w-full flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="animateFadeInFast ml-5 flex items-center opacity-0">
        <SvgHandler name="BpmillerLogoText" />
        <div id="bpmillerTerminal">
          <SvgHandler name="BpmillerLogoTerminal" />
        </div>
      </a>
      <!-- Menu -->
      <div class="animateFadeInFast mr-5 opacity-0">
        <MobileMenu
          @route-spotlight="RouteSpotlight"
          @control-animations="ControlAnimations"
        />
      </div>
    </div>
  </div>
</template>
