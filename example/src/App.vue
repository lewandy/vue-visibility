<template>
  <div id="app">
    <div class="container mx-auto ml-3 mt-2">
      <div class="font-bold text-lg ml-4 mb-6">Vue permission</div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            Shows or hides element depending of user the permission
          </div>
        </div>
        <div class="px-6 py-4">
          <permission-provider :permissionId="permissions.action1">
            <template v-slot>
              <button
                class="mb-2 inline bg-gray-200 shadow-md rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {{ "Action with permission " + permissions.action1 }}
              </button>
            </template>
          </permission-provider>
          <permission-provider :permissionId="permissions.action2">
            <template v-slot="{ isAuthorized }">
              <button
                v-if="isAuthorized"
                class="mb-2 inline bg-gray-200 shadow-md rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {{ "Action with permission " + permissions.action2 }}
              </button>
              <button
                v-else
                class="mb-2 inline bg-gray-200 shadow-md rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {{ "You can't see this. permissionId :" + permissions.action2 }}
              </button>
            </template>
          </permission-provider>
          <permission-provider :permissionId="permissions.action3">
            <template v-slot="{ isAuthorized }">
              <button
                v-if="isAuthorized"
                class="mb-2 inline bg-gray-200 shadow-md rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {{ "Action with permission " + permissions.action3 }}
              </button>
            </template>
          </permission-provider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PermissionsData from "./permissions.json";

export default {
  name: "App",
  created() {
    this.$setPermissions([1000, 3000, 2000]);
  },
  data: () => ({
    permissions: {
      action1: 1000,
      action2: 2000,
      action3: 3000,
    },
  }),
};
</script>

<style></style>
