import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { DailyLog, Project, DailyFrontmatter, ProjectFrontmatter } from "./types";

function toDateString(v: unknown): string {
  if (v instanceof Date) {
    const y = v.getFullYear();
    const m = String(v.getMonth() + 1).padStart(2, "0");
    const d = String(v.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  return String(v);
}

function readMarkdownFiles<T>(dir: string): { slug: string; frontmatter: T; content: string }[] {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dirPath, f), "utf-8");
      const { data, content } = matter(raw);
      if (data.date) data.date = toDateString(data.date);
      return { slug: f.replace(/\.md$/, ""), frontmatter: data as T, content };
    });
}

// --- Projects ---

export function getAllProjects(): Project[] {
  return readMarkdownFiles<ProjectFrontmatter>("content/projects")
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getAllProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}

export function getProjectsByCategory(category: string): Project[] {
  const projects = getAllProjects();
  if (category === "全部") return projects;
  return projects.filter((p) => p.frontmatter.category === category);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.frontmatter.featured);
}

// --- Daily Logs ---

export function getAllDailyLogs(): DailyLog[] {
  return readMarkdownFiles<DailyFrontmatter>("content/daily")
    .sort((a, b) => String(b.frontmatter.date).localeCompare(String(a.frontmatter.date)));
}

export function getDailyByDate(date: string): DailyLog | null {
  const logs = getAllDailyLogs();
  return logs.find((d) => String(d.frontmatter.date) === date) ?? null;
}

export function getDailySlugs(): string[] {
  return getAllDailyLogs().map((d) => d.slug);
}

export function getRecentDaily(count: number): DailyLog[] {
  return getAllDailyLogs().slice(0, count);
}
