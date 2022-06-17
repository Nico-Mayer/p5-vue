import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import typescript2 from "rollup-plugin-typescript2"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ["src/components/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: ["vite.config.js"],
      },
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/P5Plugin.ts",
      formats: ["es", "cjs"],
      name: "vueP5",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
