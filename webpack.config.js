const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry: './src/index.js',
  mode: 'development',
  entry: {
    index: './src/index.js', // 代码分离
    print: './src/print.js'
  },
  // entry: { // 方法1： 抽离重复的模块lodash到shared.bundle.js文件
  //   index: {
  //     import: './src/index.js',
  //     dependOn: 'shared'
  //   },
  //   print: {
  //     import: './src/print.js',
  //     dependOn: 'shared'
  //   },
  //   shared: 'lodash'
  // },
  devtool: 'inline-source-map', // 开发环境用inline-source-map, 生产环境使用source-map
  devServer: { // live reloading
    static: './dist',
    hot: true,
    client: false,
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    // filename: '[name].[contenthash].js', // 缓存
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // publicPath: '/',
  },
  // optimization: { // 方法二：抽离重复的模块lodash
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  optimization: {
    moduleIds: 'deterministic', // 防止verdor文件的hash值变化
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors', // 将第三方依赖打包进vendors
          chunks: 'all',
        }
      }
    }
  },
  // externals: { // 外部化lodash, 不打包进vendor
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_'
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader'], // 加载css (先 style-loader, 后 css-loader)
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // 加载图片
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // 加载字体
        type: 'asset/resource'
      },
      {
        test: /\.xml$/i, // 加载xml数据
        use: ['xml-loader']
      },
      {
        test: /\.(csv|tsv)$/i, // 加载csv数据
        use: ['csv-loader']
      }
    ]
  }
}