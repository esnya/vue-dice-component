/* eslint import/no-extraneous-dependencies: [error, { devDependencies: true }] */
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const devtool = isProduction ? 'source-map' : 'eval-source-map';
// const exclude = /node_modules/;
const exclude = /node_modules|lib/;

export default {
  devtool,
  entry: {
    bundle: './src',
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: [
              'babel-loader',
              'eslint-loader',
            ],
          },
        },
      },
      {
        test: /\.js$/,
        exclude,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loaders: ['css-loader', 'stylus-loader'],
      },
    ],
  },
  plugins: [],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};
