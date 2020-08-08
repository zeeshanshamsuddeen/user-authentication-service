module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-one-expression-per-line': 0,
    'max-len': 0,
    'no-multiple-empty-lines': 0,
    'object-property-newline': 'off',
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
    'no-await-in-loop': 'off',
  },
};
