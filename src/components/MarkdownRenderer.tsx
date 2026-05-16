import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

const components: Components = {
  a: ({ href, children, ...props }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline" {...props}>
      {children}
    </a>
  ),
  img: ({ src, alt, ...props }) => (
    <img src={src} alt={alt ?? ""} className="rounded-xl max-w-full" {...props} />
  ),
  code: ({ className, children, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-bg-card text-accent-teal px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => (
    <pre className="bg-bg-card border border-white/[0.05] rounded-xl p-4 overflow-x-auto text-sm font-mono" {...props}>
      {children}
    </pre>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-accent-blue pl-4 text-text-secondary italic" {...props}>
      {children}
    </blockquote>
  ),
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert max-w-none
      prose-headings:text-text-primary prose-headings:font-bold
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:leading-relaxed prose-p:my-4
      prose-li:leading-relaxed
      prose-strong:text-text-primary
      prose-hr:border-white/[0.08]
      prose-table:border-white/[0.08]
      prose-th:border-white/[0.08] prose-th:text-text-primary
      prose-td:border-white/[0.05]
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
