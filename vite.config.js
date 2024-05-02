import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite';
import { transformerDirectives } from 'unocss';
import presetUno from 'unocss/preset-uno';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
      ],
      transformers: [transformerDirectives()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000', // 后端服务地址
        changeOrigin: true, // 需要虚拟托管站点，以便可以跨域
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径，移除 /api 前缀
      },
    },
  },
})
