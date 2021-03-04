module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['prettier', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  rules: {
    'func-names': ['error', 'never'],
    'no-param-reassign': 0,
    'no-console': 0,
    'no-unused-vars': 1,
  },
};
