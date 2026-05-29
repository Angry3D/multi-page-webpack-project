const fs = require('fs')
const path = require('path')

const pagesDir = path.resolve(__dirname, 'src/pages')
const ignoredDirs = new Set(['common'])

function isPageDir(dirName) {
    const dirPath = path.join(pagesDir, dirName)

    if (ignoredDirs.has(dirName)) {
        return false
    }

    if (!fs.statSync(dirPath).isDirectory()) {
        return false
    }

    return (
        fs.existsSync(path.join(dirPath, 'index.js')) &&
        fs.existsSync(path.join(dirPath, 'index.html'))
    )
}

function getOutputName(pageName) {
    return pageName === 'index' ? 'index.html' : `${pageName}.html`
}

function sortPageNames(pageA, pageB) {
    if (pageA === 'index') {
        return -1
    }

    if (pageB === 'index') {
        return 1
    }

    return pageA.localeCompare(pageB)
}

function createPages() {
    return fs
        .readdirSync(pagesDir)
        .filter(isPageDir)
        .sort(sortPageNames)
        .reduce((pages, pageName) => {
            pages[pageName] = {
                js: `./src/pages/${pageName}`,
                html: `./src/pages/${pageName}/index.html`,
                out: getOutputName(pageName)
            }

            return pages
        }, {})
}

module.exports = createPages()
