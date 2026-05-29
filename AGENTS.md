# AI 入口指南

最后更新：2026-05-29
语系：cn

本文件是 AI 进入当前项目时必须首先阅读的入口文件。
它是导航与工作流协议，不是完整的项目百科。

## 启动检查清单

1. 先阅读本文件。
2. 阅读 `docs/project-facts.md`，理解稳定的项目事实。
3. 阅读 `docs/progress.md`，理解当前正在推进的阶段。
4. 阅读 `docs/backlog.md`，了解可选任务、候选需求和已知待办。
5. 只有需要历史背景时，才阅读 `docs/archive/`。
6. 修改代码前，确认当前计划已经体现在 `docs/progress.md` 中。
7. 阶段完成后，将结果归档到 `docs/archive/`，并更新 `docs/backlog.md`。

## 项目快照

这是一个面向 SEO 场景的 Webpack 5 多页面前端模板。
当前页面包括 `index.html` 和 `about.html`。

页面入口由 `pages.js` 自动扫描 `src/pages/` 生成。
公共 header 和 footer 片段位于 `src/pages/common/`。

## 常用命令

推荐使用 Node.js 20。仓库提供 `.nvmrc`，使用 nvm 时可先执行：

```bash
nvm use
```

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

注意：当前项目使用 pnpm 作为官方包管理器，并通过 `pnpm-lock.yaml` 固定依赖版本。
不要随意改变包管理器策略。涉及依赖安装、锁文件清理或依赖变更前，先确认是否确实需要调整 pnpm 约定。

## 文档地图

- `docs/project-facts.md`
  记录项目目标、技术栈、目录结构、构建行为和已知约束等稳定事实。

- `docs/backlog.md`
  上游任务资源池。后续计划应从这里选择或新增事项，再拉入 `docs/progress.md`。

- `docs/progress.md`
  当前执行区。只记录当前阶段的目标、关联待办、计划、任务拆解、状态、决策、阻塞、验证和下一步。

- `docs/archive/`
  已完成阶段的归档区。每个完成阶段应该对应一个独立 Markdown 文件。

## 工作流

长期流程如下：

```text
讨论 -> backlog -> progress -> 执行 -> archive -> 下一轮
```

使用 `docs/backlog.md` 作为上游资源池。
使用 `docs/progress.md` 记录当前阶段，不要让它膨胀成长期历史文件。
使用 `docs/archive/` 沉淀已完成阶段。

阶段完成后：

1. 在 `docs/archive/` 下创建新的归档文件。
2. 写入目标、关联待办、计划、完成内容、验证、决策和后续事项。
3. 重置或更新 `docs/progress.md`，让它只反映下一阶段或当前空状态。
4. 如果待办状态发生变化，更新 `docs/backlog.md`。

## 文档规则

- `AGENTS.md` 只放 AI 启动、阅读顺序和工作流规则。
- 稳定项目事实放入 `docs/project-facts.md`。
- 候选事项和未来工作放入 `docs/backlog.md`。
- 当前执行细节放入 `docs/progress.md`。
- 已完成阶段放入 `docs/archive/`。
- 不要在多个文档中重复堆放同一段长说明。
- 不要把推断当作已确认事实。
- 不要把缺少 `node_modules` 误判为源码或构建配置错误。

## 代码改动规则

- 优先做小而聚焦的改动，并遵循项目现有风格。
- 编辑前先检查当前工作区状态。
- 未经明确要求，不要移除或重写用户已有改动。
- 除非当前计划要求，否则不要引入大范围重构。
- 修改依赖或锁文件前，先确认包管理器策略。
