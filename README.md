# 前端多页面 webpack 工程

用于需要 SEO 的多页面网站建设

## 环境要求

- Node.js 20
- pnpm 8.15.9（通过 `package.json#packageManager` 固定）

## 常用命令

1. 安装依赖

```bash
pnpm install
```

2. 开发运行

```bash
pnpm run dev
```

3. 打包构建

```bash
pnpm run build
```

4. 针对打包构建的结果进行预览

```bash
pnpm run preview
```

5. 代码检查

```bash
pnpm run lint
```

6. 格式检查

```bash
pnpm run format:check
```

7. 格式化

```bash
pnpm run format
```

8. GitHub Pages 构建

```bash
pnpm run build:github
```

默认 public path 为 `/${package.json#name}/`，当前项目即 `/multi-page-webpack-project/`。可以通过 `PUBLIC_PATH` 覆盖：

```bash
PUBLIC_PATH=/custom-path/ pnpm run build:github
```

9. 部署到 GitHub Pages

```bash
pnpm run deploy:github
```

`deploy:github` 会先执行 GitHub Pages 构建，再将 `dist/` 发布到 gh-pages 分支。

## 特点

- 基于 `webpack5`，享受 `webpack5` 带来的 **构建效率提升** 和 **构建结果优化**
- 放弃 `webpack4` 的旧 `loaders` 和 `plugins`，采用 `webpack5` 内置的模块代替，配置文件更加优雅
- 内置常见多页面的 `webpack` 配置，让开发者更专注于业务开发，包括但不限于：分包策略、js 降级、代码压缩等
- 仿照 vue 的项目结构，支持类似 vue 的组件复用方式（如示例中的 `header` 和 `footer`），让 vue 开发者快速上手

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

## TODO

待处理清单

- [ ] 控制台美化
