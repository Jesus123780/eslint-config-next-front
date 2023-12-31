const MAX_PROPS_PER_LINE_SINGLE = 2
const MAX_PROPS_PER_LINE_MULTI = 1

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  ignorePatterns: [
    'public/fallback-development.js',
    'public/sw.js',
    'public/worker-development.js'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // react hooks validations
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'space-infix-ops': 'error',
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'max-len': ['error', { 'code': 1000 }],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: {
          single: MAX_PROPS_PER_LINE_SINGLE,
          multi: MAX_PROPS_PER_LINE_MULTI
        }
      }
    ],
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'consistent-return': 2,
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-else-return': 1,
    semi: [1, 'never'],
    'space-unary-ops': 2,
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'one-var': [2, 'never'],
    'no-var': 'error',
    'arrow-body-style': ['error', 'always'],
    'no-console': 'error',
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          BinaryExpression: true
        }
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 2
      }
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-sort-props': [
      'error',
      {
        noSortAlphabetically: false
      }
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned']
  }
}
