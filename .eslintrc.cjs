module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'tailwind.config.js',
    'tailwind-plugins',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css', 'tw'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/no-autofocus': 'off',
  },
};
