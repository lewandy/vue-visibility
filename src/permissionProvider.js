export default {
  name: "permission-provider",
  props: {
    permissionId: {
      type: Number,
      required: true,
    },
    full: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  mounted() {
    this.isAuthorized = this.verifyPermission(this.permissionId);
  },
  render(createElement) {
    const isAuthorized = this.verifyPermission(this.permissionId);

    const slots = this.$scopedSlots.default({
      isAuthorized: isAuthorized,
    });

    //Verify if all slot will be evaluate
    if (this.full) {
      return isAuthorized
        ? createElement("div", [...slots])
        : createElement("div");
    }

    //Verify that has at least one node
    if (!slots) {
      return createElement("div");
    }

    //Create a container element for render multiple childrens.
    const elemetContainer = createElement("div", [...slots]);
    return elemetContainer;
  },
  methods: {
    //TODO: Check if the user has permission to see the element
    verifyPermission(permissionId) {
      return this.$root.$vpermissions.find((id) => id === permissionId);
    },
  },
};
