# 归档：导航 aria-current 状态

日期：2026-05-29

## 目标

为当前激活导航项增加 `aria-current="page"`，提升导航语义和可访问性。

## 关联待办

- TODO-0014

## 计划

1. 在 header 脚本中为当前页面导航项设置 `aria-current="page"`。
2. 保持现有 active class 行为不变。
3. 运行生产构建验证。
4. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `src/pages/common/header/index.js` 已新增 `setActiveTab` helper。
- 当前导航项会同时设置 `active` class 和 `aria-current="page"`。
- 将 TODO-0014 更新为 `archived`。

## 验证

- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 已确认构建后的页面入口 JS 包含 `aria-current` 设置逻辑。

## 决策

- 本阶段不配置化导航匹配规则，避免与 TODO-0013 混在一起。
- 保持现有 jQuery 实现，移除 jQuery 留给 TODO-0016 评估。

## 后续事项

- 下一阶段建议推进 TODO-0013：配置化导航 active 状态。
