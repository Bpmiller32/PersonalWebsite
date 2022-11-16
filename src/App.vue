<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header class="fixed inset-0 flex justify-center sm:px-8">
    <div class="w-full bg-zinc-900 ring-1 ring-zinc-300/20"></div>
  </header>

  <NavBar />
  <!-- <div class="min-h-[900px]">blank</div> -->

  <router-view />

  <div class="min-h-[900px]">blank</div>
</template>
