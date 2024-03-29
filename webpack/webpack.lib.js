const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const extensions = ['.mjs', '.js', '.ts'];

module.exports = {
  mode: 'production',
  entry: path.resolve('src', 'module.ts'),
  output: {
    path: path.resolve(__dirname, '../', 'lib'),
    publicPath: '/',
    library: {
      name: 'prototype-expansion',
      type: 'umd',
    },
    filename: 'module.js',
    clean: true,
    globalObject: 'globalThis',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, '../tsconfig.json'),
            },
          },
        ],
      },
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
  plugins: [new CleanWebpackPlugin()],
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
