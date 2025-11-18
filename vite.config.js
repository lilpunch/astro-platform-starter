import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: true, // allow network connections
    allowedHosts: [
      'devserver-main--lilpunch2.netlify.app', // Netlify Visual Editor host
    ],
  },
});
