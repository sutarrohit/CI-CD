export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021, // Set ECMAScript version
      sourceType: "module",
    },
    rules: {
      "no-console": "off",
      semi: ["error", "always"],
    },
  },
];
