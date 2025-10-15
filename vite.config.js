import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/responsive-landing-page/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
      },
    },
  },
});
