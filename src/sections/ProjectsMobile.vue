<script setup>
// Components
import ProjectCardMobile from "../components/ProjectCardMobile.vue";
</script>

<template>
  <!-- Projects section -->
  <section class="w-full bg-gray-800 border-y border-gray-600">
    <!-- Container for content -->
    <div class="mx-5 pt-5 pb-10">
      <!-- Header for section -->
      <h1 class="flex justify-end font-poppins font-bold baseline text-4xl">
        <p class="text-bteal-50">03</p>
        <p class="text-bpink-50">.</p>
        <p class="ml-3 text-zinc-200">Projects</p>
        <div class="mt-5 ml-3 h-0.5 w-full bg-zinc-200"></div>
      </h1>

      <!-- Section description -->
      <div class="animateFadeIn text-zinc-200 font-poppins">
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
      <ProjectCardMobile projlinks="true" projtype="js">
        <template #title>RAF Technology</template>
        <template #image
          ><img
            class="w-2/3"
            src="..\assets\common\showcaseRaf.webp"
            alt="showcase of raf project"
        /></template>
        <template #logo>
          <img
            class="rounded-full w-20 h-20"
            src="..\assets\common\raf.webp"
            alt="raf logo"
          />
        </template>
        <template #link1>raf.com</template>
        <template #link2>github.com</template>
        <template #description
          >RAF Technology provides the most advanced optical character
          recognition products for extracting data from different fonts, print
          styles, and handwriting. Our wide variety of vision applications are
          primarily deployed in fulfillment, transportation, and
          distribution.</template
        >
        <template #technology>
          <div class="flex">
            <img
              class="rounded-full w-6 h-6 mr-2 shrink-0"
              src="..\assets\common\js.webp"
              alt="js logo"
            />
            <div>
              Vue, Vue Router, Tailwind, Motion One, WordPress, Elementor
            </div>
          </div>
        </template>
      </ProjectCardMobile>

      <!-- Directory Commander -->
      <ProjectCardMobile projlinks="true" projtype="js">
        <template #title>Directory Commander</template>
        <template #image
          ><img
            class="w-2/3"
            src="..\assets\common\showcaseDirCommander.webp"
            alt="showcase of dirCommander project"
        /></template>
        <template #logo>
          <img
            class="rounded-full w-20 h-20"
            src="..\assets\common\dirCommander.webp"
            alt="dircommander logo"
          />
        </template>
        <template #link1>firebase.com</template>
        <template #link2>github.com</template>
        <template #description
          >A series of projects to completely automate a core responsibility of
          the TechServices team - to gather, compile, build, test, burn, verify,
          and publish different sets of international postal directories to
          partners in a given month. Frees up hours of time and resources for
          multiple team members at the start of every month.</template
        >
        <template #technology>
          <div>
            <div class="flex">
              <img
                class="rounded-full w-6 h-6 mr-2 shrink-0"
                src="..\assets\common\js.webp"
                alt="js logo"
              />
              <div>Vue, Vue Router, Pinia, Tailwind, AnimeJs</div>
            </div>
            <div class="flex mt-1">
              <img
                class="rounded-full w-6 h-6 mr-2 shrink-0 flex-none"
                src="..\assets\common\cSharp.webp"
                alt="c sharp logo"
              />
              <div>
                Asp.net Core, Entity Framework, Sqlite, Serilog, Sockets,
                Websockets, HtmlAgilityPack, MailKit, Puppeteer
              </div>
            </div>
          </div>
        </template>
      </ProjectCardMobile>

      <!-- DMI -->
      <ProjectCardMobile projtype="c#">
        <template #title>Dangerous Mail Investigation</template>
        <template #image
          ><img
            class="w-2/3"
            src="..\assets\common\showcaseDmi.webp"
            alt="showcase of dmi project"
        /></template>
        <template #logo>
          <img
            class="rounded-full w-20 h-20"
            src="..\assets\common\dmi.webp"
            alt="dmi logo"
          />
        </template>
        <template #description
          >A solution to the problem of manually viewing and analyzing tens of
          thousands of mailpiece images to determine which ones may have similar
          characteristics to a previousUpSmall identified dangerous mailpiece
          using OCR and intelligent searching, sorting, and filtering.</template
        >
        <template #technology>
          <div class="flex">
            <img
              class="rounded-full w-6 h-6 mr-2 shrink-0"
              src="..\assets\common\cSharp.webp"
              alt="c sharp logo"
            />
            <div>WinForms, Telerik, Entity Framework, MongoDb</div>
          </div>
        </template>
      </ProjectCardMobile>

      <!-- FireGame -->
      <!-- <ProjectCard projlinks="true" projtype="c#">
        <template #title>Fire Game</template>
        <template #link1>itch.io</template>
        <template #link2>github.com</template>
        <template #description
          >Help Randy the fireman defeat fire monsters, rescue civilians, and
          save the day!</template
        >
        <template #technology>
          <div class="flex">
            <img
              class="rounded-full w-6 h-6 mr-2 shrink-0"
              src="..\assets\common\cSharp.webp"
              alt="c sharp logo"
            />
            <div>Godot 4</div>
          </div>
        </template>
      </ProjectCard> -->

      <!-- Barry -->
      <ProjectCardMobile projlinks="true" projtype="c#">
        <template #title>Barry for Discord</template>
        <template #image
          ><img
            class="w-2/3"
            src="..\assets\common\showcaseBarry.webp"
            alt="showcase of barry project"
        /></template>
        <template #logo>
          <img
            class="rounded-full w-20 h-20"
            src="..\assets\common\barry.webp"
            alt="barry logo"
          />
        </template>
        <template #link1>discord.com</template>
        <template #link2>github.com</template>
        <template #description
          >YAMusicBot! Barry has features not found in other music bots such as
          serving age-restricted songs from YouTube, additional music source
          integration with Spotify, and a user database to play back old
          listening sessions and favorite songs requested by users.</template
        >
        <template #technology>
          <div class="flex">
            <img
              class="rounded-full w-6 h-6 mr-2 shrink-0"
              src="..\assets\common\cSharp.webp"
              alt="c sharp logo"
            />
            <div>
              Discord.net, Entity Framework, Sqlite, Lavaplayer, Spotify-NET
            </div>
          </div>
        </template>
      </ProjectCardMobile>
    </div>
  </section>
</template>
