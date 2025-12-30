// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://joeleeson.com',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: [],
    remotePatterns: [],
  },
  compressHTML: true,
  integrations: [icon()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
