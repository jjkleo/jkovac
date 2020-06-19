const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
  mode:'development',
  context: path.resolve(__dirname,'./'),//配置上下文
  entry:'./src/main',
  output:{
    filename:'[name].js',
    chunkFilename:'[name].js',//非入口chunk的文件名称
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
          'style-loader',
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
  ],
  target:'web', //针对web应用
  devtool:"eval-source-map ",//开发环境source map
  devServer:{
    host:'localhost',
    port:8081,
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
};