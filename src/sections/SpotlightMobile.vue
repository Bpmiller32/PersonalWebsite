<script setup>
import { animate, timeline, scroll, inView, spring } from "motion";
import { ref, onMounted, watch } from "vue";

// Template refs
const mobilePhoto0 = ref(null);
const mobilePhoto1 = ref(null);
const mobilePhoto2 = ref(null);
const mobilePhoto3 = ref(null);
const mobilePhoto4 = ref(null);

onMounted(() => {
  // Create sequence here because photo needs to be mounted to assign to paraX.value
  const sequence = [
    [mobilePhoto0.value, { y: 50 }, { at: 0, duration: 1 }],
    [mobilePhoto1.value, { y: 100 }, { at: 0, duration: 1 }],
    [mobilePhoto2.value, { y: -100 }, { at: 0, duration: 1 }],
    [mobilePhoto3.value, { y: -400 }, { at: 0, duration: 1 }],
    [mobilePhoto4.value, { y: -300 }, { at: 0, duration: 50 }],
    // [contentSections.value, { top: "0%" }, { at: 0, duration: 0.1 }],
  ];

  // Scrolling paralax function
  scroll(
    timeline(sequence, {
      direction: "alternate",
    })
  );
});
</script>

<template>
  <div class="relative h-screen">
    <img
      ref="mobilePhoto0"
      class="object-cover absolute h-screen"
      src="..\assets\mobilePhoto0.png"
    />
    <img
      ref="mobilePhoto1"
      class="object-cover absolute h-screen"
      src="..\assets\mobilePhoto1.png"
    />
    <img
      ref="mobilePhoto2"
      class="object-cover absolute h-screen"
      src="..\assets\mobilePhoto2.png"
    />
    <img
      ref="mobilePhoto3"
      class="object-cover absolute h-screen"
      src="..\assets\mobilePhoto3.png"
    />
    <img
      ref="mobilePhoto4"
      class="object-cover absolute h-screen"
      src="..\assets\mobilePhoto4.png"
    />
  </div>
</template>
