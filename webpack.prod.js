const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CmpressionWebpackPlugin = require('compression-webpack-plugin')

const prodConfig = {
  mode: 'production',
  optimization: {
    splitChunks: {
      //分包配置
      chunks: 'all',
      cacheGroups: {
        styles: {
          test: /[\.css$|\.less]/,
          name: 'common',
          minSize: 0, // 根据实际情况，调整需要分包的最小文件尺寸，0表示只要复用就分包
          minChunks: 2 // 复用几次才分包，配合 minSize 条件一起生效
        }
      }
    }
  },
  plugins: [
    // new WebpackBundleAnalyzer(), // 启用分析视图
    // new CmpressionWebpackPlugin() // 启用资源预压缩，免去服务器压缩的时间
  ]
}

module.exports = merge(baseConfig, prodConfig)
