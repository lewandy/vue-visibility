import PermissionProvider from "./permissionProvider";
import Mixin from "./mixin";

// Install the components
export function install(Vue) {
  // Register a global custom directive called `v-focus`
  Vue.directive("focus", {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
      // Focus the element
      el.focus();
    },
  });
  Vue.mixin(Mixin);
  Vue.component(PermissionProvider.name, PermissionProvider);
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  install,
};

export default plugin;

// Auto-install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
