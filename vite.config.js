import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html']
    }
  }
});