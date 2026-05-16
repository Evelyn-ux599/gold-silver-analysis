import GradientOrb from "./GradientOrb";

const METRICS = [
  { value: "7", label: "Agent/Skill", desc: "积累" },
  { value: "7", label: "文章产出", desc: "篇" },
  { value: "4", label: "连续追踪", desc: "天" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <GradientOrb size={600} color="#00aaff" opacity={0.15} className="top-[-100px] right-[-200px]" />
      <GradientOrb size={500} color="#8a2be2" opacity={0.12} className="bottom-[-150px] left-[-150px]" />
      <GradientOrb size={300} color="#40e0d0" opacity={0.1} className="top-1/2 left-1/3" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="text-sm text-accent-blue font-medium mb-4 tracking-widest uppercase">
          养 Agent 变现 · 复利项目追踪
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-teal bg-clip-text text-transparent">
            Guanchulin
          </span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-6 leading-relaxed">
          每多一个 Skill，Agent 就跑得更远一步
        </p>
        <p className="text-sm text-text-secondary/70 max-w-md mx-auto leading-relaxed mb-8">
          从 AI 新闻自动发布到 Vera 公众号写作 Skill，每一个项目都是可积累的数字资产。
          目标：让 Agent 自己产出、自己发布、自己迭代 — 人在睡觉，系统在赚钱。
        </p>

        <div className="flex justify-center gap-3 text-sm mb-10">
          <span className="px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
            Skill 资产化
          </span>
          <span className="px-4 py-2 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
            Agent 自动化
          </span>
          <span className="px-4 py-2 rounded-full bg-accent-teal/10 text-accent-teal border border-accent-teal/20">
            内容复利
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="bg-bg-card border border-white/[0.06] rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                {m.value}
              </div>
              <div className="text-xs text-text-secondary mt-1">
                {m.label}
                <span className="text-text-secondary/50 ml-0.5">{m.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
