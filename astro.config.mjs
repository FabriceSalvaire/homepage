// -*- mode: typescript-ts -*-
// configuration options for Astro project
// https://docs.astro.build/en/guides/configuring-astro

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://github.com/natemoo-re/astro-icon
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: 'https://fabrice-salvaire.fr',
    integrations: [
	mdx(),
	sitemap(),
	tailwind(),
	react(),
	icon({
	     include: {
		 // mdi: ["*"], // (Default) Loads entire Material Design Icon set
		 mdi: [
		     'arrow-up-thin',
		     'menu',
		 ],
	     },
	}),
    ]
});
