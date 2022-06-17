import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/P5Plugin.ts",
      formats: ["es", "cjs"],
      name: "vueP5",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue", "p5"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
