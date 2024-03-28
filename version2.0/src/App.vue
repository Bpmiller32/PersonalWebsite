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
  <!-- <canvas ref="webgl" class="fixed top-0 left-0 outline-none"></canvas> -->
  <Spotlight></Spotlight>
  <canvas ref="webglRef" class=""></canvas>
</template>
