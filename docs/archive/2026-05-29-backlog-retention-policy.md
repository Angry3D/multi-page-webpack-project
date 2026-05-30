# 归档：backlog 留存规则调整

日期：2026-05-29

## 目标

解决 `docs/backlog.md` 因长期保留 archived 项而无限膨胀的问题，让 backlog 只承担当前资源池职责，历史统一沉淀到 `docs/archive/`。

## 关联待办

TODO-0025

## 计划

1. 将 `docs/backlog.md` 调整为只保留未完成或仍需决策事项。
2. 从 `docs/backlog.md` 移除已归档历史项。
3. 在 `docs/archive/README.md` 增加归档索引。
4. 同步更新 `AGENTS.md`、README 和 `docs/project-facts.md` 中的工作流规则。
5. 运行格式检查。

## 完成内容

- 重写 `docs/backlog.md`，增加编号规则和维护规则。
- 将下一个待办 ID 记录为 `TODO-0026`。
- 从 `docs/backlog.md` 移除已完成归档事项。
- 在 `docs/archive/README.md` 增加归档索引，登记既有归档记录。
- 更新 `AGENTS.md`，明确阶段完成后应更新归档索引，并从 backlog 移除已归档事项。
- 更新 README 的 AI 续作说明，提醒不要把历史堆进 `docs/backlog.md`。
- 更新 `docs/project-facts.md`，记录 backlog 和 archive 索引的稳定职责。

## 验证

- `pnpm run format:check` 已通过。

## 决策

- `docs/backlog.md` 只作为当前资源池，不再长期保留 `archived` 行。
- 已完成事项以独立归档文件为事实来源，并由 `docs/archive/README.md` 做历史索引。
- `docs/backlog.md` 顶部保留“下一个待办 ID”，避免移除历史行后无法判断编号。

## 后续事项

- 暂无明确后续事项。
