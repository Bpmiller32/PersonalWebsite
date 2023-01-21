<script setup>
// Components
import ResumeBox from "../components/ResumeBox.vue";
</script>

<template>
  <section class="mx-5 my-10">
    <!-- Header for section -->
    <h1 class="flex justify-end font-poppins font-bold text-4xl">
      <div class="mt-5 mr-3 h-0.5 w-full bg-white"></div>
      <div class="flex flex-col">
        <div class="flex">
          <p class="text-bteal-50">02</p>
          <p class="text-bpink-50">.</p>
          <p class="ml-3 text-gray-100">Work</p>
          <p class="ml-3 text-gray-100">&</p>
        </div>
        <p class="self-end text-gray-100">Experience</p>
      </div>
    </h1>

    <!-- Overall container -->
    <div class="mt-5 rounded-2xl border-2 border-zinc-700/40 bg-bzync-50">
      <!-- Heading -->
      <div class="flex justify-center items-center mt-5 space-x-5">
        <!-- Heading Image -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-176 h-12 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>

        <!-- Heading text -->
        <div class="relative text-gray-100 font-poppins font-bold text-2xl">
          <div
            class="absolute mt-[1.15rem] h-2 w-full bg-pink-500 opacity-80"
          ></div>
          <p class="relative">Desktop App</p>
          <p class="relative">Development</p>
        </div>
      </div>

      <!-- Description -->
      <div class="flex justify-center items-center">
        <!-- Description Image -->
        <div class="my-5 h-32 w-1 bg-green-500"></div>
        <!-- Description text -->
        <div
          class="ml-3 flex flex-col text-gray-100 font-poppins text-[0.93rem]"
        >
          <p>5 years of development</p>
          <p>experience in C#, Powershell,</p>
          <p>.Net Core, WinForms, UWP</p>
        </div>
      </div>
    </div>

    <!-- Overall container -->
    <div class="mt-5 rounded-2xl border-2 border-zinc-700/40 bg-bzync-50">
      <!-- Heading -->
      <div class="flex justify-center items-center mt-5 space-x-5">
        <!-- Heading Image -->
        <img class="h-12 w-12" src="..\assets\vueAsp.png" alt="" />
        <!-- Heading text -->
        <div class="relative text-gray-100 font-poppins font-bold text-2xl">
          <div
            class="absolute mt-[1.15rem] h-2 w-full bg-blue-500 opacity-80"
          ></div>
          <p class="relative">Full Stack Web</p>
          <p class="relative">Development</p>
        </div>
      </div>

      <!-- Description -->
      <div class="flex justify-center items-center">
        <!-- Description Image -->
        <div class="my-5 h-32 w-1 bg-green-500"></div>
        <!-- Description text -->
        <div
          class="ml-3 flex flex-col text-gray-100 font-poppins text-[0.93rem]"
        >
          <p>3 years of development</p>
          <p>experience in HTML, CSS, JS</p>
          <p>Vue, Nuxt, and Asp.Net Core.</p>
        </div>
      </div>
    </div>

    <!-- Overall container -->
    <div class="mt-5 rounded-2xl border-2 border-zinc-700/40 bg-bzync-50">
      <!-- Heading -->
      <div class="flex justify-center items-center mt-5 space-x-5">
        <!-- Heading Image -->
        <img class="h-12 w-12" src="..\assets\enterpriseIt.png" alt="" />
        <!-- Heading text -->
        <div class="relative text-gray-100 font-poppins font-bold text-2xl">
          <div
            class="absolute mt-[1.15rem] h-2 w-full bg-orange-500 opacity-80"
          ></div>
          <p class="relative">Enterprise IT</p>
        </div>
      </div>

      <!-- Description -->
      <div class="flex justify-center items-center">
        <!-- Description Image -->
        <div class="my-5 h-32 w-1 bg-green-500"></div>
        <!-- Description text -->
        <div
          class="ml-3 flex flex-col text-gray-100 font-poppins text-[0.93rem]"
        >
          <p>10 years experiece in</p>
          <p>designing, managing,</p>
          <p>and implementing</p>
          <p>large-scale IT challenges.</p>
        </div>
      </div>
    </div>

    <!-- Resume Card -->
    <ResumeBox />
  </section>
</template>
