import { getAllProjects } from "@/lib/content";
import ProjectsContent from "./ProjectsContent";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-text-primary mb-2">项目展示</h1>
        <p className="text-text-secondary">
          每一个项目都是一个里程碑，记录着我的技术探索与创造。
        </p>
      </div>

      <ProjectsContent projects={projects} />
    </div>
  );
}
