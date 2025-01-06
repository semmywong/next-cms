/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@next-cms/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'no-unused-vars': 'off',
  },
};
