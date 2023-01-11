<script setup>
import NavBar from "./components/NavBar.vue";
import { animate, timeline, scroll, inView, spring } from "motion";
import { ref, onMounted, watch } from "vue";

const scrollBubble = ref(null);

onMounted(() => {
  // Scrolling paralax function
  scroll(animate(scrollBubble.value, { y: -800 }, { at: 0, duration: 1 }));
});
</script>

<template>
  <!-- <header class="fixed inset-0 flex justify-center sm:px-8">
    <div class="w-full bg-zinc-900 ring-1 ring-zinc-300/20"></div>
  </header> -->

  <NavBar />

  <!-- Scroll icon, put into component later -->
  <nav class="h-screen w-screen absolute">
    <div class="flex justify-center">
      <div ref="scrollBubble" class="absolute bottom-[3%] rounded-full z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="isolation: isolate"
          viewBox="0 0 25 25"
          class="h-20 w-20"
        >
          <defs>
            <clipPath id="_clipPath_ZNO1nLysBW6XvaT3wkiCjNQ1y8ucgg16">
              <rect width="25" height="25" />
            </clipPath>
          </defs>
          <g clip-path="url(#_clipPath_ZNO1nLysBW6XvaT3wkiCjNQ1y8ucgg16)">
            <line
              x1="8.667"
              y1="13.458"
              x2="12.5"
              y2="17.292"
              vector-effect="non-scaling-stroke"
              stroke-width="5"
              stroke="rgb(187,119,255)"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-miterlimit="4"
            />
            <line
              x1="12.5"
              y1="17.292"
              x2="16.333"
              y2="13.458"
              vector-effect="non-scaling-stroke"
              stroke-width="5"
              stroke="rgb(187,119,255)"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-miterlimit="4"
            />
            <line
              x1="12.5"
              y1="17.292"
              x2="12.5"
              y2="7.708"
              vector-effect="non-scaling-stroke"
              stroke-width="5"
              stroke="rgb(187,119,255)"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-miterlimit="4"
            />
            <circle
              vector-effect="non-scaling-stroke"
              cx="12.5"
              cy="12.500000000000005"
              r="11.5"
              fill="none"
              stroke-width="5"
              stroke="rgb(45,212,191)"
              stroke-linejoin="round"
              stroke-linecap="butt"
              stroke-miterlimit="4"
            />
          </g>
        </svg>
      </div>
    </div>
  </nav>

  <router-view />
</template>
