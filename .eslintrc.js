module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  overrides: [
    // graphql-eslint will apply the rules from the second overrides block to code found in these files:
    // https://the-guild.dev/graphql/eslint/docs/getting-started#apply-plugin-to-graphql-definitions-defined-in-code-files
    {
      files: ['*.ts', '*.tsx'],
      processor: '@graphql-eslint/graphql',
      excludedFiles: ['./apps/titan-marketing/**'],
    },
    {
      files: ["src/**/*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      extends: ["plugin:@graphql-eslint/operations-recommended"],
      parserOptions: {
        operations: ["./src/**/*"],
        schema: "./schema.graphql",
      },
      rules: {},
    },
  ],
  rules: {},
};
