import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,

  ignores: [
    '**/dist',
    '**/.output',
    '**/.nuxt',
    '**/node_modules',
  ],

  javascript: {
    overrides: {
      'default-param-last': 'error',
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'no-param-reassign': 'warn',
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
        },
      ],
      'no-use-before-define': [
        'error',
        {
          allowNamedExports: false,
          classes: false,
          functions: false,
          variables: true,
        },
      ],
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      'max-statements-per-line': ['error', { max: 2 }],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'arrow-parens': ['error', 'always'],
    },
  },

  typescript: {
    tsconfigPath: './tsconfig.json',

    parserOptions: {
      project: ['./tsconfig.json'],
    },

    overrides: {
      'ts/ban-ts-comment': 'off',
      'ts/consistent-type-definitions': ['error', 'type'],
      'ts/naming-convention': ['error', {
        format: [
          'PascalCase',
        ],
        leadingUnderscore: 'forbid',
        selector: 'interface',
      }, {
          format: [
            'PascalCase',
          ],
          leadingUnderscore: 'forbid',
          selector: 'typeLike',
        }, {
          format: [
            'PascalCase',
            'camelCase',
            'UPPER_CASE',
            'snake_case',
          ],
          leadingUnderscore: 'allow',
          selector: 'variable',
          trailingUnderscore: 'allow',
        }],
      'ts/no-explicit-any': 'warn',
      'ts/no-use-before-define': 'off',
      'ts/prefer-as-const': 'error',
      'ts/prefer-destructuring': 'error',
      'ts/prefer-for-of': 'error',
      'ts/prefer-nullish-coalescing': 'error',
      'ts/prefer-ts-expect-error': 'off',
    },
  },

  vue: {
    overrides: {
      'vue/html-self-closing': 'error',
      'vue/max-attributes-per-line': ['error', {
        multiline: { max: 1 },
        singleline: { max: 20 },
      }],
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/no-restricted-custom-event': ['warn', {
        event: 'input',
        message: 'If you intend a prop for v-model, it should be \'update:modelValue\' in Vue 3.',
        suggest: 'update:modelValue',
      }, {
          event: '/ed$/',
          message: 'Event should be in imperative mood, e.g. \'edit\' instead of \'edited\'.',
        }],
      'vue/no-restricted-html-elements': [
        'error',
        {
          element: 'a',
          message: 'Use <NuxtLink> over <a>',
        },
      ],
      'vue/object-curly-newline': ['error', { consistent: true, multiline: true }],
    },
  },

  stylistic: {
    overrides: {
      // Auto-fixes
      'style/arrow-parens': ['error', 'always'], // auto fix
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'style/max-statements-per-line': ['error', { max: 2 }],
    },
  },

  rules: {
    'antfu/top-level-function': 'off',
    'curly': ['error', 'all'],

    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: [
          '.vue$',
          '.md$',
        ],
      },
    ],
  },
})
