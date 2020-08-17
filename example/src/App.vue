<template>
  <div id="app">
    <div>
      <permission-provider :full="false" :permissionId="permissions.create">
        <template v-slot="{ isAuthorized }">
          <button v-show="isAuthorized">My create button</button>
          <div>Other node</div>
          <div>Other node</div>
        </template>
      </permission-provider>
    </div>
  </div>
</template>

<script>
import PermissionsData from "./permissions.json";

export default {
  name: "App",
  created() {
    this.$root.$vpermissions = [1000, 1002, 1003];
  },
  data: () => ({
    permissions: {
      create: 1000,
    },
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
