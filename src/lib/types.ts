export interface DailyFrontmatter {
  date: string;
  title: string;
  category: string;
  tags: string[];
  result: string;
}

export interface DailyLog {
  slug: string;
  frontmatter: DailyFrontmatter;
  content: string;
}

export interface ProjectFrontmatter {
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  cover?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}
