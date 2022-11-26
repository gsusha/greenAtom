module.exports = {
  env: {
    es2021: true,
    browser: true
  },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
      '@typescript-eslint'
  ],
  settings: {
   'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
