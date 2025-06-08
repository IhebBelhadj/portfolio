import Link from "next/link";

type ProjectCardProps = {
  title: string;
  commits: number;
  descriptionLines: string[];
  projectUrl: string;
};

export function ProjectCard({
  title,
  commits,
  descriptionLines,
  projectUrl,
}: ProjectCardProps) {
  return (
    // Main card container with the vim aesthetic
    <div className="border-border bg-card flex h-full flex-col overflow-hidden rounded-lg border font-mono text-sm">
      {/* Header Bar */}
      <div className="border-border flex items-center justify-between border-b px-4 py-1.5">
        <span className="text-muted-foreground">{title}</span>
        <span className="text-muted-foreground">
          {commits.toLocaleString()} commits
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-4">
        <ul>
          {descriptionLines.map((line, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-syntax-keyword">*</span>
              <span className="text-foreground">{line}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / Call to Action */}
      <div className="bg-primary mt-auto px-4 py-1">
        <Link
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-background font-bold transition-opacity hover:opacity-80"
        >
          See the project
        </Link>
      </div>
    </div>
  );
}
