<script setup>
import { animate, timeline, scroll, inView, spring } from "motion";
import { ref, onMounted, watch } from "vue";

const testWidth = ref(null);
const testHeight = ref(null);

const content = ref(null);

const pictureHeight = ref(null);

const para0 = ref(null);
const para1 = ref(null);
const para2 = ref(null);
const para3 = ref(null);
const para4 = ref(null);

function CalculatePictureHeight(windowWidth) {
  let factor = 100;
  let units = 1;

  console.log("window width: ", window.innerWidth);
  console.log("rendered height: ", para0.value.clientHeight);
  console.log("ratio: ", window.innerWidth / para0.value.clientHeight);
  console.log(" ");

  if (windowWidth < 640) {
    // Factor is roughly 1.5 under 640px
    factor = windowWidth / 1.1;
  } else if (windowWidth < 768) {
    units = (windowWidth - 768) / 20;
    factor = windowWidth / (1.7 - units * 0.01);
  } else if (windowWidth < 1024) {
    units = (windowWidth - 1024) / 30;
    factor = windowWidth / (1.7 - units * 0.01);
  } else if (windowWidth < 1280) {
    units = (windowWidth - 1280) / 30;
    factor = windowWidth / (1.7 - units * 0.01);
  } else {
    units = (windowWidth - 1280) / 30;
    factor = windowWidth / (1.8 - units * 0.01);
  }

  return factor;
}

onMounted(() => {
  testWidth.value = window.innerWidth;
  testHeight.value = window.innerHeight;

  pictureHeight.value = CalculatePictureHeight(window.innerWidth);

  window.addEventListener("resize", () => {
    pictureHeight.value = CalculatePictureHeight(window.innerWidth);
  });

  const sequence = [
    [para0.value, { y: 50 }, { at: 0 }],
    [para1.value, { y: 100 }, { at: 0 }],
    [para2.value, { y: -100 }, { at: 0 }],
    [para3.value, { y: -400 }, { at: 0 }],
    [para4.value, { y: -700 }, { at: 0 }],
    [content.value, { top: "0%" }, { at: 0 }],
  ];

  // animate(
  //   test.value,
  //   { x: 100 },
  //   {
  //     duration: 1,
  //     easing: spring(),
  //     repeat: Infinity,
  //     direction: "alternate",
  //   }
  // );

  // timeline(sequence, {
  //   duration: 3,
  //   ease: spring(),
  //   repeat: Infinity,
  //   direction: "alternate",
  // });

  scroll(
    timeline(sequence, {
      direction: "alternate",
    })
  );

  // inView(test.value, () => {
  //   console.log("target spotted");

  //   return () => {
  //     console.log("target lost");
  //   };
  // });
});
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col w-full max-w-7xl sm:mx-10">
      <div class="relative sm:mx-10" :style="'height: ' + pictureHeight + 'px'">
        <img
          ref="para0"
          class="absolute -left-[14%] sm:left-0"
          src="..\assets\base.png"
          alt=""
        />
        <img
          ref="para1"
          class="absolute -left-[14%] sm:left-0"
          src="..\assets\backRock.png"
          alt=""
        />
        <img
          ref="para2"
          class="absolute -left-[14%] sm:left-0"
          src="..\assets\leftRock.png"
          alt=""
        />
        <img
          ref="para3"
          class="absolute -left-[14%] sm:left-0"
          src="..\assets\frontRock.png"
          alt=""
        />
        <img
          ref="para4"
          class="absolute -left-[14%] sm:left-0"
          src="..\assets\billy.png"
          alt=""
        />
      </div>
      <div class="relative z-50">
        <div ref="content" class="w-full pb-20 bg-[#252529] rounded-3xl">
          <h1 class="flex justify-center text-7xl py-10 text-white">
            My Expertise
          </h1>
          <div class="flex justify-center pb-10">
            <div
              class="bg-red-900 h-[300px] w-[300px] relative z-50 border"
            ></div>
            <div
              class="bg-red-900 h-[300px] w-[300px] relative z-50 border"
            ></div>
            <div
              class="bg-red-900 h-[300px] w-[300px] relative z-50 border"
            ></div>
          </div>
        </div>
        <div class="my-20 mx-10 flex justify-between">
          <div id="left" class="flex flex-col justify-center">
            <div class="text-white text-2xl">
              Available for select freelance opportunities.
            </div>
            <div class="text-white max-w-sm">
              Have an exciting project you need help with? Send me an email or
              contact me via instant message!
            </div>
            <div class="my-5 text-white text-2xl">billy@bpmiller.com</div>
            <div class="flex flex-col my-5 text-white">
              <p>Instagram</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Github</p>
            </div>
          </div>
          <div id="right">
            <div
              class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
            >
              <h2
                class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="h-6 w-6 flex-none"
                >
                  <path
                    d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                    class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                  ></path>
                  <path
                    d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                    class="stroke-zinc-400 dark:stroke-zinc-500"
                  ></path></svg
                ><span class="ml-3">Work</span>
              </h2>
              <ol class="mt-6 space-y-4">
                <li class="flex gap-4">
                  <div
                    class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                  >
                    <img
                      alt=""
                      src="/_next/static/media/planetaria.ecd81ade.svg"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      class="h-7 w-7"
                      loading="lazy"
                      style="color: transparent"
                    />
                  </div>
                  <dl class="flex flex-auto flex-wrap gap-x-2">
                    <dt class="sr-only">Company</dt>
                    <dd
                      class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                      Planetaria
                    </dd>
                    <dt class="sr-only">Role</dt>
                    <dd class="text-xs text-zinc-500 dark:text-zinc-400">
                      CEO
                    </dd>
                    <dt class="sr-only">Date</dt>
                    <dd
                      class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label="2019 until Present"
                    >
                      <time datetime="2019">2019</time>
                      <span aria-hidden="true">—</span>
                      <time datetime="2022">Present</time>
                    </dd>
                  </dl>
                </li>
                <li class="flex gap-4">
                  <div
                    class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                  >
                    <img
                      alt=""
                      src="/_next/static/media/airbnb.b4000690.svg"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      class="h-7 w-7"
                      loading="lazy"
                      style="color: transparent"
                    />
                  </div>
                  <dl class="flex flex-auto flex-wrap gap-x-2">
                    <dt class="sr-only">Company</dt>
                    <dd
                      class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                      Airbnb
                    </dd>
                    <dt class="sr-only">Role</dt>
                    <dd class="text-xs text-zinc-500 dark:text-zinc-400">
                      Product Designer
                    </dd>
                    <dt class="sr-only">Date</dt>
                    <dd
                      class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label="2014 until 2019"
                    >
                      <time datetime="2014">2014</time>
                      <span aria-hidden="true">—</span>
                      <time datetime="2019">2019</time>
                    </dd>
                  </dl>
                </li>
                <li class="flex gap-4">
                  <div
                    class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                  >
                    <img
                      alt=""
                      src="/_next/static/media/facebook.dd9e7d48.svg"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      class="h-7 w-7"
                      loading="lazy"
                      style="color: transparent"
                    />
                  </div>
                  <dl class="flex flex-auto flex-wrap gap-x-2">
                    <dt class="sr-only">Company</dt>
                    <dd
                      class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                      Facebook
                    </dd>
                    <dt class="sr-only">Role</dt>
                    <dd class="text-xs text-zinc-500 dark:text-zinc-400">
                      iOS Software Engineer
                    </dd>
                    <dt class="sr-only">Date</dt>
                    <dd
                      class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label="2011 until 2014"
                    >
                      <time datetime="2011">2011</time>
                      <span aria-hidden="true">—</span>
                      <time datetime="2014">2014</time>
                    </dd>
                  </dl>
                </li>
                <li class="flex gap-4">
                  <div
                    class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                  >
                    <img
                      alt=""
                      src="/_next/static/media/starbucks.4a5bd050.svg"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      class="h-7 w-7"
                      loading="lazy"
                      style="color: transparent"
                    />
                  </div>
                  <dl class="flex flex-auto flex-wrap gap-x-2">
                    <dt class="sr-only">Company</dt>
                    <dd
                      class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                      Starbucks
                    </dd>
                    <dt class="sr-only">Role</dt>
                    <dd class="text-xs text-zinc-500 dark:text-zinc-400">
                      Shift Supervisor
                    </dd>
                    <dt class="sr-only">Date</dt>
                    <dd
                      class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label="2008 until 2011"
                    >
                      <time datetime="2008">2008</time>
                      <span aria-hidden="true">—</span>
                      <time datetime="2011">2011</time>
                    </dd>
                  </dl>
                </li>
              </ol>
              <a
                class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                href="/#"
                >Download CV<svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                >
                  <path
                    d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></svg
              ></a>
            </div>
          </div>
        </div>
        <div class="flex justify-between mx-10 mb-16 text-white relative z-50">
          <div class="flex">
            <p class="px-2">Home</p>
            <p class="px-2">About</p>
            <p class="px-2">Projects</p>
            <p class="px-2">Photos</p>
          </div>
          <div>©2022 | Designed and Coded by Billy Miller</div>
        </div>
      </div>
    </div>
  </div>
</template>
