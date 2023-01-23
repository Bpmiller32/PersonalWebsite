<script setup>
// Js
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

// Components
import SvgHandler from "../components/SvgHandler.vue";
</script>

<template>
  <Popover>
    <PopoverButton class="rounded-full bg-slate-500 p-2">
      <SvgHandler name="MobileMenuBars" />
    </PopoverButton>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel class="absolute -top-3 inset-x-0 z-10 px-2">
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
              <SvgHandler name="MobileMenuClose" />
            </PopoverButton>
          </div>

          <!-- Links to sections -->
          <div class="space-y-3 p-3">
            <a href="#" class="flex items-center group">
              <div class="bg-bzync-50 rounded-lg p-2.5">
                <SvgHandler name="MobileMenuAbout" />
              </div>
              <p
                class="rounded-md ml-2 px-3 py-2 font-poppins text-zinc-200 group-hover:bg-gray-50 group-hover:text-gray-900"
              >
                About Me
              </p>
            </a>
            <a href="#" class="flex items-center group">
              <div class="bg-bzync-50 rounded-lg p-2.5">
                <SvgHandler name="MobileMenuWork" />
              </div>
              <p
                class="rounded-md ml-2 px-3 py-2 font-poppins text-zinc-200 group-hover:bg-gray-50 group-hover:text-gray-900"
              >
                Work and Experience
              </p>
            </a>
            <a href="#" class="flex items-center group">
              <div class="bg-bzync-50 rounded-lg p-2.5">
                <SvgHandler name="MobileMenuProjects" />
              </div>
              <p
                class="rounded-md ml-2 px-3 py-2 font-poppins text-zinc-200 group-hover:bg-gray-50 group-hover:text-gray-900"
              >
                Projects
              </p>
            </a>
            <a href="#" class="flex items-center group">
              <div class="bg-bzync-50 rounded-lg p-2.5">
                <SvgHandler name="MobileMenuContact" />
              </div>
              <p
                class="rounded-md ml-2 px-3 py-2 font-poppins text-zinc-200 group-hover:bg-gray-50 group-hover:text-gray-900"
              >
                Contact
              </p>
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
