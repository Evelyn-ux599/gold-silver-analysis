---
title: "个人技能树可视化"
date: 2025-11-27
category: 编程
tags: [echarts, pyecharts, python, 数据可视化, 知识管理]
summary: "使用 pyecharts 生成交互式个人技能树，将技能按四大分类组织为可折叠树图，融入 Rich Dad Poor Dad 理财理念。"
featured: true
cover: ""
liveUrl: ""
repoUrl: ""
---

## 项目概述

一个自动生成的个人技能树可视化页面，使用 Python (pyecharts) 生成独立的 HTML 文件，以交互式树图形式组织展示个人技能体系。

## 技能分类结构

技能树按照四大维度组织：

### 学习与认知能力
- 财商思维重塑（Robert Kiyosaki 理念启发）
  - 富人思维模式
  - 区分工作与事业
  - 风险辩证法
- 结构化思维
- 快速阅读

### 核心专业能力
- 金融与投资素养
- Python 编程
- 数据分析与可视化

### 个人效能
- 财务自律
- 时间管理

### 通用软技能
- 销售与表达

## 技术实现

```python
from pyecharts.charts import Tree
from pyecharts import options as opts

tree = (
    Tree()
    .add(
        "技能",
        data,           # 层级嵌套的 dict 列表
        orient="TB",    # 从上到下布局
        symbol="roundRect",
        symbol_size=[15, 15],
        initial_tree_depth=-1,     # 默认全部展开
        is_expand_and_collapse=True,  # 支持点击折叠
    )
)
```

## 技术栈

- **pyecharts**: Python 对 ECharts 的封装
- **Apache ECharts**: 交互式可视化图表库
- 生成的 HTML 完全自包含，无需服务器

## 成果

建立了一个可持续更新的个人知识管理可视化系统，清晰地展示了技能之间的层级关系和能力全景。
