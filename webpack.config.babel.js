/* eslint import/no-extraneous-dependencies: [error, { devDependencies: true }] */
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

const extractPlugin = ExtractTextPlugin.extract({
  use: ['css-loader', 'stylus-loader'],
});

const isProduction = process.env.NODE_ENV === 'production';
const devtool = isProduction ? 'source-map' : 'eval-source-map';
const plugins = isProduction ? [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
    },
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
  new ExtractTextPlugin('dice.css'),
] : [
  new ExtractTextPlugin('dice.css'),
];

export default {
  devtool,
  entry: {
    dice: './src/vue',
  },
  output: {
    path: path.join(__dirname, 'lib'),
    publicPath: '/lib/',
    library: 'DiceComponent',
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: extractPlugin,
            js: [
              'babel-loader',
              'eslint-loader',
            ],
          },
        },
      },
      {
        test: /\.obj$/,
        loader: 'obj2html/obj-loader',
        exclude: /node_modules/,
        options: {
          classPrefix: 'vue-dice-component-dice',
          fontSize: 20,
          number: true,
          scale: 40,
        },
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        use: extractPlugin,
        exclude: /node_modules/,
      },
    ],
  },
  plugins,
};
