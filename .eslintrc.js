module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],

  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "no-console": "off",
  },
};
