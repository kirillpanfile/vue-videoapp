import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VideoWatch from "../views/VideoWatch.vue";
import VideoCreate from "../views/VideoCreate.vue";
import TagVideoList from "../views/TagVideoList.vue";
import AdminVideoList from "../views/AdminVideoList.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/admin/videos",
    name: "admin-video-list",
    component: AdminVideoList,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/video/new",
    name: "video-create",
    component: VideoCreate,
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
    params: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
