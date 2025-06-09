import Link from "next/link";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";

import { FilterSidebar } from "~/components/projects/filter-sidebar";
import { ProjectCard } from "~/components/projects/project-card";
import { projects, filters } from "~/_data/projects-data";
import { X } from "lucide-react";

export const dynamic = "force-dynamic";

type ProjectsPageProps = {
  searchParams: {
    tech?: string;
  };
};

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const params = await searchParams;
  const activeFilters = params.tech ? params.tech.split(",") : [];

  const filteredProjects =
    activeFilters.length === 0
      ? projects
      : projects.filter((project) =>
        activeFilters.some((filter) => project.tags.includes(filter)),
      );

  const getFilterName = (id: string) =>
    filters.flatMap((g) => g.technologies).find((t) => t.id === id)?.name || id;

  return (
    <div className="h-[calc(100vh-48px)] pt-11">
      {" "}
      <ResizablePanelGroup direction="horizontal" className="h-full">
        {/* Sidebar */}
        <ResizablePanel defaultSize={15} minSize={15} maxSize={25}>
          <FilterSidebar activeFilters={activeFilters} />
        </ResizablePanel>

        <ResizableHandle withHandle className="bg-border" />

        {/* Main Content */}
        <ResizablePanel defaultSize={80}>
          <div className="flex h-full flex-col">
            <div className="border-border flex items-center gap-4 border-b p-2 text-sm">
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

            <div className="flex-grow overflow-y-auto p-8">
              <div className="max-w-8xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              {filteredProjects.length === 0 && (
                <div className="text-muted-foreground flex h-full items-center justify-center">
                  <p>No projects found with the selected filters.</p>
                </div>
              )}
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
