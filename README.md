# 前端多页面 webpack 工程

用于需要 SEO 的多页面网站建设

## 环境要求

- Node.js 20
- pnpm 8.15.9（通过 `package.json#packageManager` 固定）

## 常用命令

```bash
pnpm install        # 安装依赖
pnpm run dev       # 开发运行
pnpm run build     # 生产构建
pnpm run preview   # 预览 dist/
pnpm run lint      # 代码检查
pnpm run format    # 格式化
pnpm run format:check  # 格式检查
```

当前项目尚未配置自动化测试。

GitHub Pages 构建：

```bash
pnpm run build:github
```

默认 public path 为 `/${package.json#name}/`，当前项目即 `/multi-page-webpack-project/`。可以通过 `PUBLIC_PATH` 覆盖：

```bash
PUBLIC_PATH=/custom-path/ pnpm run build:github
```

部署到 GitHub Pages：

```bash
pnpm run deploy:github
```

`deploy:github` 会先执行 GitHub Pages 构建，再将 `dist/` 发布到 gh-pages 分支。

## 特点

- 基于 Webpack 5 的多页面构建模板，每个页面输出独立 HTML。
- `pages.js` 自动扫描 `src/pages/`，新增页面不需要手动登记页面表。
- 页面模板支持独立的 title、description、keywords、robots 和 Open Graph 元信息。
- 公共 head、header 和 footer 片段位于 `src/pages/common/`，适合复用多页面公共结构。
- 已内置 ESLint、Prettier、生产构建、预览和 GitHub Pages 构建脚本。

## AI 协作说明

当前项目已经开始使用 AI 协作做后续优化。让 AI 续作时，请从 `AGENTS.md` 开始；稳定项目事实在 `docs/project-facts.md`，当前阶段在 `docs/progress.md`，未完成或仍需决策的事项在 `docs/backlog.md`，历史归档在 `docs/archive/`。

续作注意事项：

- 项目以 pnpm 为官方包管理器，不要随意改用 npm 或 yarn。
- 推荐使用 Node.js 20，仓库提供 `.nvmrc`。
- 不要把缺少 `node_modules` 误判为源码或构建配置错误。
- 当前页面由 `pages.js` 自动扫描 `src/pages/` 生成，新增页面不需要手动登记页面表。
- `dist/` 是构建产物，排查源码问题时优先看 `src/`、`pages.js` 和 Webpack 配置。
- `docs/backlog.md` 只保留当前未完成或仍需决策的事项；已完成阶段登记到 `docs/archive/README.md`。

## 目录结构

```text
src/
  assets/              # 全局资源和 Less 变量
  pages/
    common/            # 公共 HTML、样式和脚本片段
      head/
      header/
      footer/
      reset.css
    index/             # 首页入口
      index.html
      index.js
      index.less
    about/             # 关于页入口
      index.html
      index.js
      index.less
pages.js               # 自动扫描 src/pages/ 生成多页面注册表
public/                # 原样复制到 dist 的静态文件
scripts/
  build-github-pages.js # GitHub Pages 构建脚本，可配置 PUBLIC_PATH
```

## 新增页面

假设要新增 `contact.html`，推荐按下面的方式操作。

1. 新建页面目录

```text
src/pages/contact/
  index.html
  index.js
  index.less
```

2. 编写页面入口脚本

```js
// src/pages/contact/index.js
import '../common/reset.css'
import './index.less'
import '@/assets/global.less'

import '../common/header'
import '../common/footer'
```

3. 编写页面模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <%= require("html-loader!../common/head/index.html") %>
        <meta name="description" content="联系页面描述" />
        <meta name="keywords" content="联系, 多页面, SEO" />
        <meta property="og:title" content="联系我们" />
        <meta property="og:description" content="联系页面描述" />
        <title>联系我们</title>
    </head>
    <body>
        <%= require("html-loader!../common/header/index.html") %>
        <div class="content">This is Contact</div>
        <%= require("html-loader!../common/footer/index.html") %>
    </body>
</html>
```

4. 页面会自动注册

`pages.js` 会自动扫描 `src/pages/` 下的一级页面目录，并排除 `common/`。只要页面目录同时包含 `index.js` 和 `index.html`，构建时就会自动生成页面配置。

输出文件名规则：

- `src/pages/index/` 输出 `index.html`
- `src/pages/contact/` 输出 `contact.html`

5. 如需导航高亮，在 `src/pages/common/header/index.html` 中增加导航链接。

```html
<a href="./contact.html" class="tab-item contact">Contact</a>
```

再在 `src/pages/common/header/index.js` 的 `navItems` 中登记匹配规则。

```js
{
    selector: '.tab-item.contact',
    isActive: pathname => pathname.endsWith('/contact.html')
}
```

完成后运行：

```bash
pnpm run dev
pnpm run build
```
