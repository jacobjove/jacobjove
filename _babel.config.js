// https://mui.com/guides/minimizing-bundle-size/#development-environment
// https://github.com/umidbekk/babel-plugin-direct-import#nextjs
module.exports = (api) => {
  const target = api.caller((caller) => caller.target);

  api.cache.using(() => JSON.stringify({ target }));

  const presets = [["@babel/preset-typescript", { allowDeclareFields: true }], "next/babel"];
  const plugins = [
    ["@babel/plugin-transform-typescript", { allowDeclareFields: true }],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "babel-plugin-parameter-decorator",
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "babel-plugin-transform-typescript-metadata",
    "@babel/plugin-transform-modules-commonjs",
  ];

  // Enable optimizations only for the `web` bundle.
  if (target === "web") {
    plugins.push([
      "babel-plugin-direct-import",
      { modules: ["@mui/lab", "@mui/material", "@mui/icons-material"] },
    ]);
  }

  return { presets, plugins };
};
