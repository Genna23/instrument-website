import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://прокат-инструментов-витебск.бел',
  integrations: [tailwind(), icon(), sitemap()]
});