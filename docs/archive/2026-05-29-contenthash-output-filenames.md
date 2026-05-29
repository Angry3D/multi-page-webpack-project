# 归档：JS/CSS 输出文件统一 contenthash

日期：2026-05-29

## 目标

将 JS 和 CSS 输出文件名统一为基于内容的 `contenthash`，改善生产环境长期缓存语义。

## 关联待办

- TODO-0007

## 计划

1. 将 JS 输出文件名从 `chunkhash` 改为 `contenthash`。
2. 将 CSS 输出文件名从 `fullhash` 改为 `contenthash`。
3. 更新项目事实文档中的构建行为说明。
4. 运行生产构建验证产物命名。
5. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `webpack.base.js` 中 JS 输出文件名已改为 `js/[name].[contenthash:5].js`。
- `webpack.base.js` 中 CSS 输出文件名已改为 `css/[name].[contenthash:5].css`。
- `docs/project-facts.md` 已同步更新构建行为说明。
- 将 TODO-0007 更新为 `archived`。

## 验证

- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 构建产物包含 `js/*.js` 和 `css/*.css` 的 5 位 hash 文件名。
- 构建产物包含 `css/common.*.css`，现有 styles cache group 仍正常生效。

## 决策

- 保持现有 5 位 hash 长度不变，只统一 hash 类型。
- 本阶段不调整资源文件 `static/[name].[hash:5].[ext]`，因为 TODO-0007 仅覆盖 JS/CSS 输出。

## 后续事项

- 下一阶段建议推进 TODO-0008：增加生产环境 CSS 压缩。
- 构建时仍有 Browserslist 数据过期提示，可在依赖维护阶段处理。
