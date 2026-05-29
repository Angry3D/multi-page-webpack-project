# 归档：生产 CSS splitChunks 正则修正

日期：2026-05-29

## 目标

修正生产环境 CSS splitChunks 正则，避免错误的字符类匹配。

## 关联待办

- TODO-0004

## 计划

1. 将 `webpack.prod.js` 中 styles cache group 的正则改为精确匹配 `.css` 和 `.less` 文件后缀。
2. 安装依赖并运行生产构建验证。
3. 更新 backlog 状态，并归档本阶段。

## 完成内容

- 将 `webpack.prod.js` 中的 `test: /[\.css$|\.less]/` 改为 `test: /\.(css|less)$/`。
- 保持现有 splitChunks 策略不变，只修正匹配规则。
- 将 TODO-0004 更新为 `archived`。

## 验证

- 已执行 `pnpm install --frozen-lockfile` 安装依赖。
- 已确认 `pnpm-lock.yaml` 未发生变更。
- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 构建产物包含 `css/common.*.css`，styles cache group 生效。

## 决策

- 本阶段只做最小修复，不调整 vendor/runtime 拆分、CSS 压缩或 hash 策略；这些优化仍留在 backlog 中单独推进。

## 后续事项

- 下一阶段可从 P1 优化项中选择，例如 TODO-0005、TODO-0006、TODO-0007、TODO-0008 或 TODO-0009。
- 构建时出现 Browserslist 数据过期提示，后续可在依赖维护阶段处理。
