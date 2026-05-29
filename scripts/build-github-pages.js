const { spawnSync } = require('child_process')
const packageJson = require('../package.json')

function normalizePublicPath(publicPath) {
    if (!publicPath) {
        return `/${packageJson.name}/`
    }

    const withLeadingSlash = publicPath.startsWith('/') ? publicPath : `/${publicPath}`

    return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

const publicPath = normalizePublicPath(process.env.PUBLIC_PATH)

console.log(`Building GitHub Pages assets with PUBLIC_PATH=${publicPath}`)

const result = spawnSync('webpack', ['--config', 'webpack.prod.js'], {
    stdio: 'inherit',
    shell: true,
    env: {
        ...process.env,
        PUBLIC_PATH: publicPath
    }
})

process.exit(typeof result.status === 'number' ? result.status : 1)
