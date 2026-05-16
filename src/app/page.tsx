import { getRecentDaily, getFeaturedProjects } from "@/lib/content";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";

const SKILLS = [
  {
    title: "Vera 公众号写作 Skill",
    description: "Vera 人设 · 标题轮换(悬念/反常识/数据) · 6段式模板 · 论文式引用 · 数据来源区块 · 封面自动生成",
    produces: "每天 1 篇深度信息差分析，已产出 7 篇",
    status: "running" as const,
  },
  {
    title: "AI 新闻自动发布 Skill",
    description: "多源抓取(arXiv/RSS) · HTML 自动格式化 · 微信草稿创建 · macOS launchd 定时调度",
    produces: "每天 8:00 自动生成 AI 日报通讯稿",
    status: "running" as const,
  },
  {
    title: "封面自动生成 Skill",
    description: "Python PIL 程序化绘图 · 标题关键词自动匹配4种主题配色 · 纯像素渲染零外部依赖",
    produces: "所有文章的微信封面图，无需设计工具",
    status: "running" as const,
  },
  {
    title: "期权交易分析 Skill",
    description: "Black-Scholes Greeks 引擎 · Credit Spread 扫描 · Yahoo Finance 真实数据 · 模拟交易+胜率统计",
    produces: "每天扫描高胜率期权价差信号，$3,000 策略验证中",
    status: "running" as const,
  },
  {
    title: "黄金走势分析看板",
    description: "10大因素百科 · 实时金价/沪金/DXY/VIX · 多空博弈概率 · 一键查询+自动验证闭环",
    produces: "随时查询黄金涨跌信号，预测准确率自动追踪",
    status: "running" as const,
  },
  {
    title: "白银走势分析看板",
    description: "6利多+6利空因素 · 光伏/工业独特驱动 · 金银比追踪 · SLV ETF 实时持仓",
    produces: "白银专属看板，双属性（贵金属+工业）分析",
    status: "running" as const,
  },
  {
    title: "Hermes Agent 本地部署",
    description: "macOS 本地 CLI 部署 · QQ + iCloud 双通道 · 公众号草稿自动提交 · WeChat API 纯 stdlib 封装",
    produces: "Agent 可读写本地文件、操作桌面、提交公众号草稿箱",
    status: "running" as const,
  },
];

export default function Home() {
  const recentLogs = getRecentDaily(7);
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-text-primary mb-2 flex items-center justify-center gap-2">
            <span className="w-1 h-6 rounded-full bg-accent-purple" />
            Agent 资产
          </h2>
          <p className="text-sm text-text-secondary">
            每一个 Skill = 一个自动化 Agent，积累越多，复利越大
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full bg-accent-blue" />
          最近动态
        </h2>
        <Timeline logs={recentLogs} />
      </section>

      {featuredProjects.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-2">
            <span className="w-1 h-6 rounded-full bg-accent-teal" />
            项目档案
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      <section className="h-16" />
    </>
  );
}