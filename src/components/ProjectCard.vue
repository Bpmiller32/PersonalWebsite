<script setup>
// Js
import { ref, onMounted } from "vue";

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
    <div class="mt-5 text-white font-poppins font-bold text-2xl">
      <slot name="title"> Project Title </slot>
    </div>
    <!-- Links -->
    <div v-if="props.projlinks">
      <div v-if="appWidth <= 349" class="mt-1">
        <div class="flex items-center">
          <div class="rounded-full bg-red-500 h-5 w-5 flex-none"></div>
          <div class="ml-1 mr-3 text-white font-poppins font-bold">
            <slot name="link1"> bpmiller.com </slot>
          </div>
        </div>
        <div class="flex items-center">
          <div class="rounded-full bg-red-500 h-5 w-5 flex-none"></div>
          <div class="ml-1 text-white font-poppins font-bold">
            <slot name="link2"> bpmiller.com </slot>
          </div>
        </div>
      </div>
      <div v-else class="mt-1 flex">
        <div class="flex items-center">
          <div class="rounded-full bg-red-500 h-5 w-5 flex-none"></div>
          <div class="ml-1 mr-3 text-white font-poppins font-bold">
            <slot name="link1"> bpmiller.com </slot>
          </div>
        </div>
        <div class="flex items-center">
          <div class="rounded-full bg-red-500 h-5 w-5 flex-none"></div>
          <div class="ml-1 text-white font-poppins font-bold">
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
    <div class="text-zinc-400 flex items-start">
      <!-- Project languages icon -->
      <div
        v-if="props.projtype == 'c#'"
        class="h-5 w-5 rounded-full bg-purple-500 mt-0.5 mr-2 flex-none"
      ></div>
      <div
        v-if="props.projtype == 'js'"
        class="h-5 w-5 rounded-full bg-yellow-500 mt-0.5 mr-2 flex-none"
      ></div>

      <slot name="technology"> List of technologies used in the project </slot>
    </div>
  </div>
</template>
