// app/about/page.tsx
"use client";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { Sidebar, type ContentKey } from "~/components/about/about-sidebar";
import { ContentPanel } from "~/components/about/content-panel";
import { mainContent } from "~/_data/about-data";

export default function AboutPage() {
  const [activeContent, setActiveContent] = useState<ContentKey>("bio");

  return (
    <div className="h-[calc(100vh-48px)] pt-12">
      {" "}
      {/* Adjust height to account for navbar and footer */}
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full rounded-lg border-none"
      >
        {/* Left Panel: Sidebar */}
        <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
          <Sidebar setActiveContent={setActiveContent} />
        </ResizablePanel>

        <ResizableHandle withHandle className="bg-border" />

        {/* Right Panel: Main Content */}
        <ResizablePanel defaultSize={80}>
          <div className="flex h-full flex-col">
            {/* Tab Bar */}
            <div className="border-border flex border-b text-sm">
              <div className="border-border bg-card text-foreground border-r px-4 py-2">
                {activeContent}
                <button className="text-muted-foreground hover:text-foreground ml-4">
                  ×
                </button>
              </div>
            </div>

            {/* Content Display */}
            <div className="flex-grow">
              <ContentPanel content={mainContent[activeContent]} />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
