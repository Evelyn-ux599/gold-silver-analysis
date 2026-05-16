import Link from "next/link";
import type { Project } from "@/lib/types";
import TagBadge from "./TagBadge";
import { CATEGORIES } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, frontmatter: p } = project;
  const cat = CATEGORIES[p.category] ?? CATEGORIES["其他"];

  return (
    <Link href={`/projects/${slug}`} className="group block">
      <div className="bg-bg-card border border-white/[0.05] rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent-blue/20 group-hover:shadow-lg group-hover:shadow-accent-blue/5">
        <div className="aspect-video bg-gradient-to-br from-bg-secondary to-bg-primary flex items-center justify-center overflow-hidden">
          {p.cover ? (
            <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-4xl opacity-20">
              {p.category === "编程" ? "💻" : p.category === "AI" ? "🤖" : p.category === "设计" ? "🎨" : p.category === "写作" ? "✍️" : "📦"}
            </span>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <TagBadge label={cat.label} className={cat.color} />
            <time className="text-xs text-text-secondary font-mono">{p.date}</time>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
            {p.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-3">
            {p.summary}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-xs text-text-secondary/70 bg-white/[0.03] px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
