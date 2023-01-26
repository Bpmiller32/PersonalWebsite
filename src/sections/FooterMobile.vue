<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <section class="mx-5 mt-5 mb-10">
    <div class="my-5 h-0.5 bg-white"></div>
    <div class="flex justify-around">
      <div class="flex space-x-5">
        <a href="#" class="group">
          <p class="text-gray-100 font-poppins group-hover:text-bteal-50">
            About
          </p>
        </a>
        <a href="#" class="group">
          <p class="text-gray-100 font-poppins group-hover:text-bteal-50">
            Work
          </p>
        </a>
        <a href="#" class="group">
          <p class="text-gray-100 font-poppins group-hover:text-bteal-50">
            Projects
          </p>
        </a>
        <a href="#" class="group">
          <p class="text-gray-100 font-poppins group-hover:text-bteal-50">
            Contact
          </p>
        </a>
      </div>
    </div>
    <p class="flex justify-center mt-5 text-gray-100 font-poppins">
      © {{ year }} | Designed by Billy Miller
    </p>
  </section>
</template>
