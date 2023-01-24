<script setup>
// Js
import { animate, inView } from "motion";
import { onMounted } from "vue";

// Components
import ResumeBox from "../components/ResumeBox.vue";
import SvgHandler from "../components/SvgHandler.vue";

onMounted(() => {
  // For code backgrounds
  inView(".backgroundImage", (info) => {
    animate(
      info.target,
      { opacity: [0, 0.2], y: [50, 0] },
      { at: 0, duration: 2 }
    );
  });

  // For work boxes
  inView("figure", (info) => {
    animate(
      info.target,
      { opacity: [0, 1], y: [30, 0] },
      { at: 0, duration: 1 }
    );
  });
});
</script>

<template>
  <section class="relative mx-5 my-10">
    <!-- Header for section -->
    <h1 class="flex justify-end font-poppins font-bold text-4xl">
      <div class="mt-5 mr-3 h-0.5 w-full bg-zinc-200"></div>
      <div class="flex flex-col">
        <div class="flex">
          <p class="text-bteal-50">02</p>
          <p class="text-bpink-50">.</p>
          <p class="ml-3 text-zinc-200">Work</p>
          <p class="ml-3 text-zinc-200">&</p>
        </div>
        <p class="self-end text-zinc-200">Experience</p>
      </div>
    </h1>

    <!-- Background code image -->
    <div class="backgroundImage absolute top-[10%] left-0 w-1/2 opacity-0">
      <img
        src="..\assets\common\codeBackground.webp"
        alt="Image of the code that made this, meta!"
      />
    </div>
    <!-- Background code image long -->
    <div class="backgroundImage absolute top-[37%] right-0 w-1/2 opacity-0">
      <img src="..\assets\common\codeBackgroundLong.webp" alt="" />
    </div>

    <!-- Overall container -->
    <figure class="mt-5 rounded-2xl border-2 border-zinc-800 opacity-0">
      <!-- Heading -->
      <div class="flex justify-center items-center mt-5 space-x-5">
        <!-- Heading Image -->
        <SvgHandler name="DesktopIcon" />

        <!-- Heading text -->
        <div class="relative text-zinc-200 font-poppins font-bold text-2xl">
          <div
            class="absolute mt-[1.15rem] h-2 w-full bg-pink-500 opacity-80"
          ></div>
          <p class="relative">Desktop App</p>
          <p class="relative">Development</p>
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
            <div class="h-24 w-[0.15rem] bg-zinc-700"></div>
          </div>
          <!-- Bottom "close div text" -->
          <p class="mb-5">&lt;/div&gt;</p>
        </div>
        <!-- Description text -->
        <div class="-ml-2 text-zinc-200 font-poppins text-[0.93rem]">
          <p>5 years of development</p>
          <p>experience in C#, Powershell,</p>
          <p>.Net Core, WinForms, and UWP.</p>
        </div>
      </div>
    </figure>

    <!-- Overall container -->
    <figure class="mt-5 rounded-2xl border-2 border-zinc-800 opacity-0">
      <!-- Heading -->
      <div class="flex justify-center items-center mt-5 space-x-5">
        <!-- Heading Image -->
        <SvgHandler name="VueIcon" />

        <!-- Heading text -->
        <div class="relative text-zinc-200 font-poppins font-bold text-2xl">
          <div
            class="absolute mt-[1.15rem] h-2 w-full bg-blue-500 opacity-80"
          ></div>
          <p class="relative">Full Stack Web</p>
          <p class="relative">Development</p>
        </div>
      </div>

      <!-- Description -->
      <div class="flex justify-center items-center">
        <!-- Description bracket -->
        <div>
          <!-- Top "div text" -->
          <p class="mt-5 text-zinc-700 font-poppins font-bold">&lt;div&gt;</p>
          <!-- Vertical bar -->
          <div class="flex justify-center">
            <div class="h-20 w-[0.15rem] bg-zinc-700"></div>
          </div>
          <!-- Bottom "div text" -->
          <p class="mb-5 text-zinc-700 font-poppins font-bold">&lt;/div&gt;</p>
        </div>
        <!-- Description text -->
        <div
          class="-ml-2 flex flex-col text-zinc-200 font-poppins text-[0.93rem]"
        >
          <p>3 years of development</p>
          <p>experience in HTML, CSS, JS,</p>
          <p>Vue, Nuxt, and Asp.Net Core.</p>
        </div>
      </div>
    </figure>

    <!-- Overall container -->
    <figure class="mt-5 rounded-2xl border-2 border-zinc-800 opacity-0">
      <!-- Heading -->
      <div class="flex justify-center items-center mt-5 space-x-5">
        <!-- Heading Image -->
        <SvgHandler name="ItIcon" />

        <!-- Heading text -->
        <div class="relative text-zinc-200 font-poppins font-bold text-2xl">
          <div
            class="absolute mt-[1.15rem] h-2 w-full bg-orange-500 opacity-80"
          ></div>
          <p class="relative">Enterprise IT</p>
        </div>
      </div>

      <!-- Description -->
      <div class="flex justify-center items-center">
        <!-- Description bracket -->
        <div>
          <!-- Top "div text" -->
          <p class="mt-5 text-zinc-700 font-poppins font-bold">&lt;div&gt;</p>
          <!-- Vertical bar -->
          <div class="flex justify-center">
            <div class="h-28 w-[0.15rem] bg-zinc-700"></div>
          </div>
          <!-- Bottom "div text" -->
          <p class="mb-5 text-zinc-700 font-poppins font-bold">&lt;/div&gt;</p>
        </div>
        <!-- Description text -->
        <div
          class="-ml-2 flex flex-col text-zinc-200 font-poppins text-[0.93rem]"
        >
          <p>10 years experiece in</p>
          <p>designing, managing,</p>
          <p>and implementing</p>
          <p>large-scale IT challenges.</p>
        </div>
      </div>
    </figure>
    <div></div>
    <!-- Resume Card -->
    <ResumeBox />
  </section>
</template>
