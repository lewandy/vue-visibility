export default {
  methods: {
    /**
     * Add permissions to app root instance
     * @param {Array<any>} permissions
     */
    $setPermissions(permissions) {
      this.$root.$vpermissions = permissions;
    },
    /**
     * Get permissions from the root instance
     * @param {Array<any>} permissions
     */
    $getPermissions() {
      return this.$root.$vpermissions;
    },
  },
};
