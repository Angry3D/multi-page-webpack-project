# 归档：footer 文档流布局

日期：2026-05-29

## 目标

替换 footer 的绝对定位布局，避免页面内容增长时 footer 覆盖内容。

## 关联待办

- TODO-0015

## 计划

1. 移除 footer 的绝对定位。
2. 使用页面级 flex column 布局，让 footer 在短页面贴底、长页面随内容下移。
3. 运行生产构建验证。
4. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `src/pages/common/footer/index.less` 已移除 `position: absolute`、`left`、`right` 和 `bottom`。
- `src/pages/common/footer/index.less` 已增加 `flex-shrink: 0`。
- `src/assets/global.less` 已为页面增加基础 flex column 布局。
- `src/pages/index/index.less` 和 `src/pages/about/index.less` 的 `.content` 已增加 `flex: 1`。
- 将 TODO-0015 更新为 `archived`。

## 验证

- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 已确认构建产物 CSS 中不再包含 footer 的 `position:absolute` 或 `bottom:0`。
- 已确认构建产物 CSS 中包含 `body{display:flex;flex-direction:column}`、`.content{flex:1}` 和 `.footer-wrap{flex-shrink:0}`。

## 决策

- 使用普通文档流和 flex column 布局，不引入额外 DOM 包裹。

## 后续事项

- 下一阶段建议推进 TODO-0017：补充基础全局 CSS 默认值。
- TODO-0016 仍可作为单独重构项评估是否移除 jQuery。
