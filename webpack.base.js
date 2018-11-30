const path = require('path');
const basePath = process.cwd();

module.exports = {
  entry: {
    index: `${basePath}/src/index.tsx`,
  },

  output: {
    path: `${basePath}/dist`,
    filename: "index.js",
  },

  module: {
    rules: [
      // TSLint loader
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'tslint-loader'
      },
      // TypeScript loader
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  }
};
