const { dependencies } = require("./package.json");

module.exports = {
  name: "list",
  exposes: {
    "./List": "./src/bootstrap",
  },
  filename: "remoteEntry.js",
  remotes: {
    store: `store@http://localhost:3003/remoteEntry.js`,
  },
  shared: {
    ...dependencies,
    redux: { singleton: true },
    "redux-devtools-extension": { singleton: true },
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
