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
        class="flex w-full justify-center rounded-md border border-transparent bg-teal-400 py-2 px-4 text-sm font-medium text-gray-100 shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <p class="">Send Message</p>

        <svg
          class="ml-2 h-6 w-6 flex-shrink-0 text-gray-100 hover:text-[#BB77FF]"
          x-description="Heroicon name: outline/envelope"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          ></path>
        </svg>
      </button>
    </form>

    <!-- <svg
      class="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
      width="404"
      height="784"
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="d2a68204-c383-44b1-b99f-42ccff4e5365"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            class="text-gray-700"
            fill="currentColor"
          ></rect>
        </pattern>
      </defs>
      <rect
        width="404"
        height="784"
        fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
      ></rect>
    </svg> -->
  </div>
</template>
