# le-tip

Application for calculating and dividing tips in multiple currencies, with conversion to BRL.

## Technologies Used

- Vue 3 with Composition API
- TypeScript
- Pinia for state management
- ShadCN Vue for UI components
- Vite as build tool
- Vitest for unit testing
- Cypress for E2E testing
- Cypress Axe for accessibility testing
- ESLint and Prettier for code quality
- SASS for styling

## Development Standards

- Code formatting with Prettier
- Strict TypeScript checks
- ESLint rules for Vue and TypeScript
- E2E and unit test coverage
- Accessibility compliance testing
  This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Estrutura do Projeto

```sh
    src/
  ├── assets/        # Arquivos estáticos
  ├── components/    # Componentes Vue
  ├── stores/        # Stores Pinia
  ├── styles/        # Arquivos SCSS
  ├── types/         # Definições TypeScript
  └── utils/         # Utilitários
```
