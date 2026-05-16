---
title: "期权交易分析平台"
date: 2026-05-15
category: AI
tags: [nextjs, options-trading, black-scholes, yahoo-finance, credit-spreads, paper-trading]
summary: "高胜率期权信用价差扫描与模拟交易平台，接入雅虎金融真实美股数据，$3,000 启动资金策略验证。"
featured: true
cover: ""
liveUrl: "http://localhost:3001"
repoUrl: ""
---

## 项目概述

一个面向小资金的期权信用价差分析平台。聚焦 QQQ（纳指100 ETF）和 SLV（白银 ETF），通过 0-3 DTE 信用价差策略实现高胜率交易。接入 Yahoo Finance 真实数据，支持纸上模拟交易验证策略。

## 核心架构

```
├── src/app/
│   ├── dashboard/     # 实时报价 + IV Rank + 账户摘要
│   ├── options/       # 完整期权链查看器（含 Greeks）
│   ├── scanner/       # ★ 信用价差扫描器（核心）
│   ├── simulator/     # P&L 模拟器 + Greeks 衰减
│   ├── journal/       # 模拟交易日志 + 胜率统计
│   └── calculator/    # 仓位计算器（Kelly 公式）
├── src/lib/
│   ├── black-scholes.ts   # Greeks 计算引擎
│   ├── spread-calculator.ts # 价差扫描算法
│   ├── yahoo-finance.ts   # Yahoo Finance v3 API 封装
│   ├── trade-storage.ts   # IndexedDB 交易存储
│   └── cache.ts           # LRU 缓存层
└── src/components/    # React 组件（深色交易终端风格）
```

## 技术亮点

### Black-Scholes 期权定价引擎

纯 TypeScript 实现累积正态分布函数，客户端实时计算 Delta、Gamma、Theta、Vega、Rho 五个希腊值。无需后端计算，毫秒级响应。

### 信用价差扫描算法

自动扫描期权链中所有 OTM 合约，按 Delta、DTE、价差宽度三维过滤，综合 PoP × 盈亏比打分排序，一键生成模拟交易。

### 真实数据 + 本地模拟

- Yahoo Finance 实时美股期权链数据（15分钟延迟）
- IndexedDB 本地存储交易记录，无需数据库
- 自动统计胜率、盈亏比、利润因子、净值曲线

### 风险管理系统

内置 Kelly 公式仓位计算器，默认 $3,000 本金 / 单笔最高 5% 风险 / 最多 2 个并发仓位。

## 策略逻辑

| 策略 | 标的 | Delta | DTE | 理论胜率 |
|------|------|-------|-----|---------|
| Bull Put Spread | QQQ/SLV | 0.08-0.18 | 0-3 | 82-92% |
| Bear Call Spread | QQQ/SLV | 0.08-0.18 | 0-3 | 82-92% |

## 技术栈

- **Next.js 16** + TypeScript + TailwindCSS v4
- **yahoo-finance2 v3**: 美股数据源
- **Recharts**: 盈亏曲线可视化
- **IndexedDB**: 本地交易日志存储
- **React Query**: 数据缓存与轮询

## 成果

一个完整的期权分析决策工具，从数据获取、希腊值计算、策略扫描到模拟执行和绩效统计形成闭环，用于验证高胜率短期信用价差策略的可行性。
