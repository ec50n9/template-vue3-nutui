// @ts-check
import { join } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import NutUIResolver from "@nutui/nutui/dist/resolver"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        "vue",
      ],
    }),
    Components({
      resolvers: [NutUIResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`,
      }
    }
  },
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
});
