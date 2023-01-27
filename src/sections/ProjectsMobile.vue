<script setup>
// Components
import SvgHandler from "../components/SvgHandler.vue";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <section class="w-full bg-gray-800 border-y border-gray-600">
    <!-- Container for content -->
    <div class="mx-5 pt-5 pb-10">
      <!-- Header for section -->
      <h1 class="flex justify-end font-poppins font-bold baseline text-4xl">
        <p class="text-bteal-50">03</p>
        <p class="text-bpink-50">.</p>
        <p class="ml-3 text-gray-100">Projects</p>
        <div class="mt-5 ml-3 h-0.5 w-full bg-zinc-200"></div>
      </h1>

      <!-- Section description -->
      <div
        class="animateFadeIn opacity-0 text-zinc-200 font-poppins text-[0.93rem]"
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

      <!-- RAF -->
      <ProjectCard projlinks="true" projtype="js">
        <template #title>RAF Technology</template>
        <template #link1>raf.com</template>
        <template #link2>github.com</template>
        <template #description
          >RAF Technology provides the most advanced optical character
          recognition products for extracting data from different fonts, print
          styles, and handwriting. Our wide variety of vision applications are
          primarily deployed in fulfillment, transportation, and
          distribution.</template
        >
        <template #technology
          >Vue, Vue Router, Tailwind, Motion One, WordPress, Elementor</template
        >
      </ProjectCard>

      <!-- Directory Commander -->
      <ProjectCard projlinks="true" projtype="js">
        <template #title>Directory Commander</template>
        <template #link1>firebase.com</template>
        <template #link2>github.com</template>
        <template #description
          >A series of projects to completely automate a core responsibility of
          the TechServices team - to gather, compile, build, test, burn, verify,
          and deliver different sets of postal directories to partners in a
          given month. Frees up hours of time and resources for multiple team
          members at the start of every month.</template
        >
        <template #technology>
          <div>
            <div>Javascript: Vue, Vue Router, Pinia, Tailwind, AnimeJs</div>
            <div class="mt-1">
              C#: Asp.net Core, Entity Framework, Sqlite, Serilog, Sockets,
              Websockets, HtmlAgilityPack, MailKit, Puppeteer
            </div>
          </div>
        </template>
      </ProjectCard>

      <!-- DMI -->
      <ProjectCard projtype="c#">
        <template #title>Dangerous Mail Investigation</template>
        <template #description
          >A solution to the problem of manually viewing and analyzing tens of
          thousands of mailpiece images to determine which ones may have similar
          characteristics to a previousUpSmall identified dangerous mailpiece
          using OCR and intelligent searching, sorting, and filtering.</template
        >
        <template #technology
          >WinForms, Telerik, Entity Framework, MongoDb</template
        >
      </ProjectCard>

      <!-- FireGame -->
      <ProjectCard projlinks="true" projtype="c#">
        <template #title>Fire Game</template>
        <template #link1>itch.io</template>
        <template #link2>github.com</template>
        <template #description
          >Help Randy the fireman defeat fire monsters, rescue civilians, and
          save the day!</template
        >
        <template #technology>Godot 4</template>
      </ProjectCard>

      <!-- Barry -->
      <ProjectCard projlinks="true" projtype="c#">
        <template #title>Barry for Discord</template>
        <template #link1>discord.com</template>
        <template #link2>github.com</template>
        <template #description
          >Yet another discord music bot - with a twist! This bot adds
          particular features lacking in other music bots such as serving
          age-restricted songs/videos from YouTube, additional music sources
          including Spotify integration, and a user database to play back old
          listening sessions and favorite songs requested by other
          users.</template
        >
        <template #technology
          >Discord.net, Entity Framework, Sqlite, Lavaplayer,
          Spotify-NET</template
        >
      </ProjectCard>
    </div>
  </section>
</template>
