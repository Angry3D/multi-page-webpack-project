# 归档：生产环境 CSS 压缩

日期：2026-05-29

## 目标

增加生产环境 CSS 压缩，减少线上 CSS 资源体积。

## 关联待办

- TODO-0008

## 计划

1. 安装 `css-minimizer-webpack-plugin` 作为开发依赖。
2. 在生产 Webpack 配置中加入 CSS minimizer，并保留默认 JS minimizer。
3. 更新项目事实文档中的构建行为说明。
4. 运行生产构建验证。
5. 更新 backlog 状态，并归档本阶段。

## 完成内容

- 新增开发依赖 `css-minimizer-webpack-plugin`。
- 新增开发依赖 `postcss`，显式满足 CSS 工具链的 peer 依赖。
- `webpack.prod.js` 已引入 `CssMinimizerPlugin`。
- `optimization.minimizer` 已配置为 `['...', new CssMinimizerPlugin()]`，保留 Webpack 默认 JS 压缩。
- `docs/project-facts.md` 已同步记录 CSS 压缩行为。
- 将 TODO-0008 更新为 `archived`。

## 验证

- 已执行 `pnpm list postcss css-minimizer-webpack-plugin cssnano --depth 1`，确认 CSS 压缩相关依赖解析正常。
- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 构建输出中的 CSS 资源带有 `[minimized]` 标记。
- `css/common.*.css` 由约 1.98 KiB 降至约 1.49 KiB。

## 决策

- 使用 webpack 文档推荐的 `css-minimizer-webpack-plugin`。
- 使用 `...` 保留生产模式默认 JS minimizer，避免引入 JS 压缩回退。
- 显式声明 `postcss` 开发依赖，避免 CSS 压缩依赖树出现 peer warning。

## 后续事项

- 下一阶段建议推进 TODO-0009：改善 vendor/runtime 缓存拆分。
- 构建时仍有 Browserslist 数据过期提示，可在依赖维护阶段处理。
