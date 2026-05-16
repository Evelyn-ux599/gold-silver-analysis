import Link from "next/link";
import { notFound } from "next/navigation";
import { getDailyByDate, getDailySlugs, getAllDailyLogs } from "@/lib/content";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import TagBadge from "@/components/TagBadge";
import { CATEGORIES } from "@/lib/constants";

export function generateStaticParams() {
  return getDailySlugs().map((slug) => ({ date: slug }));
}

interface Props {
  params: Promise<{ date: string }>;
}

export default async function DailyDetailPage({ params }: Props) {
  const { date } = await params;
  const log = getDailyByDate(date);

  if (!log) notFound();

  const cat = CATEGORIES[log.frontmatter.category] ?? CATEGORIES["其他"];
  const allLogs = getAllDailyLogs();
  const currentIndex = allLogs.findIndex((d) => String(d.frontmatter.date) === date);
  const prevLog = currentIndex < allLogs.length - 1 ? allLogs[currentIndex + 1] : null;
  const nextLog = currentIndex > 0 ? allLogs[currentIndex - 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/daily"
        className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent-blue transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        返回日志列表
      </Link>

      <time className="text-sm text-text-secondary font-mono">{log.frontmatter.date}</time>
      <h1 className="text-3xl font-bold text-text-primary mt-2 mb-4">{log.frontmatter.title}</h1>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <TagBadge label={cat.label} className={cat.color} />
        <div className="flex flex-wrap gap-1.5">
          {log.frontmatter.tags.map((tag) => (
            <span key={tag} className="text-xs text-text-secondary/70 bg-white/[0.03] px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-accent-blue/5 border border-accent-blue/10 rounded-xl p-4 mb-10">
        <span className="text-xs text-accent-blue font-medium uppercase tracking-wide">今日成果</span>
        <p className="text-text-primary mt-1 leading-relaxed">{log.frontmatter.result}</p>
      </div>

      <MarkdownRenderer content={log.content} />

      <div className="flex justify-between mt-16 pt-8 border-t border-white/[0.06]">
        {prevLog ? (
          <Link
            href={`/daily/${prevLog.frontmatter.date}`}
            className="text-sm text-text-secondary hover:text-accent-blue transition-colors"
          >
            &larr; {prevLog.frontmatter.date} {prevLog.frontmatter.title}
          </Link>
        ) : (
          <span />
        )}
        {nextLog ? (
          <Link
            href={`/daily/${nextLog.frontmatter.date}`}
            className="text-sm text-text-secondary hover:text-accent-blue transition-colors text-right"
          >
            {nextLog.frontmatter.date} {nextLog.frontmatter.title} &rarr;
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
