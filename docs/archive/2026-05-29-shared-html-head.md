# 归档：共享 HTML head 配置

日期：2026-05-29

## 目标

抽出共享 HTML head 配置，减少页面模板中重复的基础 meta。

## 关联待办

- TODO-0010

## 计划

1. 新增公共 head 片段，承载跨页面通用 meta。
2. 更新 `index` 和 `about` 页面模板，引入公共 head 片段。
3. 保留页面级 title、description、keywords 和 Open Graph 标题/描述。
4. 运行生产构建验证 HTML 输出。
5. 更新 backlog 状态，并归档本阶段。

## 完成内容

- 新增 `src/pages/common/head/index.html`。
- 公共 head 片段包含 charset、X-UA-Compatible、viewport、robots 和 `og:type`。
- `src/pages/index/index.html` 已引入公共 head 片段。
- `src/pages/about/index.html` 已引入公共 head 片段。
- 页面级 SEO 元信息继续保留在各页面模板中。
- `docs/project-facts.md` 已同步记录公共 head 片段。
- 将 TODO-0010 更新为 `archived`。

## 验证

- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 已检查 `dist/index.html`，确认公共 head meta 和页面级 SEO meta 正确输出。
- 已检查 `dist/about.html`，确认公共 head meta 和页面级 SEO meta 正确输出。

## 决策

- 公共 head 片段只承载跨页面通用 meta。
- 页面级 title、description、keywords、`og:title` 和 `og:description` 仍保留在各页面模板中。

## 后续事项

- P2 事项已全部归档。
- 下一阶段建议推进 TODO-0015：替换绝对定位 footer 布局。
