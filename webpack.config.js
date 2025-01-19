const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ChildProcess } = require('child_process');

module.exports = {
  devtool: 'source-map',
  entry: './scripts.ts',
   resolve: {
    extensions: ['.js'],
  },
  module: {
     },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', 
      filename: 'index.html', 
    }),
  ],
  stats: {
    children: true, // Enable detailed statistics for child compilations
  },
};
