import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import VideoWatch from "../views/VideoWatch.vue";
import TagVideoList from "../views/TagVideoList.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutPage.vue"),
  },
  {
    path: "/video/:id",
    name: "video-watch",
    component: VideoWatch,
    params: true,
  },
  {
    path: "/tag/:id",
    name: "tag",
    component: TagVideoList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
