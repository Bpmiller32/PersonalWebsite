<script setup>
const props = defineProps({
  isExternal: { type: Boolean, required: false, default: false },
  destination: { type: String, required: true },
});
</script>

<template>
  <a v-if="props.isExternal" :href="props.destination">
    <slot />
  </a>
  <router-link v-else :to="props.destination">
    <slot />
  </router-link>
</template>
