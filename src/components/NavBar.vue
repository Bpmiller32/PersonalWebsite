<script setup>
import NavItem from "./NavItem.vue";
</script>

<template>
  <nav class="absolute w-full flex justify-center items-center z-50">
    <div>
      <!-- Name logo -->
      <div class="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="isolation: isolate"
          viewBox="0 0 120 25"
          class="rounded-full w-48 h-48 z-50"
        >
          <defs>
            <clipPath id="_clipPath_jI5lJAzVsVTc9q6FkCDC2Z5q0wMrjNz9">
              <rect width="120" height="25" />
            </clipPath>
          </defs>
          <g clip-path="url(#_clipPath_jI5lJAzVsVTc9q6FkCDC2Z5q0wMrjNz9)">
            <g>
              <g clip-path="url(#_clipPath_HQYDEEHga5CHSOuMYtFwxGoq3ItwrXFO)">
                <text
                  transform="matrix(1,0,0,1,0,19.5)"
                  style="
                    font-family: 'Poppins';
                    font-weight: 700;
                    font-size: 20px;
                    font-style: normal;
                    letter-spacing: -1;
                    fill: #66d9ed;
                    stroke: none;
                  "
                >
                  bpmiller
                </text>
              </g>
              <defs>
                <clipPath id="_clipPath_HQYDEEHga5CHSOuMYtFwxGoq3ItwrXFO">
                  <rect
                    x="0"
                    y="0"
                    width="82"
                    height="28"
                    transform="matrix(1,0,0,1,0,-1.5)"
                  />
                </clipPath>
              </defs>
              <rect
                x="46.465"
                y="8.345"
                width="3.415"
                height="11.156"
                transform="matrix(1,0,0,1,0,0)"
                fill="rgb(102,217,237)"
              />
              <rect
                x="98.52"
                y="19.118"
                width="18.602"
                height="3.103"
                transform="matrix(1,0,0,1,0,0)"
                fill="rgb(187,119,255)"
              />
              <circle
                vector-effect="non-scaling-stroke"
                cx="91.00000000000001"
                cy="17.1181640625"
                r="3"
                fill="rgb(251,251,251)"
              />
              <circle
                vector-effect="non-scaling-stroke"
                cx="48.1725097656252"
                cy="5.168945312499986"
                r="2.050781250000014"
                fill="rgb(187,119,255)"
              />
            </g>
          </g>
        </svg>
      </div>

      <!-- Spotlight text -->
      <div class="w-full">
        <p class="font-poppins font-bold text-teal-400">Hi my name is</p>
        <p class="font-poppins font-bold text-4xl text-white">Billy Miller</p>
        <p class="font-poppins font-bold text-4xl text-teal-400">
          Software Engineer
        </p>
      </div>
    </div>

    <!-- <div class="flex justify-center">
        <ul
          class="absolute z-50 flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
        >
          <NavItem linkName="About" />
          <NavItem linkName="Work" />
          <NavItem linkName="Projects" />
          <NavItem linkName="Contact" />
        </ul>
      </div> -->
  </nav>
</template>
