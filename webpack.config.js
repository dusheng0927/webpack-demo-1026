const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // entry: {
  //   index: './src/index.js', // 代码分离
  //   print: './src/print.js'
  // },
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
  devtool: 'inline-source-map', //eval-cheap-module-source-map, inline-cheap-module-source-map 生产环境使用cheap-module-source-map
  devServer: { // live reloading （热模块加载，不会生成dist,在内存中）
    static: './dist',
    hot: true,
    // 设置请求转发 (代理)
    proxy: {
      '/dashboard/': {
        target: 'https://admin.ostay.cc/', // 例如：axios中设置请求的路径为 'api/dashboard/order/list.json'，在本地会转发请求'https://admin.ostay.cc/dashboard/order/list.json'
        pathRewrite: { // 过滤掉请求中的某个字符， 例如： 'api/dashboard/order/list.json' => 'dashboard/order/list.json'
          'api': ''
        }
      }
    }
  },
  output: {
    filename: 'bundle.js',
    // filename: '[name].bundle.js',
    // filename: '[name].[contenthash].js', // 缓存
    path: path.resolve(__dirname, 'dist'),
  },
  // optimization: { // 方法二：抽离重复的模块lodash
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  // optimization: {
  //   moduleIds: 'deterministic', // 防止verdor文件的hash值变化
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors', // 将第三方依赖打包进vendors
  //         chunks: 'all',
  //       }
  //     }
  //   }
  // },
  // externals: { // 外部化lodash, 不打包进vendor
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_'
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({ // 在dist目录中自动生成html，在html中会引入打包后的js文件
      template: './src/index.html'
    }),
    new CleanWebpackPlugin() // 清空不是本次打包的结果（即清空之前打包的文件）
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader'], // 加载css (先 css-loader 处理, 然后用style-loader将样式放在页面的header里)
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // 加载图片
        // type: 'asset/resource'
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]' // 打包后的图片名称和之前的一致
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // 加载字体
        type: 'asset/resource'
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', 
                {
                 'useBuiltIns': 'usage',
                 corejs: 3
                }
              ], // 使用polufill，兼容低版本浏览器（Array.map, Promise等）
            ]
          }
        }
      }
    ]
  }
}