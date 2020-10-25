import VisibilityProvider from "./VueVisibility";

const VueVisibilityDirective = (el, binding) => {
  const permissionId = binding.value;
  const userPermissions = binding.instance.$getVisibilityPermissions();
  const userIsAuthorized = userPermissions.find((id) => id === permissionId);

  if (!userIsAuthorized) {
    el.parentNode.removeChild(el); //Remove element from the DOM
  }
};

function install(app) {
  //Register directive
  app.directive("visibility", VueVisibilityDirective);

  /**
    Mixin for set methods is entire app.
  */
  app.mixin({
    methods: {
      $setVisibilityPermissions(permissions) {
        app.config.globalProperties.$vpermissions = permissions;
      },
      $getVisibilityPermissions() {
        return app.config.globalProperties.$vpermissions;
      },
    },
  });

  //Register component globally
  app.component(VisibilityProvider.name, VisibilityProvider);
}

export default {
  install,
};

// Auto-install
var inBrowser = typeof window !== "undefined";
if (inBrowser && window.Vue) {
  window.Vue.use({ install });
}
