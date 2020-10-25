import VisibilityProvider from "./VueVisibility";

const directive = (app) => {
  return (el, binding) => {
    const permissions = app.config.globalProperties.$vpermissions;

    const userCanSeeElement = permissions.find(
      (item) => item === binding.value
    );

    if (!userCanSeeElement) {
      el.parentNode.removeChild(el); //Remove element from the DOM
    }
  };
};

// Install the components
export default {
  install(app) {
    //Register directive
    app.directive("visibility", directive(app));

    /**
      Mixin for set methods is entire app.
    */
    app.mixin({
      methods: {
        $setVisibilityPermissions(permissions) {
          app.config.globalProperties.$vpermissions = permissions;
        },
      },
    });

    //Register the component
    app.component(VisibilityProvider.name, VisibilityProvider);
  },
};

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
