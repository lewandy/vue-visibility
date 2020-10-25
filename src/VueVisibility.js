export default {
  name: "VueVisibilityProvider",
  props: {
    identifier: {
      required: true,
    },
  },
  render(context) {
    const { identifier } = context;
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
      return context.$slots.placeholder ? context.$slots.placeholder() : null;
    }

    return this.$slots.default();
  },
};
