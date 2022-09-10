module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/strict",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier",
	],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		project: "./tsconfig.json",
	},
	ignorePatterns: ["*.cjs", "playwright.config.ts", "svelte.config.js"],
	plugins: ["svelte3", "@typescript-eslint"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	settings: {
		"svelte3/typescript": () => require("typescript"),
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
