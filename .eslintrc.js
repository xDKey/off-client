module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'jest'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'padded-blocks': ['error', 'never'],
    'newline-before-return': 'error',
    'no-unused-expressions': 'off',
    'prefer-destructuring': 'warn',
    'newline-after-var': 'error',
    'arrow-body-style': 'error',
    'object-shorthand': 'error',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'no-empty': 'error',
    eqeqeq: 'error',
    curly: 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../*'],
            message: "Don't use relative paths in imports",
          },
        ],
      },
    ],
    'jest/prefer-lowercase-title': 'off',
    'jest/prefer-expect-assertions': [
      'warn',
      { onlyFunctionsWithAsyncKeyword: true },
    ],
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
    },
  ],
};
