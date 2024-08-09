import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://bayazidi.xyz',
  integrations: [mdx(), react(),UnoCSS({
    injectReset: true,
  })]
});
