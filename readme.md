# Vue Visibility 👀

Hides elements depending of the user permissions.

## Vue 3 support

# Install

```sh
npm install --save vue-visibility
```

or

```sh
yarn add vue-visibility
```

# 🕹 Usage

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import VueVisibility from "@lewandy/vue-visibility";

const application = createApp(App);

application.use(VueVisibility);

application.mount("#app");
```

## Set user permissions or identifiers globally

```javascript
<script>
export default {
  name: "App",
  created() {
    this.$root.$setVisibilityPermissions([121, 122, 123]);
  },
};
</script>
```

# 🔎 Example

## Using provider  component with placeholder if not authorized.

```html
<template>
      <VueVisibilityProvider :identifier="124">
        <template v-slot:placeholder>
          <h2>You don't have access to see this.</h2>
        </template>
        <div class="card"><h2>CARD 1</h2></div>
      </VueVisibilityProvider>
</template>
```

## Using directive.

```html
<template>
  <div>
    <div v-visibility="123" class="card">
	<h2>CARD 2</h2>
    </div>
  </div>
</template>
```

# 📦 VueVisibilityProvider component reference 

 <table>
 	<thead>
    <tr>
	    <th>Prop</th>
	    <th>Type</th>
	    <th>Required</th>
	    <th>Default</th>
    </tr>
  </thead>
    <tbody>
    	<tr>
		<td>identifier</td>
		<td>Any</td>
		<td>true</td>
		<td>null</td>
        </tr>
    </tbody>
</table>

# 🤝 Contributing

1. Fork this repository.
2. Create new branch with feature name.
3. Go to example folder and run `npm install` and `npm run serve`.
4. The plugin sources files is located in /src/VueVisibility.js.
5. Commit and set commit message with feature name.
6. Push your code to your fork repository.
7. Create pull request. 🙂

# ⭐️ Support

If you like this project, You can support me with starring ⭐ this repository.

# 📄 License

[MIT](LICENSE)

Developed with ❤️ and ☕️ from the dominican republic 🌴
