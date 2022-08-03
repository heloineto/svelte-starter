# Svelte Starter

Uses:

- [SvelteKit](https://kit.svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

# How to re-create it

1. Run npm create, as shown in the [SvelteKit docs](https://kit.svelte.dev/docs/introduction#getting-started)

   ```
   npm create svelte@latest my-app
   cd my-app
   ```

2. Install Storybook. [Instructions here](https://storybook.js.org/docs/svelte/get-started/install)

3. Install Tailwind. [Instructions here](https://tailwindcss.com/docs/guides/sveltekit)

4. Prettier configuration (`.prettierrc`)

   Trailing commas improve developer experience. [See why](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)

   ```js
   "trailingComma": "es5"
   ```

   Use double quotes to be consistent with HTML

   ```js
   "singleQuote": false
   ```

5. ESLint configuration (`.eslintrc.cjs`)

   Extend these extra rulesets:

   - [plugin:@typescript-eslint/recommended-requiring-type-checking](https://typescript-eslint.io/docs/linting/configs/#recommended-requiring-type-checking)
   - [plugin:@typescript-eslint/strict](https://typescript-eslint.io/docs/linting/configs/#strict)

   Add these extra rules:

   ```js
   rules: {
       "@typescript-eslint/consistent-type-imports": "error",
       "@typescript-eslint/sort-type-union-intersection-members": "error",
   }
   ```

6. Add Husky and lint-staged

7. Add vscode eslint on save and recommended extensions (`.vscode/extensions.json`)

8. Add vscode eslint on settings (`.vscode/settings.json`)

9. Add automatic tailwind class sorting with prettier. [Instructions here](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

10. Add `*.html` to `.eslintignore`, since the parser `@typescript-eslint/parser` does not support it.
    This might be the best solution for simple use cases, where theres only one `app.html` and `.html` files aren't used often.

11. Edit configuration files:

- Remove `.eslintignore` and put its contents on `.eslintrc.cjs` [ignorePatterns](https://eslint.org/docs/latest/user-guide/configuring/ignoring-code) to make it more concise

- Change `.prettierrc` to `.prettierrc.cjs` for more consistency between configuration files

- In `.eslintrc.cjs`

  ```js
  parserOptions: {
  	sourceType: "module",
  	ecmaVersion: 2020,
  +	project: ["tsconfig.json"],
  },
  ```

  - In `tsconfig.json`

  ```json
  {
      "extends": "./.svelte-kit/tsconfig.json",
   +  "include": ["."],
   ...
  }
  ```
