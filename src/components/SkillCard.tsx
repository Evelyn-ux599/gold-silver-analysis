interface Skill {
  title: string;
  description: string;
  produces: string;
  status: "running" | "building";
}

interface SkillCardProps {
  skill: Skill;
}

const STATUS_MAP: Record<Skill["status"], { label: string; className: string }> = {
  running: { label: "运行中", className: "bg-green-500/20 text-green-400 border-green-500/30" },
  building: { label: "构建中", className: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
};

export default function SkillCard({ skill }: SkillCardProps) {
  const status = STATUS_MAP[skill.status];

  return (
    <div className="bg-bg-card border border-white/[0.05] rounded-xl p-5 transition-all hover:border-accent-blue/20 hover:-translate-y-0.5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-text-primary">{skill.title}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full border ${status.className}`}>
          {status.label}
        </span>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed mb-3">{skill.description}</p>
      <div className="text-xs text-accent-blue/80 bg-accent-blue/5 rounded-lg px-3 py-2">
        产出：{skill.produces}
      </div>
    </div>
  );
}
