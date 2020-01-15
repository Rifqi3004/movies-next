const withCss = require('@zeit/next-css');
require('dotenv').config()
const webpack = require("webpack");

module.exports = withCss({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/css',
          name: '[name].[ext]',
        },
      },
    });

    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

     /** Allows you to create global constants which can be configured
    * at compile time, which in our case is our environment variables
    */
    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'all',
  },
});
