<script setup>
import HomePage from "./components/HomePage.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="fixed w-full h-full bg-black">
    <div class="fixed flex justify-center w-full h-full max-w-7xl sm:px-8">
      <div class="w-full bg-zinc-900 ring-1 ring-zinc-300/20"></div>
    </div>
    <NavBar />

    <router-view />
  </div>
</template>
