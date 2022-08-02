module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/strict",
		"prettier",
		"plugin:storybook/recommended",
	],
	plugins: ["svelte3", "@typescript-eslint"],
	ignorePatterns: [
		"*.cjs",
		".DS_Store",
		"node_modules",
		"/build",
		"/.svelte-kit",
		"/package",
		".env",
		".env.*",
		"!.env.example",
		"*.html",
		"pnpm-lock.yaml",
		"package-lock.json",
		"yarn.lock",
	],
	overrides: [
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
		},
	],
	settings: {
		"svelte3/typescript": () => require("typescript"),
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/sort-type-union-intersection-members": "error",
	},
};
