import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function parseMarkdownFile<T>(filePath: string): { frontmatter: T; content: string } | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return { frontmatter: data as T, content };
  } catch {
    return null;
  }
}

export function getAllMarkdownFiles<T>(directory: string): T[] {
  const dirPath = path.join(process.cwd(), directory);

  if (!fs.existsSync(dirPath)) return [];

  const filenames = fs.readdirSync(dirPath).filter((f) => f.endsWith(".md"));

  const results: T[] = [];

  for (const filename of filenames) {
    const filePath = path.join(dirPath, filename);
    const parsed = parseMarkdownFile<T>(filePath);
    if (parsed) {
      results.push(parsed as unknown as T);
    }
  }

  return results;
}

export function getSlug(filename: string): string {
  return filename.replace(/\.md$/, "");
}
