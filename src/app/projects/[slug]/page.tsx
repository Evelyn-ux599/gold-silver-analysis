import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import TagBadge from "@/components/TagBadge";
import { CATEGORIES } from "@/lib/constants";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { frontmatter: p, content } = project;
  const cat = CATEGORIES[p.category] ?? CATEGORIES["其他"];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent-blue transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        返回项目列表
      </Link>

      {p.cover && (
        <div className="aspect-video rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-bg-secondary to-bg-primary">
          <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
        </div>
      )}

      <h1 className="text-3xl font-bold text-text-primary mb-4">{p.title}</h1>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <TagBadge label={cat.label} className={cat.color} />
        <time className="text-sm text-text-secondary font-mono">{p.date}</time>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span key={tag} className="text-xs text-text-secondary/70 bg-white/[0.03] px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {(p.liveUrl || p.repoUrl) && (
        <div className="flex gap-3 mb-10">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue/10 text-accent-blue border border-accent-blue/20 hover:bg-accent-blue/20 transition-colors text-sm font-medium"
            >
              在线演示
            </a>
          )}
          {p.repoUrl && (
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-card text-text-secondary border border-white/[0.06] hover:border-white/20 transition-colors text-sm font-medium"
            >
              源代码
            </a>
          )}
        </div>
      )}

      <MarkdownRenderer content={content} />
    </div>
  );
}
