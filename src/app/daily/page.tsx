import Link from "next/link";
import { getAllDailyLogs } from "@/lib/content";
import TagBadge from "@/components/TagBadge";
import { CATEGORIES } from "@/lib/constants";
import type { DailyLog } from "@/lib/types";

function groupByMonth(logs: DailyLog[]): Record<string, DailyLog[]> {
  const groups: Record<string, DailyLog[]> = {};
  for (const log of logs) {
    const month = log.frontmatter.date.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(log);
  }
  return groups;
}

function formatMonth(month: string): string {
  const [y, m] = month.split("-");
  return `${y}年${parseInt(m)}月`;
}

export default function DailyPage() {
  const logs = getAllDailyLogs();
  const groups = groupByMonth(logs);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-text-primary mb-2">每日日志</h1>
        <p className="text-text-secondary">
          记录每一天的创造、思考与进步。
        </p>
      </div>

      {Object.keys(groups).length === 0 ? (
        <p className="text-text-secondary text-center py-16">
          暂无日志，开始记录你的第一笔吧。
        </p>
      ) : (
        <div className="flex flex-col gap-10">
          {Object.entries(groups)
            .sort(([a], [b]) => b.localeCompare(a))
            .map(([month, monthLogs]) => (
              <div key={month}>
                <h2 className="text-lg font-semibold text-text-primary mb-4 sticky top-14 bg-bg-primary/90 backdrop-blur-sm py-2 z-10">
                  {formatMonth(month)}
                </h2>
                <div className="flex flex-col gap-3">
                  {monthLogs.map((log) => {
                    const cat = CATEGORIES[log.frontmatter.category] ?? CATEGORIES["其他"];
                    return (
                      <Link
                        key={log.slug}
                        href={`/daily/${log.frontmatter.date}`}
                        className="block bg-bg-card border border-white/[0.05] rounded-xl p-4 hover:border-accent-blue/20 transition-all group"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <time className="text-xs text-text-secondary font-mono">
                            {log.frontmatter.date}
                          </time>
                          <TagBadge label={cat.label} className={cat.color} />
                        </div>
                        <h3 className="text-base font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                          {log.frontmatter.title}
                        </h3>
                        <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                          {log.frontmatter.result}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
