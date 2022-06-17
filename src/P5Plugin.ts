import type { App } from "vue"
import { P5 } from "./components"

export default {
  install: (app: App) => {
    app.component("P5", P5)
  },
}

export { P5 }
