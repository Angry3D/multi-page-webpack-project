# 归档：Babel 排除 node_modules

日期：2026-05-29

## 目标

让 Babel 处理项目源码时排除 `node_modules`，减少不必要的依赖转译。

## 关联待办

- TODO-0006

## 计划

1. 在 `webpack.base.js` 的 JS rule 中添加 `exclude: /node_modules/`。
2. 运行生产构建验证。
3. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `webpack.base.js` 的 JS rule 已添加 `exclude: /node_modules/`。
- 保持现有 Babel preset 配置不变。
- 将 TODO-0006 更新为 `archived`。

## 验证

- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 构建产物包含 `index.html`、`about.html`、页面 JS、公共 CSS 和静态资源。

## 决策

- 本阶段只缩小 Babel loader 的处理范围，不调整 Babel preset、polyfill 策略或 Browserslist 数据。

## 后续事项

- 构建时仍有 Browserslist 数据过期提示，可在依赖维护阶段处理。
- 下一阶段可继续推进 P1 构建优化项，例如 TODO-0007、TODO-0008 或 TODO-0009。
