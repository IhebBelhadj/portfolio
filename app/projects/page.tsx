import Link from "next/link";
import { FilterSidebar } from "~/components/projects/filter-sidebar";
import { ProjectCard } from "~/components/projects/project-card";
import { projects, filters } from "~/_data/projects-data";
import { X } from "lucide-react";
import { ProjectsPageLayout } from "~/components/projects/project-page-layout"; // <-- Import the new layout

export const dynamic = "force-dynamic";

type ProjectsPageProps = {
  searchParams: {
    tech?: string;
  };
};

const FilterBar = ({ activeFilters }: { activeFilters: string[] }) => {
  const getFilterName = (id: string) =>
    filters.flatMap((g) => g.technologies).find((t) => t.id === id)?.name || id;

  return (
    <div className="border-border flex items-center gap-4 border-b p-2 text-sm md:border-b-0 md:p-0 md:py-2">
      <div className="align-center border-border text-foreground flex gap-2 rounded-md px-4 py-2 md:border-r">
        <span className="text-muted-foreground">
          {activeFilters.length > 0
            ? activeFilters.map(getFilterName).join("; ")
            : "All Projects"}
        </span>
        {activeFilters.length > 0 && (
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

const ProjectGrid = ({ projects }: { projects: any[] }) => (
  <div className="flex-grow overflow-y-auto p-4 md:p-8">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    {projects.length === 0 && (
      <div className="text-muted-foreground flex h-full items-center justify-center">
        <p>No projects found with the selected filters.</p>
      </div>
    )}
  </div>
);

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const activeFilters = searchParams.tech ? searchParams.tech.split(",") : [];
  const filteredProjects =
    activeFilters.length === 0
      ? projects
      : projects.filter((project) =>
          activeFilters.some((filter) => project.tags.includes(filter)),
        );

  return (
    <div className="h-[calc(100vh-48px)] pt-11">
      <ProjectsPageLayout
        filterSidebar={<FilterSidebar activeFilters={activeFilters} />}
        filterBar={<FilterBar activeFilters={activeFilters} />}
        projectGrid={<ProjectGrid projects={filteredProjects} />}
      />
    </div>
  );
}
