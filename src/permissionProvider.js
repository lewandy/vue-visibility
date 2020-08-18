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

    //Verify that has at least one node
    if (!slots) {
      return this.getDivWidthoutStyles(createElement, []);
    }

    if (this.full) {
      //Verify if full prop is passed to evaluate all child nodes.
      return isAuthorized
        ? slots.length === 1
          ? slots
          : this.getDivWidthoutStyles(createElement, slots)
        : this.getDivWidthoutStyles(createElement, []);
    }

    //Verify if the provider has only one node.
    if (slots.length == 1) {
      return slots;
    }

    //Create a container element for render multiple childrens.
    return this.getDivWidthoutStyles(createElement, slots);
  },
  methods: {
    getDivWidthoutStyles(createElement, vnodes) {
      return createElement(
        "div",
        {
          attrs: {
            style: "all:unset",
          },
        },
        vnodes
      );
    },
    //TODO: Check if the user has permission to see the element
    verifyPermission(permissionId) {
      return this.$root.$vpermissions.find((id) => id === permissionId);
    },
  },
};
