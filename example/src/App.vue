<template>
  <div class="container">
    <header><h1>Vue Visibility</h1></header>

    <div class="card-container">
      <div class="card"><h2>CARD 1</h2></div>
      <div class="card"><h2>CARD 2</h2></div>
      <div class="card"><h2>CARD 3</h2></div>
      <div class="card"><h2>CARD 4</h2></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "App",
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
  background: #9d91a3;
  border-radius: 8px;
  margin-bottom: 3rem;
}

header h1 {
  color: rgb(226, 226, 226);
}
</style>

