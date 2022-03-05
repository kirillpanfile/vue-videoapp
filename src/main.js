/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import server from "./server/server";

createApp(App).use(store).use(router).use(server).mount("#app");
