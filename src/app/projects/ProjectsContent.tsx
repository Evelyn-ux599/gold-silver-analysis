"use client";

import { useState } from "react";
import type { Project } from "@/lib/types";
import ProjectCard from "@/components/ProjectCard";
import CategoryFilter from "@/components/CategoryFilter";

interface ProjectsContentProps {
  projects: Project[];
}

export default function ProjectsContent({ projects }: ProjectsContentProps) {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filtered =
    activeCategory === "全部"
      ? projects
      : projects.filter((p) => p.frontmatter.category === activeCategory);

  return (
    <>
      <div className="mb-8">
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-secondary text-center py-16">
          该分类下暂无项目，敬请期待。
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
