<script setup>
// Js
import { ref, onMounted } from "vue";
import SvgHandler from "./SvgHandler.vue";

const props = defineProps(["projlinks", "projtype"]);

const appWidth = ref(null);

onMounted(() => {
  // Set app dimensions on mount and on browser window resize
  appWidth.value = window.innerWidth;

  window.addEventListener("resize", () => {
    appWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <!-- ProjectCard -->
  <div
    class="animateFadeUp opacity-0 mt-5 rounded-2xl border-2 p-6 border-zinc-700 bg-bzync-50 font-poppins"
  >
    <!-- Image -->
    <div class="flex justify-center">
      <slot name="image">
        <div class="w-48 h-48 bg-red-500"></div>
      </slot>
    </div>
    <!-- Divider -->
    <div class="mt-5 h-[0.15rem] w-full bg-zinc-700"></div>
    <!-- Logo -->
    <div class="mt-5">
      <slot name="logo">
        <div class="rounded-full w-20 h-20 bg-red-500"></div>
      </slot>
    </div>

    <!-- Title -->
    <div class="mt-5 text-gray-100 font-poppins font-bold text-2xl">
      <slot name="title"> Project Title </slot>
    </div>
    <!-- Links -->
    <div v-if="props.projlinks">
      <div v-if="appWidth <= 349" class="mt-1">
        <div class="flex items-center">
          <SvgHandler name="ProjectLink" />
          <div class="ml-1 mr-3 text-gray-100 font-poppins font-bold">
            <slot name="link1"> bpmiller.com </slot>
          </div>
        </div>
        <div class="flex items-center">
          <SvgHandler name="ProjectLink" />
          <div class="ml-1 text-gray-100 font-poppins font-bold">
            <slot name="link2"> bpmiller.com </slot>
          </div>
        </div>
      </div>
      <div v-else class="mt-1 flex">
        <div class="flex items-center">
          <SvgHandler name="ProjectLink" />
          <div class="ml-1 mr-3 text-gray-100 font-poppins font-bold">
            <slot name="link1"> bpmiller.com </slot>
          </div>
        </div>
        <div class="flex items-center">
          <SvgHandler name="ProjectLink" />
          <div class="ml-1 text-gray-100 font-poppins font-bold">
            <slot name="link2"> bpmiller.com </slot>
          </div>
        </div>
      </div>
    </div>
    <!-- Description -->
    <div class="text-zinc-400 mt-10">
      <slot name="description"> Description of project </slot>
    </div>
    <!-- Technology used -->
    <div class="text-zinc-100 mt-5">Technology used</div>
    <!-- Project languages icon -->
    <div class="text-zinc-400 flex items-center">
      <slot name="technology"> List of technologies used in the project </slot>
    </div>
  </div>
</template>
