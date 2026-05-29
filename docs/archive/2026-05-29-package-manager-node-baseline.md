# 归档：包管理器与 Node 版本基线

日期：2026-05-29

## 目标

统一项目包管理器，并明确安装命令和 Node.js 版本。

## 关联待办

- TODO-0002
- TODO-0003

## 计划

1. 确认项目官方包管理器为 pnpm。
2. 明确 Node.js 推荐版本为 Node 20。
3. 更新 `package.json`、README 和 AI 工作流文档中的安装/运行约定。
4. 移除 npm 锁文件，保留 `pnpm-lock.yaml`。
5. 更新 backlog 状态，并归档本阶段。

## 完成内容

- 在 `package.json` 中新增 `packageManager: pnpm@8.15.9`。
- 在 `package.json` 中新增 Node.js 版本约束 `>=20 <21`。
- 新增 `.nvmrc`，推荐使用 Node 20。
- 将 README 和 `AGENTS.md` 中的常用命令统一为 pnpm。
- 更新 `docs/project-facts.md`，记录 pnpm 和 Node 20 为已确认事实。
- 删除历史残留的 `package-lock.json`，保留 `pnpm-lock.yaml`。
- 将 TODO-0002 和 TODO-0003 更新为 `archived`。

## 验证

- 已用 Node.js 解析 `package.json`，确认 JSON 格式有效。
- 已确认 README、`AGENTS.md` 和项目事实文档中的常用命令使用 pnpm。
- 已执行 `pnpm install --frozen-lockfile --lockfile-only --offline`，确认 `pnpm-lock.yaml` 可被读取且未发生变更。
- 已确认未生成 `node_modules`。

## 决策

- 使用 pnpm 作为官方包管理器。
- 使用 pnpm 8.15.9 作为 `packageManager` 固定版本，以匹配现有 `pnpm-lock.yaml` 的锁文件格式，避免非必要锁文件刷新。
- 使用 Node 20 作为推荐运行版本。

## 后续事项

- 下一阶段可继续推进 TODO-0004：修正生产环境 CSS splitChunks 正则。
- 需要真正构建验证时，先执行 `pnpm install` 安装依赖。
