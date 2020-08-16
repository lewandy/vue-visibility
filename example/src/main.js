import Vue from "vue";
import App from "./App.vue";

import PermissionProvider from "../../src/";

Vue.config.productionTip = false;

Vue.use(PermissionProvider);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
