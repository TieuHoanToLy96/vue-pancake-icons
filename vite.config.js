import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/install.js'),
      name: 'VuePancakeIcons',
      fileName: (format) => `vue-pancake-icons.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag,
      }
    }
  })],
})
