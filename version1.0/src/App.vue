<script setup>
// Js
import { ref, onMounted } from "vue";

// Pages
import MobilePage from "./pages/MobilePage.vue";
import DesktopPage from "./pages/DesktopPage.vue";

// Refs
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
  <div v-if="appWidth <= 850">
    <MobilePage />
  </div>
  <div v-else>
    <DesktopPage />
  </div>
</template>
