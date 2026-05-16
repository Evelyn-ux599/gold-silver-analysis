import Link from "next/link";
import type { DailyLog } from "@/lib/types";
import TagBadge from "./TagBadge";
import { CATEGORIES } from "@/lib/constants";

interface TimelineItemProps {
  log: DailyLog;
  index: number;
}

export default function TimelineItem({ log, index }: TimelineItemProps) {
  const cat = CATEGORIES[log.frontmatter.category] ?? CATEGORIES["其他"];

  return (
    <Link
      href={`/daily/${log.frontmatter.date}`}
      className="group relative pl-12 md:pl-20 py-6 block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute left-2.5 md:left-6.5 top-7 w-3 h-3 rounded-full bg-accent-blue border-2 border-bg-primary group-hover:scale-125 transition-transform" />

      <div className="bg-bg-card border border-white/[0.05] rounded-xl p-5 group-hover:border-accent-blue/20 transition-all group-hover:translate-x-1">
        <div className="flex items-center gap-3 mb-2">
          <time className="text-xs text-text-secondary font-mono">{log.frontmatter.date}</time>
          <TagBadge label={cat.label} className={cat.color} />
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent-blue transition-colors">
          {log.frontmatter.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
          {log.frontmatter.result}
        </p>
      </div>
    </Link>
  );
}
