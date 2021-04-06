module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@configs": "./src/configs",
          "@models": "./src/models",
          "@controllers": "./src/controllers",
          "@views": "./src/views",
          "@services": "./src/services",
          "@utils": "./src/utils",
          "@interfaces": "./src/interfaces",
          "@middlewares/*": "./src/middlewares/*",
          "@routes/*": "./src/routes/*",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
