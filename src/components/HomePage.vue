<script setup>
import { animate, timeline, scroll, inView, spring } from "motion";
import { ref, onMounted, watch } from "vue";

const test = ref(null);
const content = ref(null);

const windowWidth = ref(window.innerWidth);
const windowHeight = ref(null);

const picRef = ref(null);

const para0 = ref(null);
const para1 = ref(null);
const para2 = ref(null);
const para3 = ref(null);
const para4 = ref(null);

onMounted(() => {
  window.addEventListener("resize", () => {
    console.log("window: ", window.innerWidth);

    windowHeight.value = (window.innerWidth * 2) / 3 - 65;
    windowWidth.value = window.innerWidth;

    picRef.value.style.height = windowHeight.value;

    console.log(picRef.value.style.height);
  });

  const sequence = [
    [para0.value, { y: 25 }, { at: 0 }],
    [para1.value, { y: 40 }, { at: 0 }],
    [para2.value, { y: -20 }, { at: 0 }],
    [para3.value, { y: -115 }, { at: 0 }],
    [para4.value, { y: -500 }, { at: 0 }],
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
  <div class="relative flex flex-col inset-0 sm:mx-10">
    <!-- <div :class="'relative h-[' + windowHeight + 'px]'"> -->
    <!-- <div ref="picRef" class="relative" :style="'height: 300px'"> -->
    <div
      ref="picRef"
      class="relative"
      :style="'height: ' + windowHeight + 'px'"
    >
      <img
        ref="para0"
        id="billyPic"
        class="absolute -translate-x-[15%] sm:translate-x-0 scale-150 sm:scale-100"
        src="..\assets\base.png"
        alt=""
      />
      <img
        ref="para1"
        class="absolute -translate-x-[15%] sm:translate-x-0 scale-150 sm:scale-100"
        src="..\assets\backRock.png"
        alt=""
      />
      <img
        ref="para2"
        class="absolute -translate-x-[15%] sm:translate-x-0 scale-150 sm:scale-100"
        src="..\assets\leftRock.png"
        alt=""
      />
      <img
        ref="para3"
        class="absolute -translate-x-[15%] sm:translate-x-0 scale-150 sm:scale-100"
        src="..\assets\frontRock.png"
        alt=""
      />
      <img
        ref="para4"
        class="absolute -translate-x-[15%] sm:translate-x-0 scale-150 sm:scale-100"
        src="..\assets\billy.png"
        alt=""
      />
    </div>
    <div class="relative h-[300vh] -top-28">
      <div ref="content" class="relative z-500 w-full bg-black">
        <p class="text-white">The window width is: {{ windowWidth }}</p>
        <p class="text-white">The window height is: {{ windowHeight }}</p>
        <p class="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque
          consequuntur a nisi, illo quia cupiditate fuga et eos minima
          voluptatum cum dolorum quas repellat eaque beatae vitae veritatis
          quae.
        </p>
        <p class="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque
          consequuntur a nisi, illo quia cupiditate fuga et eos minima
          voluptatum cum dolorum quas repellat eaque beatae vitae veritatis
          quae.
        </p>
      </div>
    </div>

    <div ref="test" class="w-10 h-10 bg-green-500"></div>
  </div>
</template>
