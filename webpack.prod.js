const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const createBaseConfig = require('./webpack.base.js')
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CmpressionWebpackPlugin = require('compression-webpack-plugin')

const prodConfig = {
    mode: 'production',
    optimization: {
        runtimeChunk: 'single',
        minimizer: ['...', new CssMinimizerPlugin()],
        splitChunks: {
            //分包配置
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: -10
                },
                styles: {
                    test: /\.(css|less)$/,
                    name: 'common',
                    minSize: 0, // 根据实际情况，调整需要分包的最小文件尺寸，0表示只要复用就分包
                    minChunks: 2, // 复用几次才分包，配合 minSize 条件一起生效
                    priority: 10
                }
            }
        }
    },
    plugins: [
        // new WebpackBundleAnalyzer(), // 启用分析视图
        // new CmpressionWebpackPlugin() // 启用资源预压缩，免去服务器压缩的时间
    ]
}

module.exports = merge(createBaseConfig({ extractCss: true }), prodConfig)
