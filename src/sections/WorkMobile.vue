<script setup>
// Components
import SvgHandler from "../components/SvgHandler.vue";
import WorkCard from "../components/WorkCard.vue";
import ResumeCard from "../components/ResumeCard.vue";
</script>

<template>
  <section class="relative mx-5 mt-5 mb-10">
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
    <div class="animateFadeUpSlow opacity-0 absolute top-[10%] left-0 w-1/2">
      <img
        src="..\assets\common\codeBackground.webp"
        alt="Image of the code that made this, meta!"
      />
    </div>
    <!-- Background code image long -->
    <div class="animateFadeUpSlow opacity-0 absolute top-[36%] right-0 w-1/2">
      <img src="..\assets\common\codeBackgroundLong.webp" alt="" />
    </div>

    <!-- Desktop app dev -->
    <WorkCard color="absolute bg-green-500" divsize="h-24">
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
    <WorkCard color="absolute bg-blue-500" divsize="h-20">
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
    <WorkCard color="absolute bg-blue-500" divsize="h-28">
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

    <!-- Resume Box -->
    <ResumeCard />
  </section>
</template>
