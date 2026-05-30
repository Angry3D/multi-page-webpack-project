# AI 入口指南

最后更新：2026-05-30
语系：cn

本文件是 AI 进入当前项目时必须首先阅读的入口协议。
它只记录阅读顺序、文档职责和工作流规则；项目事实、命令和历史记录分别放在 `docs/` 与 README 中。

## 启动顺序

1. 阅读 `AGENTS.md`。
2. 阅读 `docs/project-facts.md`，理解稳定项目事实。
3. 阅读 `docs/progress.md`，确认当前阶段。
4. 阅读 `docs/backlog.md`，查看尚未完成或仍需决策的事项。
5. 只有需要历史背景时，阅读 `docs/archive/README.md` 和对应归档文件。
6. 修改代码前，确认当前计划已经写入 `docs/progress.md`。

## 文档职责

- `AGENTS.md`：AI 入口协议、阅读顺序和工作流规则。
- `docs/project-facts.md`：稳定项目事实、证据、推断和待确认事项。
- `docs/backlog.md`：当前资源池，只保留未完成或仍需决策的事项。
- `docs/progress.md`：当前执行区，只记录当前阶段。
- `docs/archive/`：已完成阶段，每个阶段一个独立归档文件。
- `docs/archive/README.md`：归档模板和归档索引。

## 工作流

长期流程：

```text
讨论 -> backlog -> progress -> 执行 -> archive -> 下一轮
```

阶段开始前：

1. 从 `docs/backlog.md` 选择或新增事项。
2. 将当前目标、计划和任务拆解写入 `docs/progress.md`。

阶段完成后：

1. 在 `docs/archive/` 创建归档文件。
2. 在 `docs/archive/README.md` 的归档索引中登记。
3. 从 `docs/backlog.md` 移除已归档事项。
4. 重置或更新 `docs/progress.md`，让它只反映下一阶段或当前空状态。

新增待办时：

1. 使用 `docs/backlog.md` 中记录的下一个待办 ID。
2. 新增后递增该 ID。
3. 标注来源和证据；不要把推断当作已确认事实。

## 操作规则

- 编辑前先检查当前工作区状态。
- 优先做小而聚焦的改动，并遵循项目现有风格。
- 未经明确要求，不要移除或重写用户已有改动。
- 不要把长期历史堆进 `docs/progress.md` 或 `docs/backlog.md`。
- 不要把缺少 `node_modules` 误判为源码或构建配置错误。
- 当前项目使用 pnpm；修改依赖或锁文件前，先确认确实需要调整包管理器相关约定。
