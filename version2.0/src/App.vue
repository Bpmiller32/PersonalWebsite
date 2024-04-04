<script setup lang="ts">
import { onMounted, ref } from "vue";
import Experience from "./webgl/experience.ts";
import Spotlight from "./sections/Spotlight.vue";

const webglRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const webglExperience = Experience.getInstance();
  webglExperience.configure(webglRef.value);
});
</script>

<template>
  <main class="relative">
    <canvas ref="webglRef" class="fixed top-0 left-0 outline-none z-0"></canvas>
    <!-- <Spotlight class="relative"></Spotlight>
    <div class="relative h-[100vh] text-white">test</div>
    <div class="relative h-[100vh] text-white">test</div> -->
  </main>
</template>
