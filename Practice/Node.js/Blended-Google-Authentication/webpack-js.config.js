const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      // requires absolute path
      path: path.resolve(__dirname, 'dist'),
    },
    target: 'node',
    node: {
      // if these values are not set like this, then __filename and __dirname in the project will be blank
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /(node_modules|tests)/,
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
            failOnError: false,
            failOnWarning: false,
          },
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|tests)/,
          loader: 'babel-loader',
        },
      ],
    },
  };
};
