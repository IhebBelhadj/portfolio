import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { sidebarSections } from "~/_data/about-data";
import { cn } from "~/lib/utils";

type SidebarProps = {
  activeContentKey: string;
};

const SidebarItemList = ({
  items,
  activeContentKey,
  isSubItem = false,
}: {
  items: any[];
  activeContentKey: string;
  isSubItem?: boolean;
}) => {
  return (
    <div className={cn("p-2", isSubItem && "pl-4")}>
      {items.map((item) => {
        if (item.items) {
          return (
            <Accordion
              key={item.title}
              type="single"
              collapsible
              className="w-full pl-2"
            >
              <AccordionItem value={item.title} className="border-none">
                <AccordionTrigger className="py-1 hover:no-underline">
                  <Link href={item.path} className="flex items-center gap-2">
                    <span className="text-lg">›</span> {item.title}
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  <SidebarItemList
                    items={item.items}
                    activeContentKey={activeContentKey}
                    isSubItem={true}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        }

        return (
          <Link
            key={item.title}
            href={item.path}
            className={cn(
              "hover:bg-border flex w-full items-center gap-2 rounded px-2 py-1 text-left",
              activeContentKey === item.path.replace("/about/", "") &&
              "bg-border text-foreground",
            )}
          >
            <item.icon
              className={cn("h-4 w-4", item.color)}
              fill="currentColor"
            />
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export function Sidebar({ activeContentKey }: SidebarProps) {
  const getSubAccordionDefaultValue = (section: any) => {
    const activeSubItem = section.items.find((item: any) =>
      item.items?.some(
        (subItem: any) =>
          activeContentKey === subItem.path.replace("/about/", ""),
      ),
    );
    return activeSubItem ? activeSubItem.title : undefined;
  };

  return (
    <div className="text-muted-foreground flex flex-col text-sm">
      <Accordion
        type="multiple"
        defaultValue={sidebarSections.map((s) => s.value)}
        className="w-full"
      >
        {sidebarSections.map((section) => (
          <AccordionItem
            key={section.value}
            value={section.value}
            className="border-none"
          >
            <AccordionTrigger className="border-border text-foreground border-b p-2 hover:no-underline">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="p-2">
              {section.isContact
                ? section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="hover:bg-border flex items-center gap-2 rounded px-2 py-1"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                ))
                : section.items.map((item) => (
                  <div key={item.title}>
                    {item.items ? (
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full px-2"
                        defaultValue={getSubAccordionDefaultValue(section)}
                      >
                        <AccordionItem
                          value={item.title}
                          className="border-none"
                        >
                          <AccordionTrigger className="py-1 hover:no-underline">
                            <Link
                              href={item.path}
                              className="flex items-center gap-2"
                            >
                              <item.icon
                                className={cn("h-4 w-4", item.color)}
                                fill="currentColor"
                              />
                              {item.title}
                            </Link>
                          </AccordionTrigger>
                          <AccordionContent className="pl-4">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.path}
                                className={cn(
                                  "hover:bg-border flex w-full items-center gap-2 rounded px-2 py-1 text-left",
                                  activeContentKey ===
                                  subItem.path.replace("/about/", "") &&
                                  "bg-border text-foreground",
                                )}
                              >
                                <subItem.icon className="h-4 w-4" />
                                {subItem.title}
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        href={item.path}
                        className={cn(
                          "hover:bg-border flex w-full items-center gap-2 rounded px-2 py-1 text-left",
                          activeContentKey ===
                          item.path.replace("/about/", "") &&
                          "bg-border text-foreground",
                        )}
                      >
                        <item.icon className={cn("h-4 w-4", item.color)} />
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
