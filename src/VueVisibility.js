export default {
  name: "VueVisibilityProvider",
  props: {
    identifier: {
      required: true,
    },
    disable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  render(context) {
    const { identifier, disable } = context;
    const permissions = context.$root.$vpermissions;

    if (!permissions) {
      //TODO: Improve error handling.
      console.error("Permissions not found");
      return;
    }

    const userIsAuthorized = permissions.find((item) => item === identifier);

    if (!userIsAuthorized) {
      if (disable) {
        //TODO: Add disable styles and set not clickeble
      }

      return context.$slots.placeholder ? context.$slots.placeholder() : null;
    }

    return this.$slots.default();
  },
};
