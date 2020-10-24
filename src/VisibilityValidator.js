export default {
  name: "VueVisibility",
  props: {
    identifier: {
      type: Number,
      required: true,
    },
    disable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  mounted() {
    this.isAuthorized = this.verifyPermission(this.identifier);
  },
  render(createElement) {
    const isAuthorized = this.verifyPermission(this.identifier);
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
      return isAuthorized
        ? slots
        : this.getDivWidthoutStyles(createElement, []);
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
    /**
     * Verify if identifier is stored in the app instance.
     * @param {String} permissionIdentifier
     */
    verifyPermission(permissionIdentifier) {
      const criteria = (id) => {
        return id === permissionIdentifier;
      };

      return this.$root.$vpermissions.find(criteria);
    },
  },
};
