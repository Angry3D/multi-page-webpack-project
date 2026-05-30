# 项目事实

最后更新：2026-05-29
语系：cn

本文档记录相对稳定的项目事实。不要用它追踪当前任务，也不要把长期历史归档堆在这里。

## 项目定位

这是一个面向 SEO 场景的 Webpack 5 多页面前端模板。

它不是单页应用。每个页面都会作为独立 HTML 文件构建，并拥有自己的入口 chunk。

## 已确认事实

- 这是一个面向 SEO 场景的 Webpack 5 多页面前端模板。
- 当前页面为 `index` 和 `about`。
- 页面入口由 `pages.js` 自动扫描 `src/pages/` 生成。
- 当前项目使用 pnpm 作为官方包管理器。
- 当前项目推荐使用 Node 20。
- 当前工作区已安装本地依赖。
- 当前 HTML 模板使用 `lang="zh-CN"`。
- 项目当前不再引入 jQuery。
- 项目使用 ESLint flat config 做 JS lint。
- 项目使用 Prettier 做格式化。
- `docs/backlog.md` 只保留未完成或仍需决策的当前事项，已归档事项登记到 `docs/archive/README.md`。
- 项目目前没有自动化测试。

## 推断事实

暂无。

## 待确认事项

暂无。

## 证据来源

- `package.json` 定义了 `dev`、`build`、`preview`、`lint`、`format`、`format:check`、`build:github` 和 `deploy:github` 脚本。
- `package.json` 定义了 `packageManager: pnpm@8.15.9`。
- `.nvmrc` 定义了推荐 Node 主版本为 `20`。
- `pages.js` 自动扫描 `src/pages/`，当前发现 `index` 和 `about` 页面入口。
- 仓库中存在 `webpack.base.js`、`webpack.dev.js` 和 `webpack.prod.js`。
- 仓库中存在 `pnpm-lock.yaml`。
- `pnpm run build` 已在 Node 20 和 pnpm 8.15.9 下验证通过。
- `src/pages/common/header/index.js` 使用原生 DOM API 设置导航 active 状态。

## 当前页面

- `index`
    - 入口：`src/pages/index/index.js`
    - 模板：`src/pages/index/index.html`
    - 输出：`index.html`
    - SEO 标题：`多页面 SEO 前端模板首页`

- `about`
    - 入口：`src/pages/about/index.js`
    - 模板：`src/pages/about/index.html`
    - 输出：`about.html`
    - SEO 标题：`关于多页面 SEO 前端模板`

页面由 `pages.js` 自动扫描 `src/pages/` 生成。

## 技术栈

- Webpack 5
- webpack-dev-server
- html-webpack-plugin
- html-loader
- Less
- PostCSS with `postcss-preset-env`
- Babel with `@babel/preset-env`
- core-js 按需 polyfill
- ESLint
- Prettier
- mini-css-extract-plugin
- css-minimizer-webpack-plugin
- copy-webpack-plugin

## 重要文件

- `pages.js`
  自动页面注册表。扫描 `src/pages/` 下同时包含 `index.js` 和 `index.html` 的一级目录，排除 `common/`，用于生成 Webpack entries 和 HTML plugins。

- `webpack.base.js`
  共享 Webpack 配置工厂。定义入口、输出、别名、模块规则、静态资源处理、HTML 生成、public 资源复制和可配置 CSS 处理策略。

- `webpack.dev.js`
  开发配置。使用 development mode、source map、`style-loader` 和端口 `9090` 的 dev server。

- `webpack.prod.js`
  生产配置。使用 production mode、`MiniCssExtractPlugin`、CSS 压缩、runtime chunk 和 splitChunks 配置。

- `postcss.config.js`
  PostCSS 配置。开发环境开启 inline source map，生产环境关闭 source map。

- `.babelrc`
  Babel preset-env 配置，使用 `useBuiltIns: "usage"` 和 `corejs: 3`。

- `eslint.config.js`
  ESLint flat config。忽略 `dist/` 和 `node_modules/`，并分别配置浏览器源码与 Node/CommonJS 配置文件环境。

- `.prettierrc.json`
  Prettier 配置。当前格式规则为 4 空格缩进、单引号、无分号和 100 字符宽度。

- `.prettierignore`
  Prettier 忽略列表。当前忽略 `dist/`、`node_modules/` 和 `pnpm-lock.yaml`。

- `scripts/build-github-pages.js`
  GitHub Pages 构建脚本。默认 public path 根据 `package.json#name` 生成为 `/<name>/`，也可以通过 `PUBLIC_PATH` 环境变量覆盖。

- `docs/backlog.md`
  当前待办资源池。只保留未完成或仍需决策的事项，并记录下一个待办 ID。

- `docs/archive/README.md`
  已完成阶段的归档索引和归档模板。

- `webpack.base.js`
  JS rule 使用 `babel-loader` 处理项目 JS，并排除 `node_modules`。

## 目录结构

```text
src/
  assets/
    global.less
    variable.less
    logo.png
  pages/
    common/
      head/
      header/
      footer/
      reset.css
    index/
    about/
public/
  favicon.ico
scripts/
  build-github-pages.js
```

## 页面组成

每个页面会引入：

- reset CSS
- 页面专属 Less
- 全局 Less
- 公共 header 脚本
- 公共 footer 脚本

每个页面模板包含页面级 title、description、keywords、robots 和 Open Graph 基础元信息。

通用 head 片段位于 `src/pages/common/head/index.html`，用于复用 charset、viewport、robots 和 `og:type` 等跨页面 meta。

公共 header 脚本通过 `navItems` 配置根据当前路径给导航项设置 `active` class 和 `aria-current="page"`。
该逻辑使用原生 DOM API 实现。

页面使用基础 flex column 布局，footer 位于文档流中并通过 `flex-shrink: 0` 保持高度。

`src/assets/global.less` 提供项目级默认样式，包括 `box-sizing`、页面基础高度、字体 fallback、文本渲染和图片默认规则。

公共 HTML 片段通过 `html-loader` 注入页面模板，例如：

```html
<%= require("html-loader!../common/header/index.html") %>
```

## 构建行为

- JavaScript 输出到 `dist/js/[name].[contenthash:5].js`。
- CSS 输出到 `dist/css/[name].[contenthash:5].css`。
- 资源由 Webpack asset modules 处理。
- 小于 10KB 的资源会被 inline。
- 其他资源输出到 `dist/static/`。
- `public/` 中的文件会复制到 `dist/`。
- 普通生产构建中，`PUBLIC_PATH` 可以覆盖默认 public path。
- GitHub Pages 构建默认使用 `/${package.json#name}/` 作为 public path，当前为 `/multi-page-webpack-project/`。
- GitHub Pages 构建也可以通过 `PUBLIC_PATH` 覆盖默认 public path。
- Babel 处理 JS 时会排除 `node_modules`。
- 开发构建使用 `style-loader` 注入 CSS。
- 生产构建使用 `MiniCssExtractPlugin` 抽离 CSS 文件。
- 生产构建会使用 `css-minimizer-webpack-plugin` 压缩 CSS。
- 生产构建会单独输出 runtime chunk。
- 生产构建会将 `node_modules` 依赖拆分到 `vendors` chunk。

## 当前已知事实

- 当前项目使用 pnpm 作为官方包管理器。
- 当前项目推荐使用 Node 20。
- 当前工作区已安装本地依赖。
- `pnpm run build` 当前验证通过。
- 项目当前不再引入 jQuery。
- 项目使用 ESLint flat config 做 JS lint。
- 项目使用 Prettier 做格式化。
- `docs/backlog.md` 只保留当前未完成或仍需决策的事项。
- 项目目前没有自动化测试。
- 当前 HTML 模板使用 `lang="zh-CN"`。
