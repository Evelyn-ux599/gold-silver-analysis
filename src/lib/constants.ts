export const SITE_NAME = "Guanchulin";
export const SITE_TITLE = "Guanchulin — 养 Agent 变现 · 复利追踪";
export const SITE_DESCRIPTION = "记录一个 AI 产品经理如何养 Agent 做内容变现。从 0 到 1 搭建自动化写作系统，追踪 Agent 数量、文章产出和复利增长。";

export const CATEGORIES: Record<string, { label: string; color: string }> = {
  "产品": { label: "产品", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  "AI": { label: "AI", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  "编程": { label: "编程", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  "内容": { label: "内容", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  "写作": { label: "写作", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  "其他": { label: "其他", color: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30" },
};

export const ALL_CATEGORIES = ["全部", ...Object.keys(CATEGORIES)];

export const NAV_ITEMS = [
  { label: "首页", href: "/" },
  { label: "项目", href: "/projects" },
  { label: "日志", href: "/daily" },
  { label: "🥇 黄金看板", href: "/gold.html" },
  { label: "🥈 白银看板", href: "/silver.html" },
];
