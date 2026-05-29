# 归档：vendor/runtime 缓存拆分

日期：2026-05-29

## 目标

改善生产构建的 vendor/runtime 缓存拆分，提高长期缓存稳定性。

## 关联待办

- TODO-0009

## 计划

1. 在生产构建中启用单独 runtime chunk。
2. 增加 vendor cache group，将 `node_modules` 依赖拆到独立 chunk。
3. 保留现有 styles cache group，并设置更明确的优先级。
4. 更新项目事实文档中的构建行为说明。
5. 运行生产构建验证产物拆分。
6. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `webpack.prod.js` 已增加 `runtimeChunk: 'single'`。
- `webpack.prod.js` 已增加 `vendors` cache group，用于拆分 `node_modules` 依赖。
- `styles` cache group 已保留，并补充 `priority: 10`。
- `docs/project-facts.md` 已同步记录 runtime 和 vendors 拆分行为。
- 将 TODO-0009 更新为 `archived`。

## 验证

- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 构建产物包含 `js/runtime.*.js`。
- 构建产物包含 `js/vendors.*.js`。
- 构建产物包含页面入口 `js/index.*.js` 和 `js/about.*.js`。
- 构建产物继续包含 `css/common.*.css`、`css/index.*.css` 和 `css/about.*.css`。
- 已检查 `dist/index.html`，确认 runtime、vendors 和页面入口脚本已注入。

## 决策

- 使用 `runtimeChunk: 'single'`，让多个页面共享同一个 runtime chunk。
- 将 `node_modules` 依赖统一命名为 `vendors` chunk，便于长期缓存。
- 本阶段不继续细分不同 vendor 包，避免对当前小型模板引入过度复杂的 cache group。

## 后续事项

- 下一阶段建议推进 TODO-0005：区分开发/生产环境 CSS loader 行为。
- 构建时仍有 Browserslist 数据过期提示，可在依赖维护阶段处理。
