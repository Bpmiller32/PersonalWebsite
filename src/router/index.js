import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import MobilePage from "../pages/MobilePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MobilePage,
  },
  {
    path: "/testing",
    name: "Testing",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
