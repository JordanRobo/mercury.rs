import { preprocessMeltUI, sequence } from "@melt-ui/pp";
import adapter from "svelte-adapter-bun";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { mdsvex } from "mdsvex";
import remarkToc from "remark-toc";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: sequence([
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      remarkPlugins: [remarkToc, { tight: true }],
    }),
    preprocessMeltUI(),
  ]),
  kit: {
    adapter: adapter(),
  },
};

export default config;
