import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import server from "./server/server";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(vuetify).use(router).use(server).use(store).mount("#app");
