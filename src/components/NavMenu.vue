<script setup>
// Vue
const emit = defineEmits(["RouteLink1"]);

// Routing function
function RouteLink2(route) {
  emit("RouteLink1", route);
}
</script>

<template>
  <nav class="flex-none mx-24">
    <div
      class="flex rounded-full px-3 text-sm font-poppins text-zinc-200 shadow-lg ring-1 ring-gray-800 backdrop-blur bg-gray-800"
    >
      <button
        @click="RouteLink2('about')"
        class="px-3 py-2.5 hover:text-bteal-50"
      >
        About
      </button>
      <button
        @click="RouteLink2('work')"
        class="px-3 py-2.5 hover:text-bteal-50"
      >
        Work
      </button>
      <button
        @click="RouteLink2('projects')"
        class="px-3 py-2.5 hover:text-bteal-50"
      >
        Projects
      </button>
      <button
        @click="RouteLink2('contact')"
        class="px-3 py-2.5 hover:text-bteal-50"
      >
        Contact
      </button>
    </div>
  </nav>
</template>
