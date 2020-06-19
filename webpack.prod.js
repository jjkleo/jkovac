const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
  mode:'production',
  context: path.resolve(__dirname,'./'),//配置上下文
  entry:'./src/main',
  output:{
    filename:'[name].[hash].js',
    chunkFilename:'[id].[hash].js',//非入口chunk的文件名称
    path: path.resolve(__dirname,'dist'),
    crossOriginLoading: false,//禁用跨域加载
  },
  module: {
    //忽略大型的 library
    noParse: function(content) {
      return /jquery|lodash/.test(content);
    },
    rules:[
      {
        test: /\.vue$/,
        use:['vue-loader']
      },
      {
        test:/\.ts/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options:{
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test:/\.js$/,
        use:['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/,
      }
    ]
  },
  resolve:{
    alias: {
      '@': path.resolve(__dirname,'src'),
    },
    mainFields: ["browser", "module", "main"],//第三方模块导入顺序
    enforceExtension: false ,
    extensions: ['.tsx','.ts','.js','.vue','.json',],
    modules: ["node_modules"],//第三方模块位置
    descriptionFiles: ["package.json"], //第三方模块描述文件
  },
  plugins:[
    new VueLoaderPlugin(),
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
  target:'web', //针对web应用
  // devtool:"eval-source-map ",//开发环境source map
  performance: {
    hints: "warning",//性能提示
    maxAssetSize: 250000,//最大文件大小
    maxEntrypointSize: 250000//最大入口文件大小
  }
};