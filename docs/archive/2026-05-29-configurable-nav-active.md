# 归档：配置化导航 active 状态

日期：2026-05-29

## 目标

将 header 脚本中的导航 active 匹配逻辑配置化，降低后续新增页面时的维护成本。

## 关联待办

- TODO-0013

## 计划

1. 将 header 脚本中的导航匹配规则整理为配置数组。
2. 保持现有 active class 和 `aria-current="page"` 行为不变。
3. 运行生产构建验证。
4. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `src/pages/common/header/index.js` 已新增 `navItems` 配置数组。
- 导航 active 匹配从硬编码 if/else 改为 `navItems.find(...)`。
- 现有首页和关于页匹配语义保持不变。
- 当前导航项仍会设置 `active` class 和 `aria-current="page"`。
- 将 TODO-0013 更新为 `archived`。

## 验证

- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 已确认构建后的页面入口 JS 包含 `navItems` 配置、路径匹配和 `aria-current` 设置逻辑。

## 决策

- 保留当前路径匹配语义：`/` 和 `/index.html` 匹配首页，`/about.html` 匹配关于页。
- 本阶段不移除 jQuery，留给 TODO-0016 评估。

## 后续事项

- P2 中剩余 TODO-0010：抽出共享 HTML head 配置。
- 下一阶段建议推进 TODO-0010，进一步减少页面模板 head 重复。
