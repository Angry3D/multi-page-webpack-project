# 归档：HTML 语言标记改为 zh-CN

日期：2026-05-29

## 目标

将现有页面模板的 HTML 语言标记从 `en` 改为 `zh-CN`，匹配当前中文页面内容和 SEO 元信息。

## 关联待办

- TODO-0012

## 计划

1. 将 `index` 页面模板的 `html lang` 从 `en` 改为 `zh-CN`。
2. 将 `about` 页面模板的 `html lang` 从 `en` 改为 `zh-CN`。
3. 更新项目事实文档，移除原先的语言不匹配推断。
4. 运行生产构建验证输出 HTML。
5. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `src/pages/index/index.html` 已使用 `lang="zh-CN"`。
- `src/pages/about/index.html` 已使用 `lang="zh-CN"`。
- `docs/project-facts.md` 已将 HTML 语言标记更新为已确认事实。
- 将 TODO-0012 更新为 `archived`。

## 验证

- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 已确认 `dist/index.html` 输出 `html lang="zh-CN"`。
- 已确认 `dist/about.html` 输出 `html lang="zh-CN"`。
- 已确认源码页面模板中没有残留 `lang="en"`。

## 决策

- 当前页面可见文案和 SEO 元信息主要为中文，因此使用 `zh-CN`。

## 后续事项

- 下一阶段建议推进 TODO-0014：增加导航可访问性状态。
- TODO-0013 的导航 active 配置化也可随后推进，适合与导航语义改进相邻处理。
