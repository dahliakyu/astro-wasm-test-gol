import { defineConfig } from "astro/config";
// https://astro.build/config
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  integrations: [wasm()],
  vite: { plugins: [wasm(), topLevelAwait()] },
});
