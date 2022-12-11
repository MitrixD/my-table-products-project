const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-typescript',
              [
                'babel-plugin-styled-components',
                {
                  ssr: false,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.tsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: [
              '@babel/plugin-transform-typescript',
              '@babel/plugin-transform-runtime',
              [
                'babel-plugin-styled-components',
                {
                  ssr: false,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), new CleanWebpackPlugin()],
};
