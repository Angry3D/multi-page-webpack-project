# 归档：可配置 GitHub Pages public path

日期：2026-05-29

## 目标

移除 `deploy:github` 脚本中的硬编码 public path，让 GitHub Pages 构建可以使用默认路径，也可以通过环境变量覆盖。

## 关联待办

TODO-0021

## 计划

1. 确认当前部署 public path 的硬编码位置。
2. 增加部署构建脚本，支持通过 `PUBLIC_PATH` 覆盖默认值。
3. 更新 `package.json` 脚本，避免在 `deploy:github` 中硬编码路径。
4. 更新 README 和项目事实文档。
5. 运行 lint、format check、部署构建和生产构建验证。

## 完成内容

- 新增 `scripts/build-github-pages.js`。
- 新增 `build:github` 脚本，用于 GitHub Pages 构建。
- 更新 `deploy:github`，改为先运行 `scripts/build-github-pages.js`，再执行 `gh-pages -d dist`。
- GitHub Pages 构建默认 public path 根据 `package.json#name` 生成，当前为 `/multi-page-webpack-project/`。
- 支持通过 `PUBLIC_PATH` 环境变量覆盖默认 public path，并自动补齐首尾斜杠。
- 更新 README 的 GitHub Pages 构建和部署说明。
- 更新 `docs/project-facts.md` 的脚本、重要文件和构建行为说明。

## 验证

- `pnpm run lint` 已通过。
- `pnpm run format:check` 已通过。
- `pnpm run build` 已通过。
- `pnpm run build:github` 已通过，默认 `PUBLIC_PATH=/multi-page-webpack-project/`。
- `PUBLIC_PATH=custom-path pnpm run build:github` 已通过，并规范化为 `PUBLIC_PATH=/custom-path/`。
- 自定义 public path 构建后，`dist/index.html` 和 `dist/about.html` 中资源路径包含 `/custom-path/`。
- 最后重新运行 `pnpm run build`，将 `dist/` 恢复为普通生产构建状态。

## 决策

- 不新增依赖，使用 Node 标准库调用现有 webpack CLI。
- 保留现有默认部署行为，未设置 `PUBLIC_PATH` 时仍使用 `/multi-page-webpack-project/`。
- `deploy:github` 仍负责发布 `dist/` 到 gh-pages 分支。

## 后续事项

- 当前 backlog 中已无未归档事项。后续可新增测试、CI 或模板示例页面等事项。
