# 归档：基础全局 CSS 默认值

日期：2026-05-29

## 目标

补充基础全局 CSS 默认值，让页面基础样式更稳定。

## 关联待办

- TODO-0017

## 计划

1. 为全局样式补充 `box-sizing` 默认值。
2. 完善页面高度和字体 fallback。
3. 补充基础文本渲染和图片默认表现。
4. 运行生产构建验证。
5. 更新 backlog 状态，并归档本阶段。

## 完成内容

- `src/assets/global.less` 已增加全局 `box-sizing: border-box`。
- `html` 已增加 `height: 100%` 和 `text-size-adjust: 100%`。
- `body` 字体栈已增加系统字体 fallback。
- `body` 已增加字体平滑和文本渲染默认值。
- `img` 已增加 `max-width: 100%` 和 `vertical-align: middle`。
- 将 TODO-0017 更新为 `archived`。

## 验证

- 已执行 `pnpm run build`，Webpack 生产构建成功。
- 已确认构建产物 CSS 中包含新增的 box sizing、字体 fallback、文本渲染和图片默认规则。

## 决策

- `reset.css` 已包含基础 reset，本阶段只补项目级默认值。
- 不改页面视觉设计，只增强默认样式稳定性。

## 后续事项

- 下一阶段建议推进 TODO-0018：改善开发环境 CSS source map。
- TODO-0016 仍可作为单独重构项评估是否移除 jQuery。
