module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/svelte",
	core: {
		builder: "@storybook/builder-vite",
	},
	// This doesn't work because `require``is not ESM
	// "svelteOptions": {
	//   "preprocess": require("../svelte.config.js").preprocess
	// },
	features: {
		storyStoreV7: true,
	},
};
