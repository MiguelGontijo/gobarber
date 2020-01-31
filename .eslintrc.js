module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base', 'prettier'
  ],
  plugins: [ 'prettier '],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "class-method-use-this": "off",
    "no-param-reasign": "off",
    "camelcase": "off",
    "no-used-vars": [ "error", { "argsIgnoredPattern": "next" }],
  },
};
