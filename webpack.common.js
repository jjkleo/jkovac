const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports={
  context: path.resolve(__dirname,'./'),//配置上下文
  entry:'./src/main',
  output:{
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
          isDev?'style-loader':MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|bmp)$/i,
        use: [{
          loader: 'url-loader',
          options:{
            limit: 1024*30,//30KB以下的文件采用url-loader
            fallback: 'file-loader'
          }
        }]
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options:{
            limit: 1024*30,
            fallback: 'file-loader'
          }
        }]
      },
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  resolve:{
    alias: {
      '@': path.resolve(__dirname,'./src'),
    },
    mainFields: ["browser", "module", "main"],//第三方模块导入顺序
    enforceExtension: false ,
    extensions: ['.tsx','.ts','.js','.vue','.json',],
    modules: ["node_modules"],//第三方模块位置
    descriptionFiles: ["package.json"], //第三方模块描述文件
  },
  plugins:[
    new VueLoaderPlugin(),
  ],
  target:'web', //针对web应用
};