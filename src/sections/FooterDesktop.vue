<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="mx-10 my-10">
    <div class="my-5 h-0.5 bg-white"></div>
    <div class="flex justify-between">
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
      <p class="text-gray-100 font-poppins">
        © {{ year }} | Designed by Billy Miller
      </p>
    </div>
  </footer>
</template>
