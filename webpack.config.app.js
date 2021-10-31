const HtmlWebpackPlugin = require('html-webpack-plugin');
import fs from 'fs';

const path = require('path');
module.exports = {
  mode: 'development',
  target: 'electron-main',
  entry: path.join(__dirname, 'src/electron/main'),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
