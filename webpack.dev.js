const path = require('path');
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,{
  mode:'development',
  output:{
    filename:'[name].js',
    chunkFilename:'[name].js',//非入口chunk的文件名称
  },
  devtool:"eval-source-map ",//开发环境source map
  devServer:{
    host:'localhost',
    port:8090,
    open:false,
    hot:true,//模块热替换
    inline:true,//启用内联模式
    historyApiFallback: true,
    clientLogLevel:"debug",//控制台日志级别 
    https: false,//不使用https模式
    compress:true,//启用gzip 压缩
  },
  watch:true,
  watchOptions:{
    ignored: /node_modules/,
    aggregateTimeout: 300,//构建延迟
    poll: 1000//每秒检查一次变动
  },
  performance: {
    hints: false,//不展示提示
  }
});