import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: '0.0.0.0',   // ← exposes server to all network interfaces
    port: 4321,         // same port as Astro dev server
    strictPort: true,
    allowedHosts: [
      'devserver-main--lilpunch2.netlify.app', // Visual Editor host
    ],
  },
});
