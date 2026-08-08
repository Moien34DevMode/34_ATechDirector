import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MediaLoader from "@components/media/MediaLoader/MediaLoader";
import { cn } from "@utils/cn";
import styles from "./MarkdownRenderer.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// MarkdownRenderer — renders Markdown content with consistent typography.
//
// Uses remark-gfm for GitHub-Flavored Markdown support:
//   tables, strikethrough, task lists, autolinks.
//
// All rendered HTML elements are scoped to this component's CSS Module,
// so Markdown articles always have consistent, isolated styling.
//
// Usage:
//   <MarkdownRenderer content={markdownString} />
// ─────────────────────────────────────────────────────────────────────────────

export interface MarkdownRendererProps {
  content: string;
  className?: string;
}

function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn(styles.markdown, className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Ensure all heading levels use the correct aria hierarchy.
          // Add custom overrides here as the design evolves.
          a: ({ href, children, ...props }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              {...props}
            >
              {children}
            </a>
          ),
          img: ({ src, alt, ...props }) => (
            <MediaLoader
              src={src}
              alt={alt ?? ""}
              mediaClassName={styles.image}
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;
