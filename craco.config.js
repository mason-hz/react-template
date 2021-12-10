/* eslint-disable */
const CracoLessPlugin = require('craco-less');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { NODE_ENV } = process.env;

const Webpack = {
  production: {
    plugins: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log'],
          },
        },
      }),
      // Ignore all local files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },
  development: {},
};

module.exports = {
  devServer: {},
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: Webpack[NODE_ENV],
};
