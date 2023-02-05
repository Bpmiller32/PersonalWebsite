<script setup>
// Js
import { ref, onMounted } from "vue";
import { animate, timeline, scroll } from "motion";

// Components
import SvgHandler from "../components/SvgHandler.vue";
import NavMenu from "../components/NavMenu.vue";

// Vue
const emit = defineEmits(["RouteLink0"]);
const appWidth = ref(null);
const appHeight = ref(null);
const sectionHeight = ref(null);

// Animation refs
const flash = ref(null);
const bounce = ref(null);

// Routing function
function RouteLink1(route) {
  emit("RouteLink0", route);
}

// Reload page
function ReloadPage() {
  window.location.reload();
}

// Calculate spotlight section height
function CalculateHeight() {
  const imageWidth = 1360;
  const imageHeight = 906;
  let renderedHeight;

  if (appWidth.value >= imageWidth) {
    renderedHeight = imageHeight;
  } else {
    renderedHeight = imageHeight * (appWidth.value / imageWidth);
  }

  return renderedHeight;
}

onMounted(() => {
  // Set spotlight section dimensions on mount and on browser window resize
  appWidth.value = window.innerWidth;
  appHeight.value = window.innerHeight;

  const spotlightSection = document.querySelector("#spotlightSection");
  const scrollBubble = document.querySelector("#scrollBubble");
  const spotlightText = document.querySelector("#spotlightText");
  const opacityOverlay = document.querySelector("#opacityOverlay");

  sectionHeight.value = CalculateHeight();
  console.log(sectionHeight.value + "px");

  spotlightSection.style.height = sectionHeight.value + "px";
  scrollBubble.style.height = sectionHeight.value + "px";
  spotlightText.style.height = sectionHeight.value + "px";
  opacityOverlay.style.height = sectionHeight.value + "px";

  window.addEventListener("resize", () => {
    appWidth.value = window.innerWidth;

    sectionHeight.value = CalculateHeight();

    spotlightSection.style.height = sectionHeight.value + "px";
    scrollBubble.style.height = sectionHeight.value + "px";
    spotlightText.style.height = sectionHeight.value + "px";
    opacityOverlay.style.height = sectionHeight.value + "px";
  });

  // console.log("appWidth", appWidth.value);
  // console.log("renderedWidth: ", renderedWidth);
  // console.log("renderedHeight: ", renderedHeight);

  // // Height
  // if (appHeight.value <= 853) {
  //   spotlightSection.style.height = appHeight.value + "px";
  // } else {
  //   spotlightSection.style.height = "853px";

  //   // Width
  //   if (appWidth.value < 1392) {
  //     console.log("newHeight: ", appHeight.value * aspectRatio.value);
  //     spotlightSection.style.height =
  //       appHeight.value * aspectRatio.value + "px";
  //   }
  // }

  // Create sequence here because photo needs to be mounted to assign animation to photoX.value
  const sequence = [
    ["#mobilePhoto0", { y: 550 }, { at: 0, duration: 1 }],
    ["#mobilePhoto1", { y: 600 }, { at: 0, duration: 1 }],
    ["#mobilePhoto2", { y: 500 }, { at: 0, duration: 1 }],
    ["#mobilePhoto3", { y: -250 }, { at: 0, duration: 1 }],
    ["#mobilePhoto4", { y: -500 }, { at: 0, duration: 1 }],
    ["#spotlightSection", { y: 1000 }, { at: 0, duration: 1 }],
    ["#paralaxOverlay", { y: -600 }, { at: 0, duration: 1 }],
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
  <!-- Spotlight section -->
  <section class="flex justify-center">
    <!-- Testing -->
    <!-- <div class="absolute bg-red-500 w-[1920px] h-[1080px] z-10"></div>
    <div class="absolute bg-green-500 w-[1800px] h-[1080px] z-20"></div>
    <div class="absolute bg-blue-500 w-[1725px] h-[1080px] z-20"></div> -->

    <!-- Container for content -->
    <div id="spotlightSection" class="w-full max-w-bspotlight relative">
      <!-- Opacity overlay -->
      <div
        id="opacityOverlay"
        class="absolute w-full bg-black opacity-25 z-10"
      ></div>

      <!-- Overlay to block scrolling into next section -->
      <img
        id="paralaxOverlay"
        class="absolute mt-[1.18rem] z-10"
        src="..\assets\desktop\overlay.webp"
        alt="Ocean background image"
      />

      <!-- Ocean background image -->
      <img
        id="mobilePhoto0"
        class="absolute"
        src="..\assets\desktop\photo0.webp"
        alt="Ocean background image"
      />
      <!-- Back left rock image -->
      <img
        id="mobilePhoto1"
        class="absolute"
        src="..\assets\desktop\photo1.webp"
        alt="Back left rock image"
      />
      <!-- Main left cliff image -->
      <img
        id="mobilePhoto2"
        class="absolute"
        src="..\assets\desktop\photo2.webp"
        alt="Main left cliff image"
      />

      <!-- Spotlight text -->
      <div
        id="spotlightText"
        class="animateFadeInFast absolute w-3/5 flex items-center z-20"
      >
        <SvgHandler name="SpotlightText" />
      </div>

      <!-- Back foreground rock image -->
      <img
        id="mobilePhoto3"
        class="absolute"
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
        class="absolute mt-[1.18rem]"
        src="..\assets\desktop\photo4.webp"
        alt="Front forground rock and person image"
      />

      <!-- Menu, logo -->
      <div
        class="mt-20 absolute w-full max-w-bspotlight flex justify-between items-center z-20"
      >
        <!-- Logo -->
        <button
          @click="ReloadPage"
          class="animateFadeInFast ml-10 flex items-center"
        >
          <SvgHandler name="BpmillerLogoText" />
          <div id="bpmillerTerminal">
            <SvgHandler name="BpmillerLogoTerminal" />
          </div>
        </button>
        <!-- NavBar -->
        <NavMenu @route-link1="RouteLink1" />
        <!-- Blank -->
        <div class="shrink w-[225px] h-1 mr-10"></div>
      </div>
    </div>
  </section>
</template>
