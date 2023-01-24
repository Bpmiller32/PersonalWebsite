<script setup>
// Components
import SvgHandler from "../components/SvgHandler.vue";
</script>

<template>
  <div
    class="border-2 border-zinc-700/40 py-8 px-4 shadow rounded-lg sm:px-10 min-w-[30vw]"
  >
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-gray-100 text-sm font-medium"
          >Email address</label
        >
        <div class="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label for="comment" class="block text-gray-100 text-sm font-medium"
          >Message</label
        >
        <div class="mt-1">
          <textarea
            rows="4"
            name="comment"
            id="comment"
            class="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        class="flex w-full justify-center items-center rounded-md border border-transparent bg-bteal-50 py-2 px-4 text-sm font-medium text-gray-100 shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <p class="mr-3">Send Message</p>

        <SvgHandler name="MailIcon" />
      </button>
    </form>
  </div>
</template>
