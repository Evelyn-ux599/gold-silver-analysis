---
title: "3D 粒子系统手势控制"
date: 2025-11-25
category: 编程
tags: [threejs, mediapipe, webgl, 计算机视觉, 交互设计]
summary: "基于 Three.js 和 MediaPipe Hands 的实时 3D 粒子交互系统，通过手势捏合操作 30,000+ 粒子，支持心形和随机云两种形态切换。"
featured: true
cover: ""
liveUrl: ""
repoUrl: ""
---

## 项目概述

一个运行在浏览器的实时 3D 粒子系统，用户通过摄像头手势即可与粒子云交互。核心功能包括：

- 手势识别：通过 MediaPipe Hands 检测手指坐标，计算拇指和食指之间的 3D 欧几里得距离实现捏合缩放
- 形态切换：支持两种粒子形态 — 30,000 个随机分布的盒状点云，以及 10,000 个通过参数方程生成的心形点云
- 实时控制面板：dat.GUI 面板调节粒子颜色、大小、全屏切换

## 技术实现

### 手势缩放

```javascript
// 计算拇指尖 (landmark 4) 和食指尖 (landmark 8) 之间的 3D 距离
const dx = thumb.x - index.x;
const dy = thumb.y - index.y;
const dz = thumb.z - index.z;
const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);

// 指数平滑
currentScale += (targetScale - currentScale) * 0.1;
```

### 心形参数方程

```javascript
// 心形曲线：x = 16sin^3(t), y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)
const t = (i / totalPoints) * Math.PI * 2;
const x = 16 * Math.pow(Math.sin(t), 3) * spread;
const y = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * spread;
const z = (Math.random() - 0.5) * 4; // Z 轴随机深度
```

### 渲染效果

- 使用 Three.js `PointsMaterial` 配合 Additive 混合，粒子叠加产生发光效果
- Canvas 纹理生成圆形粒子贴图
- 粒子云自动缓慢旋转

## 技术栈

- **Three.js r128**: 3D 渲染引擎
- **MediaPipe Hands**: 手部关键点检测
- **MediaPipe Camera Utils**: 摄像头帧循环
- **dat.GUI**: 调试控制面板
- 纯前端实现，CDN 加载，无需构建工具

## 成果

实现了一个完整的手势交互 3D 可视化 Demo，展示了 WebGL、计算机视觉、实时交互三者结合的可能性。
