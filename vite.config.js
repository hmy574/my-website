import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const page = (name) => fileURLToPath(new URL(`./${name}`, import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: page('index.html'),
        about: page('about.html'),
        contact: page('contact.html'),
      },
    },
  },
});
