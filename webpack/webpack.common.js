const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const extensions = ['.mjs', '.js', '.ts'];

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    extensions,
    plugins: [
      new TsconfigPathsPlugin({
        extensions,
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  },
};
