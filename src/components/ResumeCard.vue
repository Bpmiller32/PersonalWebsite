<script setup>
// Js
import { ref, onMounted } from "vue";

// Components
import SvgHandler from "./SvgHandler.vue";

const appWidth = ref(null);

onMounted(() => {
  // Set app dimensions on mount and on browser window resize
  appWidth.value = window.innerWidth;

  window.addEventListener("resize", () => {
    appWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <!-- ResumeCard -->
  <div
    class="animateFadeUp max-w-md w-full mt-10 rounded-2xl border-2 p-6 border-zinc-700/40"
  >
    <!-- Heading -->
    <h2 class="flex items-center text-sm font-poppins text-zinc-200">
      <SvgHandler name="BriefcaseIcon" />
      <span class="ml-3">Work</span>
    </h2>
    <!-- Jobs container -->
    <div class="mt-6 space-y-4">
      <!-- JOBS LIST -->

      <!-- Freelance-->
      <div class="flex">
        <!-- Logo -->
        <div></div>
        <img
          class="mt-1 h-10 w-10 rounded-full flex flex-none"
          src="..\assets\common\datasea.webp"
          alt="Logo for LDOA"
        />

        <!-- CompanyName and Titles-->
        <div class="ml-3 w-full text-sm text-zinc-200 font-poppins">
          <!-- CompanyName -->
          <p>DataSea LLC</p>

          <!-- Titles -->
          <div v-if="appWidth <= 425">
            <div
              class="flex flex-wrap flex-none justify-between text-xs font-poppins"
            >
              <p class="text-zinc-400 w-full">Freelance Developer</p>
              <p class="text-zinc-500">2023 - Present</p>
            </div>
          </div>
          <div v-else>
            <div
              class="flex flex-wrap flex-none justify-between text-xs font-poppins"
            >
              <p class="text-zinc-400">Freelance Developer</p>
              <p class="text-zinc-500">2023 - Present</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Matthews-->
      <div class="flex">
        <!-- Logo -->
        <img
          class="mt-1 h-10 w-10 rounded-full flex flex-none"
          src="..\assets\common\matthews.webp"
          alt="Logo for Matthews"
        />

        <!-- CompanyName and Titles-->
        <div class="ml-3 w-full text-sm text-zinc-100 font-poppins">
          <!-- CompanyName -->
          <p>Matthews International</p>

          <!-- Titles -->
          <div v-if="appWidth <= 425">
            <div
              class="flex flex-wrap flex-none justify-between text-xs font-poppins"
            >
              <p class="text-zinc-400 w-full">Technical Services Manager</p>
              <p class="text-zinc-500">2020 - Present</p>
            </div>
            <div
              class="flex flex-wrap flex-none justify-between text-xs font-poppins"
            >
              <p class="text-zinc-400 w-full">Software Engineer</p>
              <p class="text-zinc-500">2016-2020</p>
            </div>
          </div>
          <div v-else>
            <div
              class="flex flex-wrap flex-none justify-between text-xs font-poppins"
            >
              <p class="text-zinc-400">Technical Services Manager</p>
              <p class="text-zinc-500">2020 - Present</p>
            </div>
            <div
              class="flex flex-wrap flex-none justify-between text-xs font-poppins"
            >
              <p class="text-zinc-400">Software Engineer</p>
              <p class="text-zinc-500">2016-2020</p>
            </div>
          </div>
        </div>
      </div>

      <!-- LDOE-->
      <div class="flex">
        <!-- Logo -->
        <div></div>
        <img
          class="mt-1 h-10 w-10 rounded-full flex flex-none"
          src="..\assets\common\ldoa.webp"
          alt="Logo for LDOA"
        />

        <!-- CompanyName and Titles-->
        <div class="ml-3 w-full text-sm text-zinc-200 font-poppins">
          <!-- CompanyName -->
          <p>Louisiana Division of Administration</p>

          <!-- Titles -->
          <div v-if="appWidth <= 425">
            <div
              class="flex flex-wrap flex-none justify-between text-xs font-poppins"
            >
              <p class="text-zinc-400 w-full">IT Specialist</p>
              <p class="text-zinc-500">2012 - 2016</p>
            </div>
          </div>
          <div v-else>
            <div
              class="flex flex-wrap flex-none justify-between text-xs font-poppins"
            >
              <p class="text-zinc-400">IT Specialist</p>
              <p class="text-zinc-500">2012 - 2016</p>
            </div>
          </div>
        </div>
      </div>

      <!-- LSU-->
      <div class="flex">
        <!-- Logo -->
        <img
          class="mt-1 h-10 w-10 rounded-full flex flex-none"
          src="..\assets\common\lsu.webp"
          alt="Logo for LSU"
        />

        <!-- CompanyName and Titles-->
        <div class="ml-3 w-full text-sm text-zinc-200 font-poppins">
          <!-- CompanyName -->
          <p>Louisiana State University</p>

          <!-- Titles -->
          <div v-if="appWidth <= 425">
            <div
              class="flex flex-wrap flex-none justify-between text-xs font-poppins"
            >
              <p class="text-zinc-400 w-full">
                Network Infrastructure Technician
              </p>
              <p class="text-zinc-500">2010 - 2012</p>
            </div>
          </div>
          <div v-else>
            <div
              class="flex flex-wrap flex-none justify-between text-xs font-poppins"
            >
              <p class="text-zinc-400">Network Infrastructure Technician</p>
              <p class="text-zinc-500">2010 - 2012</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Download button -->
    <a
      class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
      href="https://storage.googleapis.com/bpmillerwebsitestorage/Billy's%20Resume.docx.pdf"
      >Download Resume
      <SvgHandler name="DownloadIcon" />
    </a>
  </div>
</template>
