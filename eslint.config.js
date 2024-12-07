import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVitest from '@vitest/eslint-plugin';
import pluginCypress from 'eslint-plugin-cypress/flat';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    // Define files that should be linted
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    // Define files and directories to be ignored
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**', 
      '**/dist-ssr/**', 
      '**/coverage/**', 
      'node_modules/**', 
      '.vscode/**',
      '.idea/**'
    ],
  },

  // Vue plugin configuration (Essential)
  ...pluginVue.configs['flat/essential'],

  // TypeScript with Vue configuration
  {
    ...vueTsEslintConfig(),
    parserOptions: {
      project: './tsconfig.json', // Ensure correct TypeScript paths
      extraFileExtensions: ['.vue'],
    },
  },

  // Vitest specific rules
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
    env: {
      vitest: true,
    },
  },

  // Cypress specific rules
  {
    ...pluginCypress.configs.recommended,
    files: [
      'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/support/**/*.{js,ts,jsx,tsx}',
    ],
    env: {
      'cypress/globals': true,
    },
  },

  // Ignore formatting conflicts with Prettier
  skipFormatting,

  // Additional settings
  {
    rules: {
      // General Vue rules
      'vue/multi-word-component-names': 'off', // Disable rule for unique component names
      'vue/attribute-hyphenation': ['error', 'always'], // Require hyphenation in Vue attributes
      'vue/script-setup-uses-vars': 'error', // Ensure variables are used correctly in `<script setup>`

      // General TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore variables starting with "_"
      '@typescript-eslint/no-explicit-any': 'warn', // Avoid using `any`, but as a warning

      // Other best practices
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Allow console in development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Allow debugger in development
    },
  },
];
