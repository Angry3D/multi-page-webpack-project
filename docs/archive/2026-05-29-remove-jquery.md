# 归档：移除 jQuery

日期：2026-05-29

## 目标

评估并移除项目中的 jQuery 运行时依赖，减少模板默认依赖体积。

## 关联待办

TODO-0016

## 计划

1. 确认 jQuery 的实际使用范围。
2. 使用原生 DOM API 替换 header 中的 jQuery 用法。
3. 从依赖和锁文件中移除 jQuery。
4. 运行开发配置构建和生产构建验证。

## 完成内容

- 确认 jQuery 仅用于 `src/pages/common/header/index.js` 的 DOM ready、class 和属性设置。
- 将 header 导航 active 状态逻辑改为原生 DOM API。
- 从 `package.json` 和 `pnpm-lock.yaml` 移除 `jquery`。
- 更新 `docs/project-facts.md`，记录项目当前不再引入 jQuery。

## 验证

- `rg -n "jquery|from 'jquery'|from \"jquery\"|\\$\\(" src package.json pnpm-lock.yaml pages.js webpack.base.js webpack.dev.js webpack.prod.js` 无匹配。
- `pnpm exec webpack --config webpack.dev.js` 已通过。
- `pnpm run build` 已通过。
- 浏览器验证已通过：首页 Home 导航设置 `active` 和 `aria-current="page"`，关于页 About 导航设置 `active` 和 `aria-current="page"`。

## 决策

- 保留现有 `navItems` 配置结构，只替换 DOM 操作实现，避免扩大重构范围。
- 使用 `document.readyState` 和 `DOMContentLoaded` 兼容脚本在不同注入时机下执行。

## 后续事项

- P4 中可继续推进 TODO-0019：增加格式化和 lint。
- P4 中可继续推进 TODO-0022：扩展 README 的新增页面指南。
