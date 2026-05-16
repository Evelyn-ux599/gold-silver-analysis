---
title: "AI 新闻自动发布系统"
date: 2026-05-10
category: AI
tags: [python, rss, wechat-api, 自动化, nlp, launchd]
summary: "全自动 AI 新闻采编与发布流水线：从 arXiv/RSS 多源抓取，到格式化 HTML 生成，再到微信公众号草稿自动创建。"
featured: true
cover: ""
liveUrl: ""
repoUrl: ""
---

## 项目概述

一个每天早晨 8:00 自动启动的 AI 新闻采编发布系统。从多个来源获取 AI 相关新闻，自动格式化为精美 HTML 通讯稿，并通过微信公众号 API 创建草稿。

## 核心架构

```
├── main.py              # 入口，流程编排
├── formatter.py         # HTML 通讯稿生成
├── wechat_api.py        # 微信公众号 API 封装
├── fetchers/
│   ├── base.py          # 抽象基类 + NewsItem 数据类
│   ├── arxiv.py         # arXiv cs.AI 论文抓取
│   ├── rss.py           # RSS 源抓取（机器之心/量子位/36氪/虎嗅）
│   └── newsapi.py       # 英文新闻 API（可选）
├── config.yaml          # 配置：源开关、抓取限制、展示元数据
└── com.ai-news-publisher.plist  # macOS launchd 定时任务
```

## 技术亮点

### 多源联合抓取

- **arXiv API**：每天检索最新 AI 论文
- **RSS 中文源**：机器之心、量子位、36氪、虎嗅，通过 60+ 关键词过滤 AI 相关内容
- **NewsAPI**：可选英文新闻补充

### HTML 通讯稿生成

暗色渐变风格，包含：
- 深色头部区域（渐变背景 + 装饰性光球）
- 按分类分组：学术前沿、行业动态、投资视角
- 文章卡片：标题、摘要、来源标签、阅读链接
- 主题关键词标注

### 微信公众号集成

- 自动获取 Access Token（内存缓存）
- 程序化生成封面图（纯 Python PIL 替代方案：逐像素绘制渐变 + 光球效果，零外部图像依赖）
- 创建图文草稿
- 通过 FreePublish API 提交发布

### macOS 定时调度

通过 launchd 实现每天 8:00 自动执行，无需外部调度服务。

## 技术栈

- **Python 3**: requests, pyyaml, python-dotenv, feedparser, lxml
- **微信公众号 API**: 素材管理、草稿箱、发布接口
- **macOS launchd**: 系统级定时任务

## 成果

建立了一条完全自动化的内容采编到分发管道，每天零人工干预产出 AI 新闻通讯，稳定的定时任务运行在本地 Mac 上。
