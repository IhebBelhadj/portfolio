"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { SlidersHorizontal } from "lucide-react";

export function ProjectsPageLayout({
  filterSidebar,
  filterBar,
  projectGrid,
}: {
  filterSidebar: React.ReactNode;
  filterBar: React.ReactNode;
  projectGrid: React.ReactNode;
}) {
  return (
    <>
      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden h-full md:block">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
            {filterSidebar}
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-border" />
          <ResizablePanel defaultSize={80}>
            <div className="flex h-full flex-col">
              {filterBar}
              {projectGrid}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* --- MOBILE LAYOUT --- */}
      <div className="block h-full md:hidden">
        <div className="flex h-full flex-col">
          <div className="border-border flex items-center justify-between border-b p-2">
            {filterBar}
            <Drawer>
              <DrawerTrigger asChild>
                <button className="border-border text-muted-foreground flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filters</span>
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-background">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle className="font-mono">_filters</DrawerTitle>
                  </DrawerHeader>
                  <div className="p-4">{filterSidebar}</div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          {projectGrid}
        </div>
      </div>
    </>
  );
}
