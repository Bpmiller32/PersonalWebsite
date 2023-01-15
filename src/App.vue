<script setup>
import { ref, onMounted } from "vue";

import MobilePage from "./pages/MobilePage.vue";
import DesktopPage from "./pages/DesktopPage.vue";

let appWidth = ref(null);

onMounted(() => {
  // Set app dimensions on mount and on browser window resize
  appWidth.value = window.innerWidth;

  window.addEventListener("resize", () => {
    appWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <div ref="contentMobile" v-if="appWidth <= 640">
    <MobilePage />
  </div>
  <div ref="contentDesktop" v-else>
    <DesktopPage />
  </div>
</template>
