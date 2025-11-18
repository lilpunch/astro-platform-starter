import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: '0.0.0.0',
    port: 4321,
    strictPort: true,
    allowedHosts: 'all', // dev server hosts
  },
  preview: {
    host: '0.0.0.0',
    port: 4321,
    strictPort: true,
    allowedHosts: 'all', // preview server hosts (Netlify Visual Editor)
  },
});
