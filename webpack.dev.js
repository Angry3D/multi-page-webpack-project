const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // open: true, // 是否自动打开网页
    port: 9090,
    proxy: {
      // 如有跨域问题，在这里配置代理
    }
  }
}

module.exports = merge(baseConfig, devConfig)
