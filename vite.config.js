import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        posterDisplay: resolve(process.cwd(), 'works/poster-display/index.html'),
        webDesign: resolve(process.cwd(), 'works/web-design/index.html'),
        brandVisual: resolve(process.cwd(), 'works/brand-visual/index.html'),
        packaging: resolve(process.cwd(), 'works/packaging/index.html'),
        shortVideo: resolve(process.cwd(), 'works/short-video/index.html'),
      },
    },
  },
});
