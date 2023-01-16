<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps(["linkName"]);
const isActive = ref(null);

if (useRoute().path === props.linkName) {
  isActive.value = true;
} else {
  isActive.value = false;
}
</script>

<template>
  <li
    class="px-3 py-2"
    :class="{
      'text-bteal-50': isActive,
      'hover:text-bteal-50': !isActive,
    }"
  >
    {{ props.linkName }}
    <!-- {{ useRoute().path }} -->
  </li>
</template>
