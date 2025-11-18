import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [astro()],
    server: {
      host: true,
      port: 3000, // or whatever your dev server uses
      strictPort: true,
      allowedHosts: [
        'devserver-main--lilpunch2.netlify.app', // Netlify Visual Editor host
      ],
    },
  };
});
