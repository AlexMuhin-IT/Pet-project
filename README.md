[//]: # (Стек:)

[//]: # (React+)

[//]: # (TypeScript+)

[//]: # (Vite+)

[//]: # (TanStack Router+)

[//]: # (TanStack Query+)

[//]: # (Zustand+)

[//]: # (React hook form+)

[//]: # (zod+)

[//]: # (date fns,)

[//]: # (Mock service worker +)



[//]: # (# React + TypeScript + Vite)

[//]: # ()
[//]: # (This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.)

[//]: # ()
[//]: # (Currently, two official plugins are available:)

[//]: # ()
[//]: # (- [@vitejs/plugin-react]&#40;https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md&#41; uses [Babel]&#40;https://babeljs.io/&#41; for Fast Refresh)

[//]: # (- [@vitejs/plugin-react-swc]&#40;https://github.com/vitejs/vite-plugin-react-swc&#41; uses [SWC]&#40;https://swc.rs/&#41; for Fast Refresh)

[//]: # ()
[//]: # (## Expanding the ESLint configuration)

[//]: # ()
[//]: # (If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:)

[//]: # ()
[//]: # (- Configure the top-level `parserOptions` property like this:)

[//]: # ()
[//]: # (```js)

[//]: # (export default tseslint.config&#40;{)

[//]: # (  languageOptions: {)

[//]: # (    // other options...)

[//]: # (    parserOptions: {)

[//]: # (      project: ['./tsconfig.node.json', './tsconfig.app.json'],)

[//]: # (      tsconfigRootDir: import.meta.dirname,)

[//]: # (    },)

[//]: # (  },)

[//]: # (}&#41;)

[//]: # (```)

[//]: # ()
[//]: # (- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`)

[//]: # (- Optionally add `...tseslint.configs.stylisticTypeChecked`)

[//]: # (- Install [eslint-plugin-react]&#40;https://github.com/jsx-eslint/eslint-plugin-react&#41; and update the config:)

[//]: # ()
[//]: # (```js)

[//]: # (// eslint.config.js)

[//]: # (import react from 'eslint-plugin-react')

[//]: # ()
[//]: # (export default tseslint.config&#40;{)

[//]: # (  // Set the react version)

[//]: # (  settings: { react: { version: '18.3' } },)

[//]: # (  plugins: {)

[//]: # (    // Add the react plugin)

[//]: # (    react,)

[//]: # (  },)

[//]: # (  rules: {)

[//]: # (    // other rules...)

[//]: # (    // Enable its recommended rules)

[//]: # (    ...react.configs.recommended.rules,)

[//]: # (    ...react.configs['jsx-runtime'].rules,)

[//]: # (  },)

[//]: # (}&#41;)

[//]: # (```)
