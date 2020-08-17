<a href="https://www.buymeacoffee.com/lewandy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

<p>
  <a href="https://npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/v/vue-element-loading.svg?style=flat" alt="NPM version"></a>
  <a href="https://npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/dm/vue-element-loading.svg?style=flat" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/vue-element-loading"><img src="https://img.shields.io/npm/l/vue-element-loading.svg?style=flat" alt="License"></a>
  <a href="https://www.npmjs.com/package/vue-element-loading"><img src="https://travis-ci.org/biigpongsatorn/biigpongsatorn.github.io.svg?branch=dev" alt="Build Status"></a>
</p>

# vue-permission-provider

🚪 Shows or hides elements depending of the user permission for Vue.js

# 👀 Document & Demo Page

- [Docs & Live demo]()

# 💻 Install

```sh
npm install --save vue-permission-provider
```

or

```sh
yarn add vue-permission-provider
```

# 🕹 Usage

```javascript
import Vue from "vue";
import PermissionProvider from "vue-permission-provider";

Vue.use(PermissionProvider);
```

# 🔎 Example

## With component provider

```html
<template>
  <div id="app">
    <div>
      <permission-provider :full="false" :permissionId="1000">
        <template v-slot="{ isAuthorized }">
          <button v-show="isAuthorized">My create button</button>
          <div>Other node</div>
          <div>Other node</div>
        </template>
      </permission-provider>
    </div>
  </div>
</template>
```

# ⚙️ Props


# 🤝 Contributing

1. Fork this repository.
2. Create new branch with feature name.
3. Run `npm install` and `npm run dev`.
4. Create your feature.
5. Commit and set commit message with feature name.
6. Push your code to your fork repository.
7. Create pull request. 🙂

# ⭐️ Support

If you like this project, You can support me with starring ⭐ this repository.

# 📄 License

[MIT](LICENSE)

Developed with ❤️ and ☕️ from the dominican republic 🌴 
