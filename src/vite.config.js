import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: true, // allows network access
    strictPort: true, // ensures dev server uses the same port
    allowedHosts: [
      'devserver-main--lilpunch2.netlify.app', // Netlify Visual Editor host
    ],
  },
});
