<script setup>
// Vue
const emit = defineEmits(["RouteLink0"]);

const year = new Date().getFullYear();

// Routing function
function RouteLink1(route) {
  emit("RouteLink0", route);
}
</script>

<template>
  <!-- Footer section -->
  <section class="mx-5 mt-5 mb-10">
    <!-- Divider -->
    <div class="my-5 h-0.5 bg-zinc-200"></div>

    <!-- Container to center links -->
    <div class="flex justify-center">
      <!-- Container to space links apart -->
      <div class="flex justify-around space-x-5">
        <button
          aria-label="footer link to about section"
          @click="RouteLink1('about')"
          class="group"
        >
          <p class="text-zinc-200 font-poppins group-hover:text-bteal-50">
            About
          </p>
        </button>
        <button
          aria-label="footer link to work section"
          @click="RouteLink1('work')"
          class="group"
        >
          <p class="text-zinc-200 font-poppins group-hover:text-bteal-50">
            Work
          </p>
        </button>
        <button
          aria-label="footer link to projects section"
          @click="RouteLink1('projects')"
          class="group"
        >
          <p class="text-zinc-200 font-poppins group-hover:text-bteal-50">
            Projects
          </p>
        </button>
        <button
          aria-label="footer link to contact section"
          @click="RouteLink1('contact')"
          class="group"
        >
          <p class="text-zinc-200 font-poppins group-hover:text-bteal-50">
            Contact
          </p>
        </button>
      </div>
    </div>
    <!-- Designed by -->
    <p class="flex justify-center mt-5 text-zinc-200 font-poppins">
      {{ year }} | Designed by Billy Miller
    </p>
  </section>
</template>
