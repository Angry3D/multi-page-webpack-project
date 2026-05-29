module.exports = ({ env }) => {
    const isDevelopment = env === 'development'

    return {
        map: isDevelopment ? { inline: true } : false,
        plugins: {
            'postcss-preset-env': {
                stage: 0, //哪怕是处于草案阶段的语法，也需要转换
                preserve: false
            }
        }
    }
}
