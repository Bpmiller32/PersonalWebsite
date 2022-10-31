<script setup>
import NavItem from "./NavItem.vue";
</script>

<template>
  <nav>
    <ul
      class="mt-10 flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
    >
      <NavItem linkName="Home" />
      <NavItem linkName="About" />
      <NavItem linkName="Projects" />
      <NavItem linkName="Photos" />
    </ul>
  </nav>
</template>
