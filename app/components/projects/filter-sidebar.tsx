import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { filters } from "~/_data/projects-data";

type FilterSidebarProps = {
  activeFilters: string[];
};

export function FilterSidebar({ activeFilters }: FilterSidebarProps) {
  const getToggleUrl = (techId: string) => {
    const newFilters = new Set(activeFilters);
    if (newFilters.has(techId)) {
      newFilters.delete(techId);
    } else {
      newFilters.add(techId);
    }
    const params = new URLSearchParams();
    if (newFilters.size > 0) {
      params.set("tech", Array.from(newFilters).join(","));
    }
    return `/projects?${params.toString()}`;
  };

  return (
    <aside className="p-4 font-mono text-sm">
      <h3 className="text-foreground mb-2 font-semibold">projects</h3>
      <Accordion
        type="multiple"
        defaultValue={filters.map((f) => f.name)}
        className="w-full"
      >
        {filters.map((group) => (
          <AccordionItem
            key={group.name}
            value={group.name}
            className="border-border border-b"
          >
            <AccordionTrigger className="text-foreground py-2 hover:no-underline">
              {group.name}
            </AccordionTrigger>
            <AccordionContent className="space-y-2 pt-2">
              {group.technologies.map((tech) => {
                const isActive = activeFilters.includes(tech.id);
                return (
                  <Link
                    key={tech.id}
                    href={getToggleUrl(tech.id)}
                    className="hover:bg-border flex items-center gap-3 rounded-md px-2 py-1.5"
                  >
                    <Checkbox id={tech.id} checked={isActive} />
                    <label
                      htmlFor={tech.id}
                      className="text-muted-foreground flex w-full cursor-pointer items-center gap-2"
                    >
                      {tech.icon && <tech.icon className="h-4 w-4" />}
                      {tech.name}
                    </label>
                  </Link>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
}
