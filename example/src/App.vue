<template>
  <div class="container">
    <header><h1>💚 Vue Visibility playground 👀</h1></header>

    <div class="card-container">
      <!-- Using provider  component with fallback placeholder -->
      <VueVisibilityProvider :identifier="1234">
        <template v-slot:placeholder>
          <h2>You dont have access to see this</h2>
        </template>
        <div class="card"><h2>CARD 1</h2></div>
      </VueVisibilityProvider>

      <!-- Using the directive -->
      <div v-visibility="123" class="card"><h2>CARD 2</h2></div>

      <!-- Using provider component without fallbal placeholder -->
      <VueVisibilityProvider :identifier="123">
        <div class="card"><h2>CARD 3</h2></div>
      </VueVisibilityProvider>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$root.$setVisibilityPermissions([121, 122, 123]);
  },
};
</script>

<style>
body {
  font-family: monospace;
  background: whitesmoke;
}

.container {
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: rgb(214, 209, 209);
}

.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 42rem;
  height: 20rem;
}

header {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 50%;
  box-shadow: 1px 1px 12px rgb(224, 217, 217);
  background: #c3c0c5;
  border-radius: 8px;
  margin-bottom: 3rem;
}

header h1 {
  color: rgb(49, 47, 47);
}
</style>

