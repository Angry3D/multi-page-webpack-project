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
                    minSize: 0,
                    test: /\.css$/,
                    minChunks: 2
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
