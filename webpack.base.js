// webpack-base
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pages = require('./pages')

function getEntry() {
  const result = {}
  for (const key in pages) {
    result[key] = pages[key].js
  }
  return result
}

function getHtmlPlugin() {
  const result = []
  for (const key in pages) {
    result.push(
      new HtmlWebpackPlugin({
        chunks: [key],
        template: path.resolve(__dirname, pages[key].html),
        filename: pages[key].out
      })
    )
  }
  return result
}

module.exports = {
  entry: getEntry(),
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'), // 输出目录为 dist
    filename: 'js/[name].[chunkhash:5].js', // js 输出到 dist/js/xxx
    publicPath: './' // 公用的公共路径
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 别名 @ = src
      _: __dirname // 别名 _ = 工程根目录
    }
  },
  stats: {
    colors: true, // 打包时使用不同的颜色区分信息
    modules: false, // 打包时不显示具体模块信息
    entrypoints: false, // 打包时不显示入口模块信息
    children: false // 打包时不显示子模块信息
  },
  module: {
    rules: [
      {
        // 图片、字体
        test: /\.(png)|(gif)|(jpg)|(svg)|(bmp)|(eot)|(woff)|(ttf)$/i,
        type: 'asset',
        generator: {
          filename: 'static/[name].[hash:5].[ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 不超过该值，使用 inline 模式
          }
        }
      },
      {
        // less
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        // css / pcss
        test: /\.(css)|(pcss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        // js
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      // 复制文件插件
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: './'
        }
      ]
    }),
    ...getHtmlPlugin(), // 应用所有页面模板
    new MiniCssExtractPlugin({
      // 打包 css 代码到文件中
      filename: 'css/[name].[fullhash:5].css'
    })
  ]
}
