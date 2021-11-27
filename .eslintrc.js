module.exports = {
  extends: [require.resolve('@kkb/fig-lint/dist/eslint')],

  rules: {
    'import/no-dynamic-require': 0,
    'global-require': 0,
    camelcase: 0,
  },
  globals: {
    location: true,
    systemName: true,
    __webpack_public_path__: true,
  },
};
