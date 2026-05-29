# 归档：格式化和 lint 基线

日期：2026-05-29

## 目标

为项目增加基础格式化和 JS lint 能力，便于后续维护时保持一致代码风格并提前发现常见 JS 问题。

## 关联待办

TODO-0019

## 计划

1. 检查当前是否已有 ESLint 或 Prettier 配置与依赖。
2. 添加最小可用的 ESLint 和 Prettier 配置。
3. 在 `package.json` 中增加 lint、format 和 format check 脚本。
4. 运行验证并修正发现的问题。
5. 更新 backlog 和 progress。

## 完成内容

- 增加开发依赖：`eslint`、`@eslint/js`、`globals`、`prettier`。
- 新增 `eslint.config.js`，使用 ESLint flat config，并区分浏览器源码与 Node/CommonJS 配置文件环境。
- 新增 `.prettierrc.json`，延续当前项目风格：4 空格、单引号、无分号、100 字符宽度。
- 新增 `.prettierignore`，忽略 `dist/`、`node_modules/` 和 `pnpm-lock.yaml`。
- 在 `package.json` 中新增 `lint`、`format` 和 `format:check` 脚本。
- 运行 `pnpm run format` 建立当前格式化基线。
- 更新 README 常用命令和 `docs/project-facts.md`。

## 验证

- `pnpm run lint` 已通过。
- `pnpm run format:check` 已通过。
- `pnpm exec webpack --config webpack.dev.js` 已通过。
- `pnpm run build` 已通过。

## 决策

- 使用 ESLint flat config，不新增旧式 `.eslintrc`。
- Prettier 忽略 `pnpm-lock.yaml`，避免格式化命令改动锁文件布局。
- 本阶段不引入测试框架，自动化测试仍保持后续独立事项。

## 后续事项

- P4 中可继续推进 TODO-0020：自动化页面注册。
- P4 中可继续推进 TODO-0021：让部署 public path 更可配置。
