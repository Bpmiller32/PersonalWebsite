<script setup>
// Components
import SvgHandler from "../components/SvgHandler.vue";
import WorkCard from "../components/WorkCard.vue";
import ResumeCard from "../components/ResumeCard.vue";
</script>

<template>
  <!-- Work section -->
  <section class="flex justify-center bg-bzync-50">
    <!-- Container for content -->
    <div class="relative w-full max-w-bcontent px-5 pt-5 pb-10">
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
      <div class="animateFadeUpSlow absolute top-[10%] left-[5%]">
        <img
          class="h-[25rem]"
          src="..\assets\common\codeBackground.webp"
          alt="Image of the code that made this, meta!"
        />
      </div>
      <!-- Background code image long -->
      <div class="animateFadeUpSlow absolute top-[25%] right-[5%]">
        <img
          class="h-[25rem]"
          src="..\assets\common\codeBackgroundLong.webp"
          alt="Longer image of code that made this, meta!"
        />
      </div>

      <!-- WorkCards container -->
      <div class="flex flex-wrap justify-center space-x-7">
        <!-- Desktop app dev -->
        <WorkCard
          class="animateFadeUp w-full"
          color="bg-pink-500"
          divsize="h-24"
        >
          <template #title>
            <p class="relative">Desktop App</p>
            <p class="relative">Development</p>
          </template>
          <template #icon>
            <SvgHandler name="DesktopIcon" />
          </template>
          <template #description>
            <p>5 years of development</p>
            <p>experience in C#, Powershell,</p>
            <p>.Net Core, WinForms, and UWP.</p>
          </template>
        </WorkCard>

        <!-- Web dev -->
        <WorkCard
          class="animateFadeUp w-full"
          color="bg-blue-500"
          divsize="h-20"
        >
          <template #title>
            <p class="relative">Full Stack Web</p>
            <p class="relative">Development</p>
          </template>
          <template #icon>
            <SvgHandler name="VueIcon" />
          </template>
          <template #description>
            <p>3 years of development</p>
            <p>experience in HTML, CSS, JS,</p>
            <p>Vue, Nuxt, and Asp.Net Core.</p>
          </template>
        </WorkCard>

        <!-- Enterprise IT -->
        <WorkCard
          class="animateFadeUp w-full"
          color="bg-orange-500"
          divsize="h-28"
        >
          <template #title>
            <p class="relative">Enterprise IT</p>
          </template>
          <template #icon>
            <SvgHandler name="ItIcon" />
          </template>
          <template #description>
            <p>10 years experiece in</p>
            <p>designing, managing,</p>
            <p>and implementing</p>
            <p>large-scale IT challenges.</p>
          </template>
        </WorkCard>
      </div>

      <!-- ResumeCard container -->
      <div class="flex justify-center">
        <ResumeCard />
      </div>
    </div>
  </section>
</template>
