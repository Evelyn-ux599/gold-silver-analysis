import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-8xl font-extrabold mb-4 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          404
        </div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">页面未找到</h2>
        <p className="text-text-secondary mb-8">你访问的页面不存在或已被移动。</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue/10 text-accent-blue border border-accent-blue/20 hover:bg-accent-blue/20 transition-colors text-sm font-medium"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}
