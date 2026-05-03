import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://blog.wildan.dev',
  server: {
    port: parseInt(process.env.PORT ?? '4321'),
    host: true,
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind-ui.js'],
      },
    },
  },
});
