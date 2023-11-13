import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://lovelyfaisal.github.io',
  base: '/vision-landing',
  integrations: [tailwind()]
});