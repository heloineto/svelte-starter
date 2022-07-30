# Svelte Starter

Uses:
- [SvelteKit](https://kit.svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [pnpm](https://pnpm.io/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)

# How it is created

1. Run npm create, as shown in the [docs](https://kit.svelte.dev/docs/introduction#getting-started)
    ```
    npm create svelte@latest my-app
    cd my-app
    ```

1. Install pnpm. ([Instructions here](https://pnpm.io/installation))

1. Prettier configuration (`.prettierrc`)

    Trailing commas improve developer experience. [See why](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)
    ```js
    "trailingComma": "es5"
    ```

    Use double quotes to be consistent with HTML
    ```js
    "singleQuote": false
    ```

1. ESLint configuration (`.eslintrc.cjs`)

    Extend these extra rulesets:
    - [plugin:@typescript-eslint/recommended-requiring-type-checking](https://typescript-eslint.io/docs/linting/configs/#recommended-requiring-type-checking)
    - [plugin:@typescript-eslint/strict](https://typescript-eslint.io/docs/linting/configs/#strict)


    Add these rules:
    ```js
    rules: {
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/sort-type-union-intersection-members": "error",
    }
    ```