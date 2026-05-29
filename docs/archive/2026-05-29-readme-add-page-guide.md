# 归档：README 新增页面指南

日期：2026-05-29

## 目标

扩展 README，让模板使用者能按当前项目结构新增多页面入口并复用公共片段。

## 关联待办

TODO-0022

## 计划

1. 梳理当前多页面目录和页面注册方式。
2. 在 README 中补充目录结构、公共片段说明和新增页面步骤。
3. 复查 README 与当前项目事实是否一致。
4. 更新 backlog 和 progress。

## 完成内容

- 在 README 中新增目录结构说明。
- 在 README 中新增以 `contact.html` 为例的新增页面步骤。
- 补充页面入口脚本、HTML 模板、`pages.js` 登记和导航高亮示例。
- 说明新增页面后应运行 `pnpm run dev` 和 `pnpm run build` 验证。

## 验证

- 已人工复查 README 示例路径与当前 `src/pages/`、`pages.js`、公共片段路径一致。
- 本阶段仅修改文档，未运行构建命令。

## 决策

- README 面向模板使用者，保留上手所需步骤，不重复 `docs/project-facts.md` 中的完整项目百科。
- 新增页面示例使用 `contact.html`，避免与现有 `index.html` 和 `about.html` 混淆。

## 后续事项

- P4 中可继续推进 TODO-0019：增加格式化和 lint。
- P4 中可继续推进 TODO-0020：自动化页面注册。
