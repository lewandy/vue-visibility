import VisibilityValidator from "./VisibilityValidator";

// Install the components
export function install(Vue) {
  //TODO: Add directive for disable or hide elements

  Vue.component(VisibilityValidator.name, VisibilityValidator);
}

// Plugin definition.
const plugin = {
  install,
};

export default plugin;

// Auto-install
let globalVueInstance = null;
if (typeof window !== "undefined") {
  globalVueInstance = window.Vue;
} else if (typeof global !== "undefined") {
  globalVueInstance = global.Vue;
}
if (globalVueInstance) {
  globalVueInstance.use(plugin);
}
