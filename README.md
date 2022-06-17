<br>

<div align="center">
<img src="https://github.com/Nico-Mayer/p5vue/blob/main/public/logo.svg" alt="logo" width="80" />
</div>

<h1 align="center">p5vue</h1>

<p align="center">
<a href="https://www.npmjs.com/package/p5vue">
	<img src="https://img.shields.io/npm/v/p5vue" alt="NPM version">
</a>
</p>
<p>
	This npm package provides a  Vue3 <code>P5</code> componente which accepts a <code>sketch</code/> property, making it extremely easy to get one or more <a href="https://p5js.org/">p5</a> sketches running in Vue without scoping issues.
</p>
<br/>
<p>
Compatible with Vue3 & Nuxt Js.
</p>
<br/>

<p align="center">
	<del><a href="#" target="_blank">📘 Docs + Examples</a></del> (comming soon)
</p>

<p align="center">
	<del><a href="#" target="_blank">🌱 Simple Demo</a></del> (comming soon)
</p>

## Usage

### Install:

```ps
npm i p5vue
```

<p>
Depending on your environment, you may be alerted upon installing <code>p5vue</code> that <code>p5</code> is a required peer dependency which you must install yourself.
If this is the case:
</p>

```ps
npm i -D p5
```

Now add `p5vue` to your project:

- Import the Plugin to your main.js file

  ```javascript
  // main.js || main.ts
  import { createApp } from "vue"
  import App from "./App.vue"

  import p5vue from "p5vue"

  createApp(App).use(p5vue).mount("#app")
  ```

- Use the <code>P5</code> component inside the app

  ```javascript
  <script setup>
  import p5 from "p5"

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(500, 500)
    }

    p5.draw = () => {
      p5.background("#fff000")
    }
  }
  </script>

  <template>
  	<P5 :sketch="sketch"/>
  </template>
  ```

### Output:

<div align="center">
	cooming soon
</div>

## Typescript:

Typescript inst fully supported yet.
To get the Plugin working without type errors do this:

- ```javascript
  // main.ts
  import { createApp } from "vue"
  import App from "./App.vue"
  // @ts-ignore
  import p5vue from "p5vue"

  createApp(App).use(p5vue).mount("#app")
  ```

- ```javascript
  // Add the p5 type in function argument
  <script setup>
  import p5 from "p5"

  const sketch = (p5: p5) => {
    p5.setup = () => {
      p5.createCanvas(500, 500)
  	}

    p5.draw = () => {
      p5.background("#fff000")
    }
  }
  </script>

  <template>
  	<P5 :sketch="sketch"/>
  </template>
  ```
