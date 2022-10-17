const { dependencies } = require("./package.json");

module.exports = {
  name: "list",
  exposes: {
    "./List": "./src/bootstrap",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
