export default {
  props: {
    permissionId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    authorized: true,
    permission: {},
  }),
  render() {
    const slot = this.$scopedSlots.default({
      authorized: this.authorized,
      permission: this.permission,
    });

    return Array.isArray(slot) ? slot[0] : slot;
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    //TODO: Check if the user has permission to see the element
    userHasPermission(permissionId) {},
  },
};
