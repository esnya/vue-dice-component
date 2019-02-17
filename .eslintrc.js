module.exports = {
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
