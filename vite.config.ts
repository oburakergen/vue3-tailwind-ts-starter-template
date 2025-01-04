import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  appType: 'spa',
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          'vue-router': ['vue-router'],
          'pinia': ['pinia'],
          'axios': ['axios'],
          'crypto-js': ['crypto-js'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false,
      },
    },
  },
  define: {
    __VUE_PROD_DEVTOOLS__: mode !== 'production',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
}));
