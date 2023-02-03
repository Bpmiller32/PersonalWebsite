<script setup>
// Js
import { onMounted } from "vue";
import { animate, inView } from "motion";

// Sections
import SpotlightMobile from "../sections/SpotlightMobile.vue";
import AboutMobile from "../sections/AboutMobile.vue";
import WorkMobile from "../sections/WorkMobile.vue";
import ProjectsMobile from "../sections/ProjectsMobile.vue";
import ContactMobile from "../sections/ContactMobile.vue";
import FooterMobile from "../sections/FooterMobile.vue";

// Routing function
function RouteLink0(route) {
  const about = document.querySelector("#aboutMobile");
  const work = document.querySelector("#workMobile");
  const projects = document.querySelector("#projectsMobile");
  const contact = document.querySelector("#contactMobile");

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

  inView(".animateFadeIn", (info) => {
    animate(info.target, { opacity: [0, 1] }, { duration: 2 });
  });

  inView(".animateFadeInFast", (info) => {
    animate(info.target, { opacity: [0, 1] }, { duration: 1.3 });
  });

  inView(".animateFadeUpSlow", (info) => {
    animate(info.target, { opacity: [0, 0.2], y: [50, 0] }, { duration: 2.5 });
  });
});
</script>

<template>
  <!-- Spotlight section -->
  <SpotlightMobile @route-link0="RouteLink0" />

  <!-- Content sections -->
  <div class="absolute w-full">
    <AboutMobile />
    <WorkMobile id="workMobile" />
    <ProjectsMobile id="projectsMobile" />
    <ContactMobile id="contactMobile" />
    <FooterMobile @route-link0="RouteLink0" />
  </div>
</template>
