import { createApp } from "vue";
import App from "./App.vue";
import VueVisibility from "../../src/index";

const application = createApp(App);

application.use(VueVisibility);

application.mount("#app");
