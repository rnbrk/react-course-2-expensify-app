const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      // Will use babel on js files
      loader: 'babel-loader',

      // Only .js files that are not in node_modules folder
      test: /\.js$/,
      exclude: /node_modules/,
    },
    {
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
      test: /\.s?css$/,
    }],
  },
  // Used when debugging: so when there's an error
  // you see the line in the original source file and not bundle.js!
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
};
