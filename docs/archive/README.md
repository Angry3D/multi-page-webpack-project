# 归档

最后更新：2026-05-29
语系：cn

本目录存放已完成阶段的记录。每个完成阶段使用一个独立 Markdown 文件，不要把所有历史持续追加到单个文件中。

## 命名规范

使用以下格式：

```text
YYYY-MM-DD-short-stage-name.md
```

示例：

```text
2026-05-29-ai-docs-bootstrap.md
2026-05-30-build-config-optimization.md
2026-06-02-seo-metadata-pass.md
```

## 归档模板

```md
# 归档：阶段名称

日期：YYYY-MM-DD

## 目标

本阶段希望完成什么。

## 关联待办

本阶段涉及的 backlog ID。

## 计划

本阶段实际执行的计划。

## 完成内容

本阶段完成了什么。

## 验证

如何检查本阶段结果。

## 决策

本阶段形成的重要决策及原因。

## 后续事项

剩余工作、风险或下一批候选事项。
```

## 归档索引

| 日期       | 归档文件                                        | 关联待办             | 阶段                      |
| ---------- | ----------------------------------------------- | -------------------- | ------------------------- |
| 2026-05-29 | `2026-05-29-ai-workflow-standard-migration.md`  | TODO-0001            | AI 工作流标准迁移         |
| 2026-05-29 | `2026-05-29-package-manager-node-baseline.md`   | TODO-0002, TODO-0003 | 包管理器和 Node 基线      |
| 2026-05-29 | `2026-05-29-prod-css-splitchunks-regex.md`      | TODO-0004            | 生产 CSS splitChunks 修正 |
| 2026-05-29 | `2026-05-29-dev-prod-css-loader-split.md`       | TODO-0005            | 开发/生产 CSS loader 区分 |
| 2026-05-29 | `2026-05-29-babel-exclude-node-modules.md`      | TODO-0006            | Babel 排除 node_modules   |
| 2026-05-29 | `2026-05-29-contenthash-output-filenames.md`    | TODO-0007            | 输出文件 contenthash      |
| 2026-05-29 | `2026-05-29-prod-css-minimizer.md`              | TODO-0008            | 生产 CSS 压缩             |
| 2026-05-29 | `2026-05-29-vendor-runtime-cache-splitting.md`  | TODO-0009            | vendor/runtime 缓存拆分   |
| 2026-05-29 | `2026-05-29-shared-html-head.md`                | TODO-0010            | 共享 HTML head            |
| 2026-05-29 | `2026-05-29-page-seo-metadata.md`               | TODO-0011            | 页面 SEO 元信息           |
| 2026-05-29 | `2026-05-29-html-lang-zh-cn.md`                 | TODO-0012            | HTML 语言改为 zh-CN       |
| 2026-05-29 | `2026-05-29-configurable-nav-active.md`         | TODO-0013            | 配置化导航 active 状态    |
| 2026-05-29 | `2026-05-29-nav-aria-current.md`                | TODO-0014            | 导航 aria-current         |
| 2026-05-29 | `2026-05-29-footer-flow-layout.md`              | TODO-0015            | footer 文档流布局         |
| 2026-05-29 | `2026-05-29-remove-jquery.md`                   | TODO-0016            | 移除 jQuery               |
| 2026-05-29 | `2026-05-29-global-css-defaults.md`             | TODO-0017            | 全局 CSS 默认值           |
| 2026-05-29 | `2026-05-29-dev-css-source-map.md`              | TODO-0018            | 开发 CSS source map       |
| 2026-05-29 | `2026-05-29-lint-format-baseline.md`            | TODO-0019            | 格式化和 lint 基线        |
| 2026-05-29 | `2026-05-29-auto-page-registration.md`          | TODO-0020            | 自动化页面注册            |
| 2026-05-29 | `2026-05-29-configurable-github-public-path.md` | TODO-0021            | GitHub Pages public path  |
| 2026-05-29 | `2026-05-29-readme-add-page-guide.md`           | TODO-0022            | README 新增页面指南       |
| 2026-05-29 | `2026-05-29-cn-ai-workflow-docs.md`             | TODO-0023            | 文档语系切换为 cn         |
| 2026-05-29 | `2026-05-29-readme-ai-continuation-guide.md`    | TODO-0024            | README AI 续作说明        |
| 2026-05-29 | `2026-05-29-backlog-retention-policy.md`        | TODO-0025            | backlog 留存规则调整      |

## 工作流

阶段完成后：

1. 在本目录创建新的归档文件。
2. 写入目标、关联待办、计划、完成内容、验证、决策和后续事项。
3. 在本文件的归档索引中登记新归档。
4. 从 `docs/backlog.md` 移除已归档事项。
5. 更新 `docs/progress.md`，让它只反映下一阶段或当前空状态。
