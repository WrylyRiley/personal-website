import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "router-link-exact-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { transition: "fade" },
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("@/views/ResumeView.vue"),
      meta: { transition: "fade" },
    },
    {
      path: "/meetup",
      name: "meetup",
      component: () => import("@/views/MeetupView.vue"),
      meta: { transition: "fade" },
    },
    {
      path: "/skoolie",
      name: "skoolie",
      component: () => import("@/views/SkoolieView.vue"),
      meta: { transition: "fade" },
    },
  ],
});

export default router;
