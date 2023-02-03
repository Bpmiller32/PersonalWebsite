<script setup>
// Components
import ProjectCardDesktop from "../components/ProjectCardDesktop.vue";
</script>

<template>
  <!-- Projects section -->
  <section class="flex justify-center">
    <!-- Container for content -->
    <div
      class="px-5 pt-5 pb-10 w-full max-w-7xl rounded-3xl bg-gray-800 border border-gray-600"
    >
      <!-- Header for section -->
      <h1 class="flex justify-end font-poppins font-bold baseline text-4xl">
        <p class="text-bteal-50">03</p>
        <p class="text-bpink-50">.</p>
        <p class="ml-3 text-zinc-200">Projects</p>
        <div class="mt-5 ml-3 h-0.5 w-full bg-zinc-200"></div>
      </h1>

      <!-- Section description -->
      <div class="flex justify-center">
        <div
          class="animateFadeIn w-2/3 text-zinc-200 font-poppins text-[0.93rem]"
        >
          <p class="mt-5">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of.
          </p>
          <p class="mt-5">
            Some are proprietary work for companies but many of them are
            open-source. So if you see something that piques your interest,
            check out the code and contribute if you have ideas for how it can
            be improved.
          </p>
        </div>
      </div>

      <!-- ProjectCard container -->
      <div class="flex flex-col divide-y-2 divide-zinc-700">
        <!-- RAF -->
        <ProjectCardDesktop projlinks="true" :mirror="false">
          <template #title>RAF Technology</template>
          <template #image
            ><img
              class=""
              src="..\assets\mobile\showcaseRaf.webp"
              alt="Image of the code that made this, meta!"
          /></template>
          <template #logo>
            <img
              class="rounded-full w-20 h-auto"
              src="..\assets\common\raf.webp"
              alt="Image of the code that made this, meta!"
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
                alt="Image of the code that made this, meta!"
              />
              <div>
                Vue, Vue Router, Tailwind, Motion One, WordPress, Elementor
              </div>
            </div>
          </template>
        </ProjectCardDesktop>

        <!-- Directory Commander -->
        <ProjectCardDesktop projlinks="true" :mirror="true">
          <template #title>Directory Commander</template>
          <template #image
            ><img
              src="..\assets\mobile\showcaseDirCommander.webp"
              alt="Image of the code that made this, meta!"
          /></template>
          <template #logo>
            <img
              class="rounded-full w-20 h-auto"
              src="..\assets\common\dirCommander.webp"
              alt="Image of the code that made this, meta!"
            />
          </template>
          <template #link1>firebase.com</template>
          <template #link2>github.com</template>
          <template #description
            >A series of projects to completely automate a core responsibility
            of the TechServices team - to gather, compile, build, test, burn,
            verify, and publish different sets of international postal
            directories to partners in a given month. Frees up hours of time and
            resources for multiple team members at the start of every
            month.</template
          >
          <template #technology>
            <div>
              <div class="flex">
                <img
                  class="rounded-full w-6 h-6 mr-2 shrink-0"
                  src="..\assets\common\js.webp"
                  alt="Image of the code that made this, meta!"
                />
                <div>Vue, Vue Router, Pinia, Tailwind, AnimeJs</div>
              </div>
              <div class="flex mt-1">
                <img
                  class="rounded-full w-6 h-6 mr-2 shrink-0 flex-none"
                  src="..\assets\common\cSharp.webp"
                  alt="Image of the code that made this, meta!"
                />
                <div>
                  Asp.net Core, Entity Framework, Sqlite, Serilog, Sockets,
                  Websockets, HtmlAgilityPack, MailKit, Puppeteer
                </div>
              </div>
            </div>
          </template>
        </ProjectCardDesktop>

        <!-- DMI -->
        <ProjectCardDesktop :mirror="false">
          <template #title>Dangerous Mail Investigation</template>
          <template #image
            ><img
              src="..\assets\mobile\showcaseDmi.webp"
              alt="Image of the code that made this, meta!"
          /></template>
          <template #logo>
            <img
              class="rounded-full w-20 h-auto"
              src="..\assets\common\dmi.webp"
              alt="Image of the code that made this, meta!"
            />
          </template>
          <template #description
            >A solution to the problem of manually viewing and analyzing tens of
            thousands of mailpiece images to determine which ones may have
            similar characteristics to a previousUpSmall identified dangerous
            mailpiece using OCR and intelligent searching, sorting, and
            filtering.</template
          >
          <template #technology>
            <div class="flex">
              <img
                class="rounded-full w-6 h-6 mr-2 shrink-0"
                src="..\assets\common\cSharp.webp"
                alt="Image of the code that made this, meta!"
              />
              <div>WinForms, Telerik, Entity Framework, MongoDb</div>
            </div>
          </template>
          <template #badges
            ><img
              class="rounded-full w-6 h-6 mr-2 shrink-0"
              src="..\assets\common\cSharp.webp"
              alt="Image of the code that made this, meta!"
            />
          </template>
        </ProjectCardDesktop>

        <!-- Barry -->
        <ProjectCardDesktop projlinks="true" :mirror="true">
          <template #title>Barry for Discord</template>
          <template #image
            ><img
              src="..\assets\mobile\showcaseBarry.webp"
              alt="Image of the code that made this, meta!"
          /></template>
          <template #logo>
            <img
              class="rounded-full w-20 h-auto"
              src="..\assets\common\barry.webp"
              alt="Image of the code that made this, meta!"
            />
          </template>
          <template #link1>discord.com</template>
          <template #link2>github.com</template>
          <template #description
            >YAMusicBot! Barry has features not found in other music bots such
            as serving age-restricted songs from YouTube, additional music
            source integration with Spotify, and a user database to play back
            old listening sessions and favorite songs requested by
            users.</template
          >
          <template #technology>
            <div class="flex">
              <img
                class="rounded-full w-6 h-6 mr-2 shrink-0"
                src="..\assets\common\cSharp.webp"
                alt="Image of the code that made this, meta!"
              />
              <div>
                Discord.net, Entity Framework, Sqlite, Lavaplayer, Spotify-NET
              </div>
            </div>
          </template>
        </ProjectCardDesktop>
      </div>
    </div>
  </section>
</template>
