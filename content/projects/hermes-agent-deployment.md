---
title: "Hermes Agent 本地部署与公众号 Skill 系统"
date: 2026-05-17
category: 产品
tags: [hermes, agent部署, 公众号写作, skill系统, 自动化, macOS]
summary: "将 Hermes Agent 部署到本地 macOS，实现 QQ 指令 → 本地文件读写 → 公众号草稿自动提交的完整闭环。"
featured: true
cover: ""
liveUrl: ""
repoUrl: ""
---

## 项目概述

将 Hermes Agent（AI Agent 框架）部署到本地 macOS CLI，打通 QQ 指令入口 → 本地文件操作 → 微信公众号发布的完整链路。

核心价值：Agent 从「只能聊天的云端 AI」升级为「能操作本地电脑的打工 Agent」。

## 技术架构

```
QQ (用户指令)
  ↓
Hermes Agent (本地 CLI)
  ├── 读取 iCloud 项目文件
  ├── 调用 wechat-vera-writer Skill
  │   ├── Step 1: 确认选题
  │   ├── Step 2: 研究数据 (web_search)
  │   ├── Step 3: 撰写文章 (Vera 风格 + 论文式引用)
  │   ├── Step 4: 生成封面图 (PIL)
  │   └── Step 5: 提交公众号草稿箱 (WeChat API)
  └── 更新复利站 content
```

## 核心能力

### 1. 本地文件读写
- macOS 终端权限，直接操作 iCloud Drive 项目文件
- 无需手动复制粘贴，Agent 直接在项目目录中创建/修改文件

### 2. 微信公众号草稿自动提交
- 纯 Python stdlib 实现（urllib + struct + zlib），零第三方依赖
- 从封面生成到草稿创建全自动
- 支持 SSL 验证修复（macOS Python 证书兼容）

### 3. wechat-vera-writer Skill
在 Hermes Skill 系统中注册的标准化写作工作流：

| 步骤 | 操作 | 工具 |
|------|------|------|
| 选题 | 用户指定或 Agent 推荐 | clarify |
| 研究 | 搜索最新数据/案例 | web_search |
| 写作 | Vera 风格 6段式 + [N] 引用 | agent 生成 |
| 封面 | 自动生成并上传 | wechat_api.py |
| 发布 | 保存草稿箱 | WeChat API |

### 4. 写作风格升级
借鉴 Claude 的论文式引用：
- 正文中通过上标 `[1][2]` 标注数据来源
- 结尾专门的「数据来源」区块，每一条含完整出处
- 数据可追溯，增加可信度

## 技术栈

- **Hermes Agent**（macOS CLI）
- **Python 3**（stdlib only: urllib / struct / zlib）
- **微信公众号 API**（素材管理 + 草稿箱）
- **iCloud Drive**（项目文件同步）
- **QQ**（移动端指令入口）

## 成果

- Agent 从云端搬到本地，打通「指令 → 读文件 → 写文件 → 发公众号」全链路
- 完成第一篇全自动深度文章：「人形机器人真正值钱的不是关节，是触觉」
- 按论文式引用风格撰写，8 条参考文献
- 复利站实时更新（7 个 Agent/Skill）

## 下一步

- 修复 venv Python 路径（shebang 指向旧路径）
- 修复 macOS launchd plist 定时任务路径
- 封面图风格跟进已有公众号文章设计
- 每天一篇公众号写作 → 草稿箱全自动化
