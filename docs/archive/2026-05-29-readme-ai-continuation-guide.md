# 归档：README AI 续作说明

日期：2026-05-29

## 目标

在 README 中说明当前项目已经开始使用 AI 做后续优化，并告诉 clone 项目的人如果希望 AI 续作应该从哪里开始、注意什么。

## 关联待办

TODO-0024

## 计划

1. 在 README 中说明当前项目已经开始使用 AI 做后续优化。
2. 说明 clone 后希望 AI 续作时应优先阅读的文件和注意事项。
3. 更新 backlog、progress 和 archive。
4. 运行格式检查。

## 完成内容

- 在 README 中新增 `AI 协作说明` 章节。
- 说明 `AGENTS.md` 和 `docs/` 是后续 AI 接手的工作流入口。
- 补充 AI 续作时的阅读顺序：`AGENTS.md`、`docs/project-facts.md`、`docs/progress.md`、`docs/backlog.md`，以及必要时阅读 `docs/archive/`。
- 补充续作注意事项，包括 pnpm、Node.js 20、`node_modules`、自动页面注册、`dist/` 构建产物和归档规则。

## 验证

- `pnpm run format:check` 已通过。

## 决策

- README 中只放 clone 后最需要知道的续作入口和注意事项，不重复完整工作流细节。
- 详细工作流仍以 `AGENTS.md` 和 `docs/` 为准。

## 后续事项

- 暂无明确后续事项。
