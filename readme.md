# vue-permission-provider

🚪 Shows or hides elements depending of the user permission for Vue.js

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

## With component provider and prop :full in false

```html
<template>
  <div id="app">
    <div>
      <permission-provider :full="false" :permissionId="1000">
        <template v-slot="{ isAuthorized }">
          <button v-show="isAuthorized">My create button</button>
        </template>
      </permission-provider>
    </div>
  </div>
</template>
```

## With prop :full in true, in this case you dont need get the scoped slop becouse the component only will render entirely when the user has the permission.

```html
<template>
  <div id="app">
    <div>
      <permission-provider :full="true" :permissionId="1000">
        <template v-slot>
          <button>My create button</button>
        </template>
      </permission-provider>
    </div>
  </div>
</template>
```

# ⚙️ Props

## Options

 <table>
 	<thead>
    <tr>
    <th>Prop</th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Available values</th>
    </tr>
  </thead>
	<tbody>
    	<tr>
        <td>full</td>
        <td>Boolean</td>
        <td>false</td>
        <td>false</td>
        <td>false,true</td>
        </tr>
        <tr>
        <td>permisionId</td>
        <td>Number</td>
        <td>true</td>
        <td>null</td>
        <td>numbers</td>
        </tr>
    </tbody>
</table>

# 🤝 Contributing

1. Fork this repository.
2. Create new branch with feature name.
3. Go to example and run `npm install` and `npm run dev`.
4. Create your feature in the src files.
5. Commit and set commit message with feature name.
6. Push your code to your fork repository.
7. Create pull request. 🙂

# ⭐️ Support

If you like this project, You can support me with starring ⭐ this repository.

# 📄 License

[MIT](LICENSE)

Developed with ❤️ and ☕️ from the dominican republic 🌴
