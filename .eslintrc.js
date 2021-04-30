// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '!.prettierrc.js', 'components/Layout.tsx'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['airbnb-typescript','plugin:prettier/recommended','prettier/@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // suppress errors for missing 'import React' in files
   "react/react-in-jsx-scope": "off",
   "react/no-unescaped-entities": "off",
   "no-restricted-syntax": "off",
   "no-plusplus": "off",
   'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
  }
}