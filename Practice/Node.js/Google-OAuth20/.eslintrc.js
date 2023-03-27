module.exports = {
  //By default, ESLint will look for configuration files in all parent folders up to the root directory.
  // This can be useful if you want all of your projects to follow a certain convention, but can sometimes lead to
  // unexpected results. To limit ESLint to a specific project, set this to `true` in a configuration in the root of
  // your project.
  root: true,
  env: {
    // commonjs: true,
    es2021: true,
    node: true,
  },
  // plugin:prettier/recommended should be the last extension
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // use ignorePatterns or .eslintignore file
  // ignorePatterns: ['node_modules'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    // 'no-console': 'warn',
    // 'no-unused-vars': 'warn',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-missing-import': 'off',
  },
  // parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',
};
