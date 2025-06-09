import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Gem } from "lucide-react";
import { cn } from "~/lib/utils";
import { BackgroundGradient } from "../ui/background-gradient";

type Project = (typeof import("../../_data/projects-data").projects)[0];

const DifficultyRating = ({
  rank,
  isMaxDifficulty = false,
}: {
  rank: number;
  isMaxDifficulty?: boolean;
}) => {
  const totalIcons = 5;
  const getColor = (index: number, rank: number) => {
    if (index >= rank) return "text-muted-foreground/30";
    if (rank <= 2) return "text-green-400";
    if (rank <= 4) return "text-yellow-400";
    return "text-purple-400";
  };
  return (
    <div className="border-border bg-card/50 absolute right-2 bottom-2 flex items-center gap-1 rounded-full border px-2 py-1 backdrop-blur-sm">
      {Array.from({ length: totalIcons }).map((_, index) => (
        <Gem
          key={index}
          className={cn(
            "h-3 w-3 transition-colors",
            getColor(index, rank),
            isMaxDifficulty && index < rank && "animate-pulse",
          )}
          fill={index < rank ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
};

const CardContent = ({ project }: { project: Project }) => {
  const isMaxDifficulty = Number(project.difficulty) === 5;

  return (
    <>
      <div className="relative aspect-[2.4/1] overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            isMaxDifficulty
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100",
          )}
        >
          <DifficultyRating
            rank={Number(project.difficulty)}
            isMaxDifficulty={isMaxDifficulty}
          />
        </div>
      </div>
      <div className="flex flex-grow flex-col p-4">
        <p className="text-muted-foreground line-clamp-2 flex-grow text-sm">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-border text-muted-foreground font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Button
          asChild
          variant="secondary"
          className="bg-border hover:bg-border/80 mt-4 w-fit"
        >
          <Link href={project.projectUrl}>view-project</Link>
        </Button>
      </div>
    </>
  );
};

export function ProjectCard({ project }: { project: Project }) {
  const isMaxDifficulty = Number(project.difficulty) === 5;

  return (
    <div className="flex flex-col">
      <div className="mb-2 font-mono text-sm">
        <span className="text-accent">{project.title}</span>
        <span className="text-muted-foreground ml-2">// {project.slug}</span>
      </div>

      {isMaxDifficulty ? (
        <BackgroundGradient
          containerClassName="rounded-lg h-full group"
          className="bg-card flex h-full flex-col overflow-hidden rounded-lg"
        >
          <CardContent project={project} />
        </BackgroundGradient>
      ) : (
        <div className="border-border bg-card group flex h-full flex-col overflow-hidden rounded-lg border">
          <CardContent project={project} />
        </div>
      )}
    </div>
  );
}
