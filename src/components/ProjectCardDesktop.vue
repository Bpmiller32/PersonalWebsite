<script setup>
// Js
import SvgHandler from "./SvgHandler.vue";

// Vue
const props = defineProps(["projlinks", "mirror"]);
</script>

<template>
  <!-- ProjectCard -->
  <div class="animateFadeUp p-6 bg-gray-800 font-poppins">
    <!-- Container for content -->
    <div
      :class="{
        'flex justify-center': true,
        'flex-row-reverse': props.mirror == true,
      }"
    >
      <!-- Container for logo, title links, tech -->
      <div
        :class="{ 'w-1/2 flex': true, 'justify-end': props.mirror == false }"
      >
        <!-- Container to center, give background and size -->
        <div
          class="w-5/6 bg-bzync-50 border-[30px] rounded-3xl border-bzync-50"
        >
          <!-- Logo -->
          <div class="mt-5">
            <slot name="logo">
              <div class="rounded-full w-20 h-20 bg-red-500"></div>
            </slot>
          </div>
          <!-- Title -->
          <div class="mt-5 text-zinc-200 font-poppins font-bold text-2xl">
            <slot name="title"> Project Title </slot>
          </div>
          <!-- Links -->
          <div v-if="props.projlinks" class="mt-1 flex">
            <div class="flex items-center group">
              <SvgHandler name="ProjectLink" />
              <div
                class="ml-1 mr-3 text-zinc-200 font-poppins font-bold group-hover:text-bteal-50"
              >
                <slot name="link1"> bpmiller.com </slot>
              </div>
            </div>
            <div class="flex items-center group">
              <SvgHandler name="ProjectLink" />
              <div
                class="ml-1 text-zinc-200 font-poppins font-bold group-hover:text-bteal-50"
              >
                <slot name="link2"> bpmiller.com </slot>
              </div>
            </div>
          </div>
          <!-- Description -->
          <div class="text-zinc-400 mt-10">
            <slot name="description"> Description of project </slot>
          </div>
          <!-- Technology used -->
          <div class="text-zinc-200 mt-5">Technology used</div>
          <!-- Project languages icon -->
          <div class="text-zinc-400 flex items-center">
            <slot name="technology">
              List of technologies used in the project
            </slot>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div
        :class="{
          'w-1/2 flex justify-center items-center': true,
        }"
      >
        <!-- Container to center, give size -->
        <div class="w-4/5">
          <slot name="image">
            <div class="w-48 h-48 bg-red-500"></div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
