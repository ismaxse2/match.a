// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import boundaries from 'eslint-plugin-boundaries';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],

    plugins: {
      boundaries,
      'simple-import-sort': simpleImportSort,
    },

    settings: {
      'boundaries/include': ['src/**/*'],

      'boundaries/elements': layers.map((layer) => ({
        type: layer,
        pattern: `src/${layer}/**`,
        partialMatch: false,
      })),
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },

    rules: {
      // General
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'warn',
      eqeqeq: ['error', 'always'],
      curly: ['warn', 'all'],

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Import sorting
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Side effects
            ['^\\u0000'],

            // Node.js built-ins
            ['^node:'],

            // External packages
            ['^react$', '^next', '^(?!@/)[@\\w]'],

            // FSD layers
            ['^@/app(?:/|$)'],
            ['^@/pages(?:/|$)'],
            ['^@/widgets(?:/|$)'],
            ['^@/features(?:/|$)'],
            ['^@/entities(?:/|$)'],
            ['^@/shared(?:/|$)'],

            // Other aliases
            ['^@/'],

            // Relative imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],

      'simple-import-sort/exports': 'warn',

      // FSD architecture
      'boundaries/no-unknown-dependencies': 'error',

      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',

          policies: layers.map((layer, index) => ({
            from: {
              element: { type: layer },
            },

            allow: layers.slice(index).map((allowedLayer) => ({
              to: {
                element: { type: allowedLayer },
              },
            })),
          })),
        },
      ],
    },
  }, // Disable rules conflicting with Prettier
  prettier,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'storybook-static/**',
    'coverage/**',
    'next-env.d.ts',
    'public/sitemap.xml',
    'public/robots.txt',
  ]),
  ...storybook.configs['flat/recommended'],
]);

export default eslintConfig;
