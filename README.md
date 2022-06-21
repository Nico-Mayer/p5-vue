<br>

<div align="center">
<img src="https://github.com/Nico-Mayer/p5vue/blob/main/public/logo.svg" alt="logo" width="200" />
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
	<a href="https://p5vue-homepage.vercel.app/" target="_blank">📘 Docs + Examples</a>
</p>

<p align="center">
	<del><a href="#" target="_blank">🌱 Simple Demo</a></del> (comming soon)
</p>

## Usage

### Install:

```fish
npm i p5vue
```

<p>
Depending on your environment, you may be alerted upon installing <code>p5vue</code> that <code>p5</code> is a required peer dependency which you must install yourself.
If this is the case:
</p>

```fish
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

  ```vue
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

## Nuxt 3 Setup
<details>
<summary>Setup for Nuxt 3 with SSR</summary>

##### To set the plugin up for Nuxt 3 we have to use some tricks to get it workin.
- Install p5vue
	```fish
	npm i p5vue
	```
- Add Plugin to nuxt 
	- Crate a plugins folder in your root directory ```~/plugins```
	- add a ```p5vue.client.ts``` file in the plugins folder
	- Add the plugin to Nuxt like this:
		```javascript
		// p5vue.client.ts
	
		import { defineNuxtPlugin } from "#app"
		//@ts-ignore
		import p5vue from "p5vue"
		export default defineNuxtPlugin((nuxtApp) => {
  			nuxtApp.vueApp.use(p5vue)
		})
		```
	- Create a ```P5Wrapper.client.vue``` file in ```~/components``` 
		```vue
		// P5Wrapper.client.vue
	
	
		<script setup lang="ts">
		const props = defineProps(["sketch"])
		const sketch = props.sketch
		</script>

		<template>
  		<P5 :sketch="sketch" />
		</template>
		```
		We need this wrapper component to ensure p5 only loads on client side.
	- Now we can use our custom Wrapper inside the complete Nuxt App like this:
		```vue 
		// App.vue 
	
		<script setup lang="ts">
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
  			<P5Wrapper :sketch="sketch" />
		</template>
		```

</details>

## Typescript:

Typescript inst fully supported yet.
To get the Plugin working without type errors do this:

- ```typescript
  // main.ts
  import { createApp } from "vue"
  import App from "./App.vue"
  // @ts-ignore
  import p5vue from "p5vue"

  createApp(App).use(p5vue).mount("#app")
  ```

- ```vue
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
