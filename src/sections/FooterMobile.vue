<script setup>
// Vue
const emit = defineEmits(["RouteApp"]);

const year = new Date().getFullYear();

// Routing function
function RouteFooter(route) {
  emit("RouteApp", route);
}
</script>

<template>
  <section class="mx-5 mt-5 mb-10">
    <!-- Divider -->
    <div class="my-5 h-0.5 bg-zinc-200"></div>

    <!-- Container to center links -->
    <div class="flex justify-center">
      <!-- Container to space links apart -->
      <div class="flex justify-around space-x-5">
        <button @click="RouteFooter('about')" class="group">
          <p class="text-zinc-200 font-poppins group-hover:text-bteal-50">
            About
          </p>
        </button>
        <button @click="RouteFooter('work')" class="group">
          <p class="text-zinc-200 font-poppins group-hover:text-bteal-50">
            Work
          </p>
        </button>
        <button @click="RouteFooter('projects')" class="group">
          <p class="text-zinc-200 font-poppins group-hover:text-bteal-50">
            Projects
          </p>
        </button>
        <button @click="RouteFooter('contact')" class="group">
          <p class="text-zinc-200 font-poppins group-hover:text-bteal-50">
            Contact
          </p>
        </button>
      </div>
    </div>
    <!-- Designed by -->
    <p class="flex justify-center mt-5 text-zinc-200 font-poppins">
      © {{ year }} | Designed by Billy Miller
    </p>
  </section>
</template>
