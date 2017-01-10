const path = require('path');
const WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin');

module.exports = {
  context: __dirname,
  entry: './frontend/check_mate.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
        new WatchLiveReloadPlugin({
            port: 3000,
            files: [
                './frontend/*'
            ]
        }),
    ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ]
  },
  devtool: 'source-maps'
};
