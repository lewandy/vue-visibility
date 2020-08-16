<template>
  <div id="app">
    <div>
      <permission-provider :permissionId="1000">
        <template v-slot="slotProps">
          {{slotProps}}
          <button>My create button</button>
        </template>
      </permission-provider>
    </div>
  </div>
</template>

<script>
import PermissionsData from "./permissions.json";

export default {
  name: "App",
  mounted() {
    this["$vpermissions"] = require("./permissions.json");
    console.log(this);
  }
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
