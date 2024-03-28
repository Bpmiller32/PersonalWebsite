<script setup>
// Js
import { onMounted } from "vue";
import { animate, inView } from "motion";

// Sections
import SpotlightDesktop from "../sections/SpotlightDesktop.vue";
import AboutDesktop from "../sections/AboutDesktop.vue";
import WorkDesktop from "../sections/WorkDesktop.vue";
import ProjectsDesktop from "../sections/ProjectsDesktop.vue";
import ContactDesktop from "../sections/ContactDesktop.vue";
import FooterDesktop from "../sections/FooterDesktop.vue";

// Routing function
function RouteLink0(route) {
  const about = document.querySelector("#aboutDesktop");
  const work = document.querySelector("#workDesktop");
  const projects = document.querySelector("#projectsDesktop");
  const contact = document.querySelector("#contactDesktop");

  if (route == "about") {
    about.scrollIntoView({ behavior: "smooth" });
  } else if (route == "work") {
    work.scrollIntoView({ behavior: "smooth" });
  } else if (route == "projects") {
    projects.scrollIntoView({ behavior: "smooth" });
  } else if (route == "contact") {
    contact.scrollIntoView({ behavior: "smooth" });
  } else {
  }
}

onMounted(() => {
  const animations = [
    ".animateFadeUp",
    ".animateFadeUpSlow",
    ".animateFadeUpRotate",
    ".animateFadeIn",
    ".animateFadeInFast",
  ];

  animations.forEach((animation) => {
    document.querySelectorAll(animation).forEach((element) => {
      if (!element.className.includes(" opacity-0")) {
        element.className += " opacity-0";
      }
    });
  });

  // Global animations
  inView(".animateFadeUp", (info) => {
    animate(info.target, { opacity: [0, 1], y: [30, 0] }, { duration: 1 });
  });

  inView(".animateFadeUpSlow", (info) => {
    animate(info.target, { opacity: [0, 0.2], y: [50, 0] }, { duration: 2.5 });
  });

  inView(".animateFadeUpRotate", (info) => {
    animate(
      info.target,
      { opacity: [0, 1], y: [50, 0], rotate: 6 },
      { duration: 1.3 }
    );
  });

  inView(".animateFadeIn", (info) => {
    animate(info.target, { opacity: [0, 1] }, { duration: 2 });
  });

  inView(".animateFadeInFast", (info) => {
    animate(info.target, { opacity: [0, 1] }, { duration: 1.3 });
  });
});
</script>

<template>
  <!-- Spotlight section -->
  <SpotlightDesktop @route-link0="RouteLink0" />

  <!-- Content sections -->
  <main class="absolute w-full">
    <AboutDesktop />
    <WorkDesktop id="workDesktop" />
    <ProjectsDesktop id="projectsDesktop" />
    <ContactDesktop id="contactDesktop" />
    <FooterDesktop @route-link0="RouteLink0" />
  </main>
</template>
