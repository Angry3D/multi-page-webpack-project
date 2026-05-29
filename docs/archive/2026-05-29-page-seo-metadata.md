# 归档：页面 SEO 元信息完善

日期：2026-05-29

## 目标

完善现有页面的 SEO 元信息，让多页面模板更贴近 SEO 场景。

## 关联待办

- TODO-0011

## 计划

1. 为 `index` 页面补充更明确的 title、description、keywords、robots 和 Open Graph 元信息。
2. 为 `about` 页面补充更明确的 title、description、keywords、robots 和 Open Graph 元信息。
3. 保持当前 HTML 语言属性不变，语言修正留给 TODO-0012。
4. 运行生产构建验证 HTML 输出。
5. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `src/pages/index/index.html` 已补充页面级 SEO 元信息。
- `src/pages/about/index.html` 已补充页面级 SEO 元信息。
- 两个页面 title 已从通用英文标题改为更明确的中文 SEO 标题。
- 将 TODO-0011 更新为 `archived`。

## 验证

- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 已检查 `dist/index.html`，确认首页 SEO 元信息正确输出。
- 已检查 `dist/about.html`，确认关于页 SEO 元信息正确输出。

## 决策

- 本阶段不抽出共享 HTML head 配置，避免与 TODO-0010 混在一起。
- 本阶段不修改 `html lang`，语言修正留给 TODO-0012。
- 暂不添加 canonical URL，因为站点正式域名和路径策略尚未确认。

## 后续事项

- 下一阶段建议推进 TODO-0012：按需将 HTML 语言改为 `zh-CN`。
- 后续可通过 TODO-0010 抽出共享 HTML head 配置，减少页面 head 重复。
