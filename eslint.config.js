// @ts-check
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'crash/**'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2023,
      globals: {
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        clearTimeout: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        fetch: 'readonly',
        performance: 'readonly',
        URL: 'readonly',
        global: 'readonly',
        setImmediate: 'readonly',
        document: 'readonly',
      },
    },
    plugins: { import: importPlugin, 'unused-imports': unusedImports },
    rules: {
      // Prefer clean console output with zero warnings; enforce only critical errors.
      'no-empty': 'off',
      'no-useless-escape': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': 'off',
      'import/order': 'off',
      'import/no-unresolved': 'off',
    },
  },
];
