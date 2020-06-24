const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,{
  mode:'production',
  output:{
    filename:'js/[name].[hash].js',
    chunkFilename:'js/[name].[hash].js',//非入口chunk的文件名称
    publicPath:'./' //打算放到web服务器下的目录
  },
  // devtool: 'source-map',
  plugins:[
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template:'./template.html',
      filename:'index.html',
      inject: true, //默认值，script标签位于html文件的 body 底部
      title:'demo',
      favicon:"./static/favicon.ico",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        extractComments: false,//不生成js.LICENSE.txt文件
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  performance: {
    hints: "warning",//性能提示
    maxAssetSize: 400000,//最大文件大小
    maxEntrypointSize: 400000//最大入口文件大小
  }
});