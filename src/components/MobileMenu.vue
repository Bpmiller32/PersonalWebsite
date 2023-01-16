<script setup>
// JS
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

// Components
import SvgHandler from "../components/SvgHandler.vue";
</script>

<template>
  <Popover>
    <PopoverButton class="rounded-full bg-slate-500 p-2">
      <!-- <PopoverButton
      class="rounded-full bg-slate-500 p-2 focus:outline-none focus:ring-4 focus:ring-bpink-50"
    > -->
      <SvgHandler name="MenuIconBars" />
    </PopoverButton>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel class="absolute -top-7 inset-x-0 z-10 p-2">
        <!-- Panel container -->
        <div
          class="rounded-lg bg-gray-800 shadow-md ring-1 ring-black ring-opacity-5"
        >
          <!-- Logo and Menu button -->
          <div class="flex items-center justify-between border-b-2 px-5 py-5">
            <!-- Logo -->
            <SvgHandler name="BpmillerLogoFull" />
            <!-- Menu button -->
            <PopoverButton class="rounded-full -mr-2 p-2">
              <!-- <PopoverButton
              class="rounded-full -mr-2 p-2 outline-none ring-4 ring-bteal-50"
            > -->
              <SvgHandler name="MenuIconClose" />
            </PopoverButton>
          </div>

          <!-- Section links -->
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a
              class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-gray-900"
              >About Me</a
            >
            <a
              class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-gray-900"
              >Work and Experience</a
            >
            <a
              class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-gray-900"
              >Projects</a
            >
            <a
              class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-gray-900"
              >Contact</a
            >
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
