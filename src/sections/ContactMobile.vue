<script setup>
// Js
import ContactBox from "../components/ContactBox.vue";

// Components
import SvgHandler from "../components/SvgHandler.vue";
</script>

<template>
  <section class="mx-5 my-10">
    <!-- Header for section -->
    <h1 class="flex justify-end font-poppins font-bold text-4xl">
      <div class="mt-5 mr-3 h-0.5 w-full bg-white"></div>
      <p class="text-bteal-50">04</p>
      <p class="text-bpink-50">.</p>
      <p class="ml-3 text-gray-100">Contact</p>
    </h1>

    <!-- Contact info and contact form -->
    <div class="flex flex-col justify-center">
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
        <a href="https://twitter.com/bpmiller2" class="flex items-center group">
          <SvgHandler name="TwitterIcon" />
          <p class="ml-3 text-gray-100 font-poppins group-hover:text-bteal-50">
            Twitter
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/billy-miller-45849b70/"
          class="flex items-center group"
        >
          <SvgHandler name="LinkedinIcon" />
          <p class="ml-3 text-gray-100 font-poppins group-hover:text-bteal-50">
            LinkedIn
          </p>
        </a>
        <a href="https://github.com/Bpmiller32" class="flex items-center group">
          <SvgHandler name="GithubIcon" />
          <p class="ml-3 text-gray-100 font-poppins group-hover:text-bteal-50">
            Github
          </p>
        </a>
      </div>

      <!-- ContactBox -->
      <div class="mt-10"><ContactBox /></div>
    </div>
  </section>
</template>
