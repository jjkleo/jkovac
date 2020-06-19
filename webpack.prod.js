const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,{
  mode:'production',
  output:{
    filename:'[name].[hash].js',
    chunkFilename:'[id].[hash].js',//非入口chunk的文件名称
  },
  plugins:[
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template:'./public/template.html',
      filename:'index.html',
      inject: true, //默认值，script标签位于html文件的 body 底部
      title:'demo',
      favicon:"./public/favicon.ico",
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  performance: {
    hints: "warning",//性能提示
    maxAssetSize: 250000,//最大文件大小
    maxEntrypointSize: 250000//最大入口文件大小
  }
});