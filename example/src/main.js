import { createApp } from "vue";
import App from "./App.vue";
import VisibilityValidator from "../../src/index";

createApp(App)
  .use(VisibilityValidator)
  .mount("#app");
