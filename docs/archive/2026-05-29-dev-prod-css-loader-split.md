# 归档：开发/生产 CSS loader 区分

日期：2026-05-29

## 目标

区分开发和生产环境的 CSS loader 行为，让开发环境使用 `style-loader`，生产环境继续抽离 CSS 文件。

## 关联待办

- TODO-0005

## 计划

1. 将共享 Webpack 配置改为可按环境选择 CSS loader。
2. 开发配置使用 `style-loader`，提升开发 CSS 注入和 HMR 体验。
3. 生产配置继续使用 `MiniCssExtractPlugin.loader` 并输出 CSS 文件。
4. 更新项目事实文档中的构建行为说明。
5. 分别运行开发构建和生产构建验证。
6. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `webpack.base.js` 已改为配置工厂，支持 `extractCss` 选项。
- `webpack.dev.js` 使用 `createBaseConfig({ extractCss: false })`。
- `webpack.prod.js` 使用 `createBaseConfig({ extractCss: true })`。
- 开发环境 CSS 使用 `style-loader` 注入。
- 生产环境 CSS 继续使用 `MiniCssExtractPlugin` 抽离。
- `docs/project-facts.md` 已同步记录开发/生产 CSS 处理差异。
- 将 TODO-0005 更新为 `archived`。

## 验证

- 已执行 `pnpm exec webpack --config webpack.dev.js`，开发构建成功。
- 开发构建未输出独立 `css/*.css`，样式随 JS 注入，符合 `style-loader` 行为。
- 已执行 `pnpm run build`，生产构建成功。
- 生产构建继续输出 `css/common.*.css`、`css/index.*.css` 和 `css/about.*.css`，且 CSS 资源保持 `[minimized]`。
- 生产构建继续输出 runtime、vendors 和页面入口 JS。

## 决策

- 保持一个共享 base 配置工厂，避免复制大段 module rules。
- 只让 CSS 首个 loader 随环境切换，其余 `css-loader`、`less-loader`、`postcss-loader` 保持不变。
- 生产环境继续挂载 `MiniCssExtractPlugin`，开发环境不挂载该插件。

## 后续事项

- P1 构建优化项已全部归档。
- 下一阶段建议进入 P2：优先推进 TODO-0011，完善页面 SEO 元信息。
- 构建时仍有 Browserslist 数据过期提示，可在依赖维护阶段处理。
