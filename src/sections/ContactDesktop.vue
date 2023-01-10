<script setup>
import ContactBox from "../components/ContactBox.vue";
import { inView, animate } from "motion";
import { ref, onMounted } from "vue";

const contact = ref(null);

onMounted(() => {
  // inView(contactSection.value, () => {
  //   console.log("target spotted");
  // });

  inView(contact.value, ({ target }) => {
    // console.log("target spotted 2: ", target);

    animate(
      target,
      { opacity: 1, transform: "rotate(360deg)" },
      { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
    );
  });
});
</script>

<template>
  <section class="mx-10 my-10">
    <!-- <div desc="header for section" class="relative h-20">
    <h1
      class="absolute inset-y-0 right-0 flex items-baseline text-gray-100 font-poppins text-5xl before:bg-white before:h-1 before:w"
    >
      <p class="text-teal-400 font-poppins text-5xl">04</p>
      <p class="text-[#BB77FF] font-poppins text-8xl">.</p>
      <p class="ml-3 text-gray-100 font-poppins text-5xl">Contact</p>
    </h1>
  </div> -->

    <!-- Header for section -->
    <div class="flex">
      <div class="mt-9 h-0.5 w-full bg-white"></div>

      <h1 class="flex items-baseline">
        <p class="ml-5 text-teal-400 font-poppins font-bold text-5xl">04</p>
        <p class="text-[#BB77FF] font-poppins font-bold text-6xl">.</p>
        <p class="ml-3 mr-5 text-gray-100 font-poppins font-bold text-5xl">
          Contact
        </p>
      </h1>
    </div>

    <!-- Contact info and contact form -->
    <div ref="contact" class="flex justify-between my-20">
      <!-- Left side -->
      <div class="flex flex-col justify-center">
        <!-- Contact description -->
        <div class="max-w-xs text-gray-100 font-poppins font-bold text-2xl">
          Available for select freelance opportunities.
        </div>
        <div class="text-gray-100 font-poppins">
          Have an exciting project you need help with?
        </div>
        <div class="text-gray-100 font-poppins">
          Send me an email or contact me via instant message!
        </div>

        <!-- Email address -->
        <div class="my-6 text-gray-100 font-poppins text-2xl">
          billy@bpmiller.com
        </div>

        <!-- Social media links -->
        <div class="flex flex-col space-y-2">
          <a
            href="https://twitter.com/bpmiller2"
            class="flex items-center group"
          >
            <svg
              class="h-7 w-7 text-gray-100"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
            <p
              class="ml-3 text-gray-100 font-poppins group-hover:text-teal-400"
            >
              Twitter
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/billy-miller-45849b70/"
            class="flex items-center group"
          >
            <svg
              class="h-7 w-7 text-gray-100"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clip-rule="evenodd"
              />
            </svg>
            <p
              class="ml-3 text-gray-100 font-poppins group-hover:text-teal-400"
            >
              LinkedIn
            </p>
          </a>
          <a
            href="https://github.com/Bpmiller32"
            class="flex items-center group"
          >
            <svg
              class="h-7 w-7 text-gray-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            <p
              class="ml-3 text-gray-100 font-poppins group-hover:text-teal-400"
            >
              Github
            </p>
          </a>
        </div>
      </div>

      <!-- Right side -->
      <div desc="right side">
        <ContactBox />
      </div>
    </div>
  </section>
</template>
