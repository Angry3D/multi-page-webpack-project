# 归档：开发环境 CSS source map

日期：2026-05-29

## 目标

改善开发环境 CSS source map，提升 CSS 调试体验，同时保持生产构建不输出 CSS source map。

## 关联待办

- TODO-0018

## 计划

1. 将 PostCSS 配置改为按构建环境返回配置。
2. 开发环境开启 PostCSS source map。
3. 生产环境保持 PostCSS source map 关闭。
4. 分别运行开发构建和生产构建验证。
5. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `postcss.config.js` 已改为配置函数。
- 开发环境使用 `map: { inline: true }`。
- 生产环境继续使用 `map: false`。
- 将 TODO-0018 更新为 `archived`。

## 验证

- 已执行 `pnpm exec webpack --config webpack.dev.js`，开发构建成功。
- 已确认开发构建 JS 中包含 CSS inline source map 和原始 less/css 来源。
- 已执行 `pnpm run build`，生产构建成功。
- 已确认生产构建 CSS 和页面入口 JS 中没有 `sourceMappingURL` 残留。

## 决策

- 使用 postcss-loader 提供的 `env` 上下文判断 webpack mode。
- 生产环境保持 CSS source map 关闭，避免额外产物和体积。

## 后续事项

- P3 中剩余 TODO-0016：评估移除 jQuery。
- 下一阶段建议推进 TODO-0016，减少运行时依赖。
