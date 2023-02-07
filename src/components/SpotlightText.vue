<script setup>
// Js
import { ref, onMounted } from "vue";
import { animate } from "motion";

const appWidth = ref(null);

let textStatus = {
  hi: { inProgress: false, color: "teal" },
  my: { inProgress: false, color: "teal" },
  name: { inProgress: false, color: "teal" },
  is: { inProgress: false, color: "teal" },
  billy: { inProgress: false, color: "white" },
  miller: { inProgress: false, color: "white" },
  software: { inProgress: false, color: "teal" },
  engineer: { inProgress: false, color: "teal" },
  full: { inProgress: false, color: "teal" },
  stack: { inProgress: false, color: "teal" },
  and: { inProgress: false, color: "pink" },
  desktop: { inProgress: false, color: "teal" },
};

async function Rubberband(event, word) {
  // Check if animation is already in progress
  if (textStatus[word].inProgress == true) {
    return;
  } else {
    textStatus[word].inProgress = true;

    // // Basic rubberband
    // await animate(
    //   event.target,
    //   {
    //     transform: [
    //       "scale3d(1, 1, 1)",
    //       "scale3d(1.25, 0.75, 1)",
    //       "scale3d(0.75, 1.25, 1)",
    //       "scale3d(1.15, 0.85, 1)",
    //       "scale3d(0.95, 1.05, 1)",
    //       "scale3d(1.05, 0.95, 1)",
    //       "scale3d(1, 1, 1)",
    //     ],
    //   },
    //   { offset: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1], duration: 1 }
    // ).finished;

    // Check color rubberband
    if (textStatus[word].color == "teal") {
      await animate(
        event.target,
        {
          color: ["#BB77FF", "", "", "", "", "", "#66D9ED"],

          transform: [
            "scale3d(1, 1, 1)",
            "scale3d(1.25, 0.75, 1)",
            "scale3d(0.75, 1.25, 1)",
            "scale3d(1.15, 0.85, 1)",
            "scale3d(0.95, 1.05, 1)",
            "scale3d(1.05, 0.95, 1)",
            "scale3d(1, 1, 1)",
          ],
        },
        { offset: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1], duration: 1 }
      ).finished;
    } else if (textStatus[word].color == "white") {
      await animate(
        event.target,
        {
          color: ["#66D9ED", "", "", "", "", "", "white"],

          transform: [
            "scale3d(1, 1, 1)",
            "scale3d(1.25, 0.75, 1)",
            "scale3d(0.75, 1.25, 1)",
            "scale3d(1.15, 0.85, 1)",
            "scale3d(0.95, 1.05, 1)",
            "scale3d(1.05, 0.95, 1)",
            "scale3d(1, 1, 1)",
          ],
        },
        { offset: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1], duration: 1 }
      ).finished;
    } else {
      await animate(
        event.target,
        {
          color: ["#66D9ED", "", "", "", "", "", "#BB77FF"],

          transform: [
            "scale3d(1, 1, 1)",
            "scale3d(1.25, 0.75, 1)",
            "scale3d(0.75, 1.25, 1)",
            "scale3d(1.15, 0.85, 1)",
            "scale3d(0.95, 1.05, 1)",
            "scale3d(1.05, 0.95, 1)",
            "scale3d(1, 1, 1)",
          ],
        },
        { offset: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1], duration: 1 }
      ).finished;
    }

    // Animation finished
    textStatus[word].inProgress = false;
  }
}

onMounted(() => {
  // Set app dimensions on mount and on browser window resize
  appWidth.value = window.innerWidth;

  window.addEventListener("resize", () => {
    appWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <!-- SpotlightText -->
  <div
    class="font-poppins font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
  >
    <!-- Line 1 -->
    <div class="'text-lg text-bteal-50 flex">
      <p @mouseenter="Rubberband($event, 'hi')" class="mr-1">
        <span>H</span>
        <span
          class="text-bpink-50 relative before:absolute before:left-[-0.3px] before:text-bteal-50 before:content-['ı']"
          >i</span
        >
      </p>

      <p @mouseenter="Rubberband($event, 'my')" class="mr-1">my</p>

      <p @mouseenter="Rubberband($event, 'name')" class="mr-1">name</p>

      <p @mouseenter="Rubberband($event, 'is')">
        <span
          class="text-bpink-50 relative before:absolute before:left-[-0.3px] before:text-bteal-50 before:content-['ı']"
          >i</span
        >
        <span>s</span>
      </p>
    </div>

    <!-- Line 2 -->
    <div
      :class="{
        'text-white flex flex-wrap': true,
        'text-4xl space-x-2': appWidth <= 600,
        'text-6xl space-x-4': appWidth > 600,
      }"
    >
      <p @mouseenter="Rubberband($event, 'billy')">Billy</p>
      <p @mouseenter="Rubberband($event, 'miller')">Miller</p>
    </div>

    <!-- Lines 3 and 4 container -->
    <div v-if="appWidth > 700">
      <!-- Line 3 -->
      <div class="mt-3 text-bteal-50 flex flex-wrap text-6xl space-x-4">
        <p @mouseenter="Rubberband($event, 'software')">Software</p>

        <p @mouseenter="Rubberband($event, 'engineer')">
          <span>Eng</span>
          <span
            class="text-bpink-50 relative before:absolute before:left-[-0.8px] before:text-bteal-50 before:content-['ı']"
            >i</span
          >
          <span>neer</span>
        </p>
      </div>

      <!-- Line 4 -->
      <div class="mt-3 flex flex-wrap text-6xl space-x-4">
        <p @mouseenter="Rubberband($event, 'full')" class="text-bteal-50">
          Full
        </p>

        <p @mouseenter="Rubberband($event, 'stack')" class="text-bteal-50">
          stack
        </p>

        <p @mouseenter="Rubberband($event, 'and')" class="text-bpink-50">&</p>

        <p @mouseenter="Rubberband($event, 'desktop')" class="text-bteal-50">
          Desktop
        </p>
      </div>
    </div>

    <div v-else-if="appWidth <= 700 && appWidth > 600">
      <!-- Line 3 -->
      <div class="mt-5 text-bteal-50 text-6xl">
        <p @mouseenter="Rubberband($event, 'software')">Software</p>

        <p @mouseenter="Rubberband($event, 'engineer')">
          <span>Eng</span>
          <span
            class="text-bpink-50 relative before:absolute before:left-[-0.8px] before:text-bteal-50 before:content-['ı']"
            >i</span
          >
          <span>neer</span>
        </p>
      </div>

      <!-- Line 4 -->
      <div class="mt-5 text-6xl">
        <div class="flex space-x-4">
          <p @mouseenter="Rubberband($event, 'full')" class="text-bteal-50">
            Full
          </p>

          <p @mouseenter="Rubberband($event, 'stack')" class="text-bteal-50">
            stack
          </p>
        </div>

        <div class="flex space-x-4">
          <p @mouseenter="Rubberband($event, 'and')" class="text-bpink-50">&</p>

          <p @mouseenter="Rubberband($event, 'desktop')" class="text-bteal-50">
            Desktop
          </p>
        </div>
      </div>
    </div>

    <div v-else-if="appWidth <= 600 && appWidth > 400">
      <!-- Line 3 -->
      <div class="mt-1 text-bteal-50 text-4xl flex space-x-2">
        <p @mouseenter="Rubberband($event, 'software')">Software</p>

        <p @mouseenter="Rubberband($event, 'engineer')">
          <span>Eng</span>
          <span
            class="text-bpink-50 relative before:absolute before:left-[-0.8px] before:text-bteal-50 before:content-['ı']"
            >i</span
          >
          <span>neer</span>
        </p>
      </div>

      <!-- Line 4 -->
      <div class="mt-1 text-4xl flex space-x-2">
        <p @mouseenter="Rubberband($event, 'full')" class="text-bteal-50">
          Full
        </p>

        <p @mouseenter="Rubberband($event, 'stack')" class="text-bteal-50">
          stack
        </p>

        <p @mouseenter="Rubberband($event, 'and')" class="text-bpink-50">&</p>

        <p @mouseenter="Rubberband($event, 'desktop')" class="text-bteal-50">
          Desktop
        </p>
      </div>
    </div>

    <div v-else>
      <!-- Line 3 -->
      <div class="mt-3 text-bteal-50 text-4xl">
        <p @mouseenter="Rubberband($event, 'software')">Software</p>

        <p @mouseenter="Rubberband($event, 'engineer')">
          <span>Eng</span>
          <span
            class="text-bpink-50 relative before:absolute before:left-[-0.8px] before:text-bteal-50 before:content-['ı']"
            >i</span
          >
          <span>neer</span>
        </p>
      </div>

      <!-- Line 4 -->
      <div class="mt-3 text-4xl">
        <div class="flex space-x-2">
          <p @mouseenter="Rubberband($event, 'full')" class="text-bteal-50">
            Full
          </p>

          <p @mouseenter="Rubberband($event, 'stack')" class="text-bteal-50">
            stack
          </p>
        </div>

        <div class="flex space-x-2">
          <p @mouseenter="Rubberband($event, 'and')" class="text-bpink-50">&</p>

          <p @mouseenter="Rubberband($event, 'desktop')" class="text-bteal-50">
            Desktop
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
