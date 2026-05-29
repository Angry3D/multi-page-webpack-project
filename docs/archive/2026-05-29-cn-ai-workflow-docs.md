# 归档：cn 语系 AI 工作流文档整理

日期：2026-05-29

## 目标

使用 `cn` 语系重新整理当前项目的 AI 工作流文档，并保持 `ai-project-workflow` 标准结构：
`AGENTS.md`、`docs/project-facts.md`、`docs/backlog.md`、`docs/progress.md` 和 `docs/archive/`。

## 关联待办

- TODO-0023

## 计划

1. 将 `AGENTS.md` 从英文整理为简中入口协议。
2. 将 `docs/project-facts.md` 从英文整理为简中项目事实文档。
3. 将 `docs/backlog.md` 从英文整理为简中待办资源池，并保留稳定 ID 和状态值。
4. 将 `docs/progress.md` 从英文整理为简中当前进度文档。
5. 将 `docs/archive/README.md` 从英文整理为简中归档规则。

## 完成内容

- `AGENTS.md` 已切换为 `cn` 语系入口指南。
- `docs/project-facts.md` 已切换为 `cn` 语系项目事实文档。
- `docs/backlog.md` 已切换为 `cn` 语系待办资源池，并新增 TODO-0023。
- `docs/progress.md` 已切换为 `cn` 语系当前进度文档。
- `docs/archive/README.md` 已切换为 `cn` 语系归档规则。
- 文件路径保持英文，以保证跨工具和脚本处理稳定。

## 验证

- 已确认核心文档正文切换为简中。
- 已确认语系标记更新为 `cn`。
- 已确认 `docs/backlog.md` 中 TODO-0023 的状态更新为 `archived`。
- 已确认当前阶段已从 `docs/progress.md` 移出，并归档到本文件。

## 决策

- 使用 `cn` 作为简中语系标识。
- 保持 `AGENTS.md`、`docs/project-facts.md`、`docs/backlog.md`、`docs/progress.md` 和 `docs/archive/` 的英文路径。
- 文档正文使用简中。
- backlog 的 `ID`、`Type`、`Status` 等协议字段值继续使用英文，便于后续 AI 和脚本稳定识别。

## 后续事项

- TODO-0001 仍为 `done`，后续可根据实际完成范围单独归档或合并处理。
- 下一阶段可从 `docs/backlog.md` 中选择 P0 待办推进，例如统一包管理器、明确 Node.js 版本或修正生产环境 CSS splitChunks 正则。
