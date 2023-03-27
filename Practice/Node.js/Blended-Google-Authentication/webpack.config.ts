import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';
const path = require('path');

interface IEnvVariables {
  production: boolean;
}

module.exports = (env: IEnvVariables): Configuration => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/index.ts',
    output: {
      filename: 'app.js',
      path: path.join(__dirname, 'dist'),
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          loader: 'ts-loader',
          options: {},
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts'],
      // Create aliases to import or require certain modules more easily.
      // alias: {
      //   Utilities: path.resolve(__dirname, 'src/utilities/'),
      //   Templates: path.resolve(__dirname, 'src/templates/'),
      // },
      // Now, instead of using relative paths when importing like so:
      // import Utility from '../../utilities/utility';
      // You can use alias
      // import Utility from 'Utilities/utility';
    },
  };
};
