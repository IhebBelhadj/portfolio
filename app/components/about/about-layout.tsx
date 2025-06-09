// components/about/AboutPageLayout.tsx
"use client";

import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { Terminal } from "~/components/terminal/terminal";

export function AboutPageLayout({
  sidebar,
  tabBar,
  contentPanel,
}: {
  sidebar: React.ReactNode;
  tabBar: React.ReactNode;
  contentPanel: React.ReactNode;
}) {
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);

  const handleToggleTerminal = () => {
    setIsTerminalMinimized(!isTerminalMinimized);
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="h-full">
      <ResizablePanel defaultSize={15} minSize={15} maxSize={25}>
        {sidebar}
      </ResizablePanel>
      <ResizableHandle withHandle className="bg-border" />

      <ResizablePanel defaultSize={80}>
        <div className="flex h-full flex-col">
          {tabBar}

          <div className="flex flex-grow flex-col">
            <div className="flex-grow">
              {isTerminalMinimized ? (
                contentPanel
              ) : (
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={55} minSize={20}>
                    {contentPanel}
                  </ResizablePanel>
                  <ResizableHandle withHandle className="bg-border" />
                  <ResizablePanel defaultSize={45} minSize={20}>
                    <Terminal
                      isMinimized={false}
                      onToggleMinimize={handleToggleTerminal}
                    />
                  </ResizablePanel>
                </ResizablePanelGroup>
              )}
            </div>

            {isTerminalMinimized && (
              <div className="h-10 shrink-0">
                <Terminal
                  isMinimized={true}
                  onToggleMinimize={handleToggleTerminal}
                />
              </div>
            )}
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
