const fs = require('fs');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const resolve = (dir) => path.join(__dirname, '.', dir);

const pac = require('../package.json');

const {version, description} = pac;
let {name} = pac;
const scoped = name.includes('/');
name = scoped ? name.replace(/.+\/(.*)/, '$1') : name;
const distDir = path.join(process.cwd(), 'dist');

module.exports = {
  mode: 'production',
  entry: {[name]: './src/index.umd.js'},
  output: {
    path: distDir,
    filename: 'index.min.js',
    libraryTarget: 'umd',
    library: name,
    libraryExport: 'default'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000000,
            outputPath: 'assets'
          }
        }
      },
      {
        test: /\.less$|\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {javascriptEnabled: true}
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.min.css'
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    atnd: 'antd'
  },
  // 压缩
  optimization: {
    minimizer: [
      new TerserPlugin({cache: true, parallel: true}),
      new OptimizeCssAssetsPlugin()
    ]
  }
};
