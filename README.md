# 前端多页面 webpack 工程

用于需要 SEO 的多页面网站建设

## 常用命令

1. 安装依赖

```bash
npm i
```

2. 开发运行

```bash
npm run dev
```

3. 打包构建

```bash
npm run build
```

4. 针对打包构建的结果进行预览

```bash
npm run preview
```

## 特点

- 基于 `webpack5`，享受 `webpack5` 带来的 **构建效率提升** 和 **构建结果优化**
- 放弃 `webpack4` 的旧 `loaders` 和 `plugins`，采用 `webpack5` 内置的模块代替，配置文件更加优雅
- 内置常见多页面的 `webpack` 配置，让开发者更专注于业务开发，包括但不限于：分包策略、js 降级、代码压缩等
- 仿照 vue 的项目结构，支持类似 vue 的组件复用方式（如示例中的 `header` 和 `footer`），让 vue 开发者快速上手

## TODO

待处理清单

- [ ] 控制台美化
