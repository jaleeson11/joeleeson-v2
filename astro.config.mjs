// @ts-check
import { defineConfig } from 'astro/config';

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
});
