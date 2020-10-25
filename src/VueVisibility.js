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
    const userPermissions = context.$root.$vpermissions;

    if (!userPermissions) {
      //TODO: Improve error handling.
      console.error("Permissions not found");
      return;
    }

    const userIsAuthorized = userPermissions.find(
      (item) => item === identifier
    );

    if (!userIsAuthorized) {
      if (disable) {
        //TODO: Add disable styles and set not clickeble
      }

      return context.$slots.placeholder ? context.$slots.placeholder() : null;
    }

    return this.$slots.default();
  },
};
