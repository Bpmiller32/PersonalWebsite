<script setup>
// Vue
const props = defineProps(["color", "divsize"]);
</script>

<template>
  <!-- WorkCard -->
  <div class="max-w-sm w-full mt-5 rounded-2xl border-2 border-zinc-700/40">
    <!-- Heading -->
    <div class="flex justify-center items-center mt-5 space-x-5">
      <!-- Heading Image -->
      <slot name="icon">
        <div class="w-12 h-12 rounded-full bg-red-500"></div>
      </slot>

      <!-- Heading text -->
      <div class="relative text-zinc-200 font-poppins font-bold text-2xl">
        <div
          :class="['absolute mt-[1.15rem] h-2 w-full opacity-80', props.color]"
        ></div>
        <slot name="title">
          <p class="relative">Heading</p>
        </slot>
      </div>
    </div>

    <!-- Description -->
    <div class="relative flex justify-center items-center">
      <!-- Description bracket -->
      <div class="text-zinc-700 font-poppins font-bold">
        <!-- Top "open div text" -->
        <p class="mt-5">&lt;div&gt;</p>
        <!-- Vertical bar -->
        <div class="flex justify-center">
          <div class="w-[0.15rem] bg-zinc-700" :class="props.divsize"></div>
        </div>
        <!-- Bottom "close div text" -->
        <p class="mb-5">&lt;/div&gt;</p>
      </div>
      <!-- Description text -->
      <div class="-ml-2 text-zinc-200 font-poppins text-[0.93rem]">
        <slot name="description"> Description </slot>
      </div>
    </div>
  </div>
</template>
