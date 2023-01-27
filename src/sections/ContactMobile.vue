<script setup>
// Components
import SvgHandler from "../components/SvgHandler.vue";
import ContactCard from "../components/ContactCard.vue";
</script>

<template>
  <section class="mx-5 pt-5 pb-10">
    <!-- Header for section -->
    <h1 class="flex justify-end font-poppins font-bold text-4xl">
      <div class="mt-5 mr-3 h-0.5 w-full bg-zinc-200"></div>
      <p class="text-bteal-50">04</p>
      <p class="text-bpink-50">.</p>
      <p class="ml-3 text-gray-100">Contact</p>
    </h1>

    <!-- Contact info and contact form -->
    <div class="animateFadeIn opacity-0 flex flex-col justify-center">
      <!-- Contact description -->
      <div class="mt-5 max-w-xs text-gray-100 font-poppins font-bold text-2xl">
        Available for select freelance opportunities.
      </div>
      <div class="mt-5 text-gray-100 font-poppins text-[0.93rem]">
        Have an exciting project you want help with?
      </div>
      <div class="text-gray-100 font-poppins text-[0.93rem]">
        Send me an email or contact me via instant message!
      </div>

      <!-- Email address -->
      <div class="my-5 text-gray-100 font-poppins text-2xl">
        billy@bpmiller.com
      </div>

      <!-- Social media links -->
      <div class="flex flex-col space-y-2">
        <!-- Twitter -->
        <div class="w-max">
          <a
            href="https://twitter.com/bpmiller2"
            class="flex items-center group"
          >
            <SvgHandler name="TwitterIcon" />
            <p
              class="rounded-md ml-1 px-2 py-2 font-poppins text-zinc-200 group-hover:bg-gray-100 group-hover:text-gray-900"
            >
              Twitter
            </p>
          </a>
        </div>
        <!-- LinkedIn -->
        <div class="w-max">
          <a
            href="https://www.linkedin.com/in/billy-miller-45849b70/"
            class="flex items-center group"
          >
            <SvgHandler name="LinkedinIcon" />
            <p
              class="rounded-md ml-1 px-2 py-2 font-poppins text-zinc-200 group-hover:bg-gray-100 group-hover:text-gray-900"
            >
              LinkedIn
            </p>
          </a>
        </div>
        <!-- Github -->
        <div class="w-max">
          <a
            href="https://github.com/Bpmiller32"
            class="flex items-center group"
          >
            <SvgHandler name="GithubIcon" />
            <p
              class="rounded-md ml-1 px-2 py-2 font-poppins text-zinc-200 group-hover:bg-gray-100 group-hover:text-gray-900"
            >
              Github
            </p>
          </a>
        </div>
      </div>
    </div>

    <!-- ContactBox -->
    <div class="animateFadeUp mt-10"><ContactCard /></div>
  </section>
</template>
