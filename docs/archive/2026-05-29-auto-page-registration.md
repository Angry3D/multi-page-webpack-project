# 归档：自动化页面注册

日期：2026-05-29

## 目标

减少新增页面时的手动配置步骤，让 `pages.js` 自动从 `src/pages/` 发现页面入口，同时保持当前 Webpack 配置使用方式不变。

## 关联待办

TODO-0020

## 计划

1. 确认当前页面目录约定和 `pages.js` 输出结构。
2. 将 `pages.js` 改为扫描 `src/pages/` 自动生成页面配置。
3. 更新 README、`docs/project-facts.md` 和 `AGENTS.md` 中的页面注册说明。
4. 运行 lint、format check、开发配置构建和生产构建。
5. 更新 backlog 和 progress。

## 完成内容

- 将 `pages.js` 改为使用 Node `fs` 和 `path` 扫描 `src/pages/`。
- 自动排除 `src/pages/common/`。
- 仅将同时包含 `index.js` 和 `index.html` 的一级目录识别为页面。
- 保持原有输出规则：`index` 输出 `index.html`，其他页面输出 `<page>.html`。
- 保持 `pages.js` 对外导出结构不变，因此 `webpack.base.js` 无需调整。
- 更新 README 新增页面指南，移除手动登记 `pages.js` 的步骤。
- 更新 `docs/project-facts.md` 和 `AGENTS.md` 中的页面注册事实。

## 验证

- `node -e "console.log(JSON.stringify(require('./pages'), null, 2))"` 已确认当前自动发现 `index` 和 `about`，输出名保持 `index.html` 和 `about.html`。
- `pnpm run lint` 已通过。
- `pnpm run format:check` 已通过。
- `pnpm exec webpack --config webpack.dev.js` 已通过。
- `pnpm run build` 已通过。

## 决策

- `index` 页面固定排在导出对象最前，其余页面按目录名排序。
- 不新增 glob 依赖，使用 Node 标准库完成扫描。
- 本阶段不调整导航自动生成，导航高亮仍由公共 header 的 `navItems` 配置控制。

## 后续事项

- P4 中可继续推进 TODO-0021：让部署 public path 更可配置。
