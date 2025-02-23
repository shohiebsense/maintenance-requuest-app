const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Polyfill Node.js modules
defaultConfig.resolver.extraNodeModules = {
  path: require.resolve("path-browserify"),
};

module.exports = defaultConfig;
