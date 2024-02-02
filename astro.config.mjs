// -*- mode: typescript-ts -*-
// configuration options for Astro project
// https://docs.astro.build/en/guides/configuring-astro

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: 'https://fabrice-salvaire.fr',
    integrations: [
	mdx(),
	sitemap(),
	tailwind(),
	react()
    ]
});
