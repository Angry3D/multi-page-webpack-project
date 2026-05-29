# 待办资源池

最后更新：2026-05-29
语系：cn

本文档是 `docs/progress.md` 的上游资源池，用于存放候选事项、已确认待办、后续需求、问题修复、调研和优化项。

## 状态值

- `candidate`：已发现或已提出，但尚未确认执行
- `todo`：已确认的后续事项
- `planned`：已进入当前或下一阶段计划
- `doing`：正在执行
- `blocked`：因缺少输入或外部条件暂时阻塞
- `done`：已完成，但尚未归档
- `archived`：已完成并归档
- `dropped`：已明确不再推进

## 类型值

- `bug`
- `feature`
- `docs`
- `refactor`
- `chore`
- `research`
- `optimization`

## P0

| ID        | 优先级 | 类型  | 状态     | 事项                                              | 来源     | 证据                                                              | 备注                                                                                                             |
| --------- | ------ | ----- | -------- | ------------------------------------------------- | -------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| TODO-0001 | P0     | docs  | archived | 将 AI 工作流文档迁移到 `ai-project-workflow` 标准 | 用户请求 | 原文档使用 `optimization-backlog.md`；已确认标准使用 `backlog.md` | 已归档到 `docs/archive/2026-05-29-ai-workflow-standard-migration.md`。                                           |
| TODO-0002 | P0     | chore | archived | 统一包管理器                                      | 项目扫描 | 原先同时存在 `package-lock.json` 和 `pnpm-lock.yaml`              | 已确认使用 pnpm，并归档到 `docs/archive/2026-05-29-package-manager-node-baseline.md`。                           |
| TODO-0003 | P0     | chore | archived | 明确安装命令和 Node.js 版本                       | 项目扫描 | 原先本地依赖缺失；未发现 `.nvmrc` 或 `engines`                    | 已增加 `.nvmrc` 和 `package.json#engines`，并归档到 `docs/archive/2026-05-29-package-manager-node-baseline.md`。 |
| TODO-0004 | P0     | bug   | archived | 修正生产环境 CSS splitChunks 正则                 | 项目扫描 | `webpack.prod.js` 使用 `/[\.css$                                  | \.less]/`                                                                                                        | 已修正并归档到 `docs/archive/2026-05-29-prod-css-splitchunks-regex.md`。 |
| TODO-0023 | P0     | docs  | archived | 使用 `cn` 语系重新整理当前项目文档                | 用户请求 | 核心文档原为英文语系标记                                          | 已切换为简中正文和 `cn` 语系，并归档到 `docs/archive/2026-05-29-cn-ai-workflow-docs.md`。                        |

## P1

| ID        | 优先级 | 类型         | 状态     | 事项                                  | 来源     | 证据                                               | 备注                                                                                                 |
| --------- | ------ | ------------ | -------- | ------------------------------------- | -------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| TODO-0005 | P1     | optimization | archived | 区分开发/生产环境 CSS loader 行为     | 项目扫描 | 共享配置原先始终使用 `MiniCssExtractPlugin.loader` | 已区分开发/生产 CSS loader，并归档到 `docs/archive/2026-05-29-dev-prod-css-loader-split.md`。        |
| TODO-0006 | P1     | optimization | archived | Babel 处理排除 `node_modules`         | 项目扫描 | JS rule 原先没有 `exclude`                         | 已添加 `exclude: /node_modules/`，并归档到 `docs/archive/2026-05-29-babel-exclude-node-modules.md`。 |
| TODO-0007 | P1     | optimization | archived | JS/CSS 输出文件统一使用 `contenthash` | 项目扫描 | JS 原先使用 `chunkhash`；CSS 原先使用 `fullhash`   | 已统一为 `contenthash`，并归档到 `docs/archive/2026-05-29-contenthash-output-filenames.md`。         |
| TODO-0008 | P1     | optimization | archived | 增加生产环境 CSS 压缩                 | 项目扫描 | 原先未配置专门的 CSS minimizer                     | 已增加 CSS 压缩，并归档到 `docs/archive/2026-05-29-prod-css-minimizer.md`。                          |
| TODO-0009 | P1     | optimization | archived | 改善 vendor/runtime 缓存拆分          | 项目扫描 | 原先 splitChunks 只有 styles 相关 cache group      | 已增加 vendor/runtime 拆分，并归档到 `docs/archive/2026-05-29-vendor-runtime-cache-splitting.md`。   |

## P2

| ID        | 优先级 | 类型         | 状态     | 事项                         | 来源     | 证据                                                   | 备注                                                                                    |
| --------- | ------ | ------------ | -------- | ---------------------------- | -------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| TODO-0010 | P2     | refactor     | archived | 抽出共享 HTML head 配置      | 项目扫描 | 页面模板 head 基本重复                                 | 已抽出公共 head 片段，并归档到 `docs/archive/2026-05-29-shared-html-head.md`。          |
| TODO-0011 | P2     | optimization | archived | 完善页面 SEO 元信息          | 项目扫描 | 页面原先只有基础 meta 和 title                         | 已补充页面级 SEO 元信息，并归档到 `docs/archive/2026-05-29-page-seo-metadata.md`。      |
| TODO-0012 | P2     | bug          | archived | 按需将 HTML 语言改为 `zh-CN` | 项目扫描 | 模板原先使用 `lang="en"`，但可见文案包含中文           | 已改为 `zh-CN`，并归档到 `docs/archive/2026-05-29-html-lang-zh-cn.md`。                 |
| TODO-0013 | P2     | refactor     | archived | 配置化导航 active 状态       | 项目扫描 | header 脚本原先硬编码判断 `index.html` 和 `about.html` | 已改为 `navItems` 配置，并归档到 `docs/archive/2026-05-29-configurable-nav-active.md`。 |
| TODO-0014 | P2     | optimization | archived | 增加导航可访问性状态         | 项目扫描 | active 导航原先只使用 CSS class                        | 已增加 `aria-current="page"`，并归档到 `docs/archive/2026-05-29-nav-aria-current.md`。  |

## P3

| ID        | 优先级 | 类型         | 状态     | 事项                        | 来源     | 证据                                            | 备注                                                                                |
| --------- | ------ | ------------ | -------- | --------------------------- | -------- | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| TODO-0015 | P3     | bug          | archived | 替换绝对定位 footer 布局    | 项目扫描 | footer 原先使用 `position: absolute; bottom: 0` | 已改为文档流布局，并归档到 `docs/archive/2026-05-29-footer-flow-layout.md`。        |
| TODO-0016 | P3     | refactor     | archived | 评估移除 jQuery             | 项目扫描 | jQuery 目前只用于 DOM ready 和 `addClass`       | 已使用原生 DOM API 替代，并归档到 `docs/archive/2026-05-29-remove-jquery.md`。      |
| TODO-0017 | P3     | optimization | archived | 补充基础全局 CSS 默认值     | 项目扫描 | `global.less` 原先很薄                          | 已补充基础默认值，并归档到 `docs/archive/2026-05-29-global-css-defaults.md`。       |
| TODO-0018 | P3     | optimization | archived | 改善开发环境 CSS source map | 项目扫描 | `postcss.config.js` 原先全局关闭 source map     | 已按环境配置 source map，并归档到 `docs/archive/2026-05-29-dev-css-source-map.md`。 |

## P4

| ID        | 优先级 | 类型     | 状态     | 事项                        | 来源     | 证据                                                    | 备注                                                                                                        |
| --------- | ------ | -------- | -------- | --------------------------- | -------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| TODO-0019 | P4     | chore    | archived | 增加格式化和 lint           | 项目扫描 | 当前没有 ESLint 或 Prettier 配置                        | 已增加 ESLint/Prettier 配置，并归档到 `docs/archive/2026-05-29-lint-format-baseline.md`。                   |
| TODO-0020 | P4     | refactor | archived | 自动化页面注册              | 项目扫描 | `pages.js` 需要手动维护                                 | 已改为自动扫描页面目录，并归档到 `docs/archive/2026-05-29-auto-page-registration.md`。                      |
| TODO-0021 | P4     | chore    | archived | 让部署 public path 更可配置 | 项目扫描 | GitHub deploy 脚本硬编码 `/multi-page-webpack-project/` | 已增加可配置 GitHub Pages 构建脚本，并归档到 `docs/archive/2026-05-29-configurable-github-public-path.md`。 |
| TODO-0022 | P4     | docs     | archived | 扩展 README 的新增页面指南  | 项目扫描 | README 未说明如何新增页面或使用公共片段                 | 已补充新增页面指南，并归档到 `docs/archive/2026-05-29-readme-add-page-guide.md`。                           |

## 复查说明

待办事项应尽量标注来源和证据。不要在缺少用户确认或项目证据时，把推断事项提升为已确认工作。
