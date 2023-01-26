<script setup>
// Js
import { animate, timeline, scroll, inView, spring } from "motion";
import { ref, onMounted } from "vue";

const description = ref(null);

const rafTechnologyImage = ref(null);
const directoryCommanderImage = ref(null);
const dangerousMailImage = ref(null);
const fireGameImage = ref(null);
const barryDiscordImage = ref(null);

const rafTechnologyLogo = ref(null);
const directoryCommanderLogo = ref(null);
const dangerousMailLogo = ref(null);
const fireGameLogo = ref(null);
const barryDiscordLogo = ref(null);

onMounted(() => {
  // // For image
  // inView("figure", (info) => {
  //   animate(
  //     info.target,
  //     { opacity: [0, 1], y: [15, 0] },
  //     { at: 0, duration: 1 }
  //   );
  // });
  // // For text description
  // inView("section", (info) => {
  //   animate(info.target, { opacity: [0, 1] }, { duration: 1 });
  // });
});
</script>

<template>
  <section class="w-full bg-gray-800 border-y border-gray-600">
    <!-- Container for content -->
    <div class="mx-5 mt-5 mb-10">
      <!-- Header for section -->
      <h1 class="flex justify-end font-poppins font-bold baseline text-4xl">
        <p class="text-bteal-50">03</p>
        <p class="text-bpink-50">.</p>
        <p class="ml-3 text-gray-100">Projects</p>
        <div class="mt-5 ml-3 h-0.5 w-full bg-zinc-700"></div>
      </h1>

      <!-- Section description -->
      <div
        ref="description"
        class="text-zinc-200 font-poppins text-[0.93rem] opacity-0"
      >
        <p class="mt-5">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of.
        </p>
        <p class="mt-5">
          Some are proprietary work for companies but many of them are
          open-source. So if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </div>

      <!-- Overall container -->
      <div
        class="mt-5 rounded-2xl border-2 p-6 border-zinc-700 bg-bzync-50 font-poppins"
      >
        <!-- Image -->
        <figure ref="rafTechnologyImage" class="flex justify-center opacity-0">
          <div class="w-48 h-48 bg-red-500"></div>
        </figure>
        <!-- Divider -->
        <div class="mt-5 h-[0.15rem] w-full bg-zinc-700"></div>
        <!-- Logo -->
        <figure
          ref="rafTechnologyLogo"
          class="mt-5 rounded-full w-20 h-20 bg-red-500"
        ></figure>
        <!-- Title -->
        <section
          class="mt-5 text-white font-poppins font-bold text-2xl opacity-0"
        >
          RAF Technology
        </section>
        <!-- Links -->
        <figure class="mt-1 flex items-center">
          <div class="rounded-full bg-red-500 h-5 w-5"></div>
          <div class="ml-1 text-white font-poppins font-bold">raf.com</div>
          <div class="ml-3 rounded-full bg-red-500 h-5 w-5"></div>
          <div class="ml-1 text-white font-poppins font-bold">github.com</div>
        </figure>
        <!-- Description -->
        <section class="text-zinc-400 mt-10 opacity-0">
          RAF Technology provides the most advanced optical character
          recognition products for extracting data from different fonts, print
          styles, and handwriting. Our wide variety of vision applications are
          primarily deployed in fulfillment, transportation, and distribution.
        </section>
        <!-- Technology used -->
        <section class="text-zinc-100 mt-5 opacity-0">Technology used</section>
        <section class="text-zinc-400 opacity-0">
          Vue, Vue Router, Tailwind, Motion One, WordPress, Elementor
        </section>
      </div>

      <!-- Overall container -->
      <div
        class="mt-5 rounded-2xl border-2 p-6 border-zinc-700 bg-bzync-50 font-poppins"
      >
        <!-- Image -->
        <div
          ref="directoryCommanderImage"
          class="flex justify-center opacity-0"
        >
          <div class="w-48 h-48 bg-red-500"></div>
        </div>
        <!-- Divider -->
        <div class="mt-5 h-[0.15rem] w-full bg-zinc-700"></div>
        <!-- Logo -->
        <div
          ref="directoryCommanderLogo"
          class="mt-5 rounded-full w-20 h-20 bg-red-500"
        ></div>
        <!-- Title -->
        <div class="mt-5 text-white font-poppins font-bold text-2xl">
          Directory Commander
        </div>
        <!-- Links -->
        <div class="mt-1 flex items-center">
          <div class="rounded-full bg-red-500 h-5 w-5"></div>
          <div class="ml-1 text-white font-poppins font-bold">firebase.com</div>
          <div class="ml-3 rounded-full bg-red-500 h-5 w-5"></div>
          <div class="ml-1 text-white font-poppins font-bold">github.com</div>
        </div>
        <!-- Description -->
        <div class="text-zinc-400 mt-10">
          A series of projects to completely automate a core responsibility of
          the TechServices team - to gather, compile, build, test, burn, verify,
          and deliver different sets of postal directories to partners in a
          given month. Frees up hours of time and resources for multiple team
          members at the start of every month.
        </div>
        <!-- Technology used -->
        <div class="text-zinc-100 mt-5">Technology used</div>
        <div class="text-zinc-400">
          Javascript: Vue, Vue Router, Pinia, Tailwind, AnimeJs
        </div>
        <div class="mt-1 text-zinc-400">
          C#: Asp.net Core, Entity Framework, Sqlite, Serilog, Sockets,
          Websockets, HtmlAgilityPack, MailKit, Puppeteer
        </div>
      </div>

      <!-- Overall container -->
      <div
        class="mt-5 rounded-2xl border-2 p-6 border-zinc-700 bg-bzync-50 font-poppins"
      >
        <!-- Image -->
        <div ref="dangerousMailImage" class="flex justify-center opacity-0">
          <div class="w-48 h-48 bg-red-500"></div>
        </div>
        <!-- Divider -->
        <div class="mt-5 h-[0.15rem] w-full bg-zinc-700"></div>
        <!-- Logo -->
        <div
          ref="dangerousMailLogo"
          class="mt-5 rounded-full w-20 h-20 bg-red-500"
        ></div>
        <!-- Title -->
        <div class="mt-5 text-white font-poppins font-bold text-2xl">
          Dangerous Mail Investigation
        </div>

        <!-- Description -->
        <div class="text-zinc-400 mt-10">
          A solution to the problem of manually viewing and analyzing tens of
          thousands of mailpiece images to determine which ones may have similar
          characteristics to a previously identified dangerous mailpiece using
          OCR and intelligent searching, sorting, and filtering.
        </div>
        <!-- Technology used -->
        <div class="text-zinc-100 mt-5">Technology used</div>
        <div class="text-zinc-400">
          WinForms, Telerik, Entity Framework, MongoDb
        </div>
      </div>

      <!-- Overall container -->
      <div
        class="mt-5 rounded-2xl border-2 p-6 border-zinc-700 bg-bzync-50 font-poppins"
      >
        <!-- Image -->
        <div ref="fireGameImage" class="flex justify-center opacity-0">
          <div class="w-48 h-48 bg-red-500"></div>
        </div>
        <!-- Divider -->
        <div class="mt-5 h-[0.15rem] w-full bg-zinc-700"></div>
        <!-- Logo -->
        <div
          ref="fireGameLogo"
          class="mt-5 rounded-full w-20 h-20 bg-red-500"
        ></div>
        <!-- Title -->
        <div class="mt-5 text-white font-poppins font-bold text-2xl">
          Fire Game
        </div>
        <!-- Links -->
        <div class="mt-1 flex items-center">
          <div class="rounded-full bg-red-500 h-5 w-5"></div>
          <div class="ml-1 text-white font-poppins font-bold">itch.io</div>
          <div class="ml-3 rounded-full bg-red-500 h-5 w-5"></div>
          <div class="ml-1 text-white font-poppins font-bold">github.com</div>
        </div>
        <!-- Description -->
        <div class="text-zinc-400 mt-10">
          Help Randy the fireman defeat fire monsters, rescue civilians, and
          save the day!
        </div>
        <!-- Technology used -->
        <div class="text-zinc-100 mt-5">Technology used</div>
        <div class="text-zinc-400">Godot 4</div>
      </div>

      <!-- Overall container -->
      <div
        class="mt-5 rounded-2xl border-2 p-6 border-zinc-700 bg-bzync-50 font-poppins"
      >
        <!-- Image -->
        <div ref="barryDiscordImage" class="flex justify-center opacity-0">
          <div class="w-48 h-48 bg-red-500"></div>
        </div>
        <!-- Divider -->
        <div class="mt-5 h-[0.15rem] w-full bg-zinc-700"></div>
        <!-- Logo -->
        <div
          ref="barryDiscordLogo"
          class="mt-5 rounded-full w-20 h-20 bg-red-500"
        ></div>
        <!-- Title -->
        <div class="mt-5 text-white font-poppins font-bold text-2xl">
          Barry for Discord
        </div>
        <!-- Links -->
        <div class="mt-1 flex items-center">
          <div class="rounded-full bg-red-500 h-5 w-5"></div>
          <div class="ml-1 text-white font-poppins font-bold">discord.com</div>
          <div class="ml-3 rounded-full bg-red-500 h-5 w-5"></div>
          <div class="ml-1 text-white font-poppins font-bold">github.com</div>
        </div>
        <!-- Description -->
        <div class="text-zinc-400 mt-10">
          Yet another discord music bot - with a twist! This bot adds particular
          features lacking in other music bots such as serving age-restricted
          songs/videos from YouTube, additional music sources including Spotify
          integration, and a user database to play back old listening sessions
          and favorite songs requested by other users.
        </div>
        <!-- Technology used -->
        <div class="text-zinc-100 mt-5">Technology used</div>
        <div class="text-zinc-400">
          Discord.net, Entity Framework, Sqlite, Lavaplayer, Spotify-NET
        </div>
      </div>
    </div>
  </section>
</template>
