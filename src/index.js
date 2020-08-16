import PermissionProvider from "./permissionProvider";

export default {
  install(Vue, options = {}) {
    Vue.$vpermissions = [];

    Vue.use("permission-provider", PermissionProvider);
  },
};
