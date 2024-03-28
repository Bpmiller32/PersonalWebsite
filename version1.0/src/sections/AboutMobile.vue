<template>
  <!-- About section -->
  <section
    id="aboutMobile"
    class="px-5 pt-5 pb-10 w-full bg-gray-800 border-y border-gray-600"
  >
    <!-- Header for section -->
    <h1 class="flex justify-end font-poppins font-bold baseline text-4xl">
      <p class="text-bteal-50">01</p>
      <p class="text-bpink-50">.</p>
      <p class="ml-3 text-zinc-200">About</p>
      <p class="ml-3 text-zinc-200">Me</p>
      <div class="mt-5 ml-3 h-0.5 w-full bg-zinc-200"></div>
    </h1>

    <!-- Photo -->
    <div class="animateFadeUp flex justify-center">
      <img
        class="object-cover mt-5 h-60 w-60 rounded-3xl shadow-2xl"
        src="..\assets\common\aboutMe.webp"
        alt="photo of billy"
      />
    </div>
    <!-- Description -->
    <div class="animateFadeIn text-zinc-200 font-poppins">
      <p class="mt-5">
        I’m a software engineer specializing in building and designing
        exceptional digital experiences on the web and desktop.
      </p>
      <p class="mt-5">
        I started playing with computers when I was 5 years old. Since then I
        have been tinkering with all sorts of technologies that in some way or
        another lead me to work on photography, electrical engineering,
        automation, and video game console modding.
      </p>
      <p class="mt-5">
        Fast-forward to today, and I’ve had the privilege of working in
        education, freelance, huge corporations, and a local hackathons. My main
        focus these days is building reactive, accessible, inclusive digital
        experiences at Datasea for a variety of clients.
      </p>
    </div>
  </section>
</template>
