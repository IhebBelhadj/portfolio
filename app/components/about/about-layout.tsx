// components/about/AboutPageLayout.tsx
"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "~/hooks/useLocalStorage";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Terminal } from "~/components/terminal/terminal";
import { Menu, FileCode, SquareTerminal, MoreVertical } from "lucide-react";
import { cn } from "~/lib/utils";
import { TabBar, type Tab } from "./tab-bar"; // Import TabBar and the Tab type
import { sidebarSections } from "~/_data/about-data";

type ActiveView = "content" | "terminal";

// Flatten the data once to easily find items by key
const allSidebarItems = sidebarSections.flatMap((section) =>
  section.items.flatMap((item) =>
    item.items ? [item, ...item.items] : [item],
  ),
);

export function AboutPageLayout({
  sidebar,
  contentPanel,
  activeContentKey,
}: {
  sidebar: React.ReactNode;
  contentPanel: React.ReactNode;
  activeContentKey: string;
}) {
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);
  const [activeMobileView, setActiveMobileView] =
    useState<ActiveView>("content");
  const [openTabs, setOpenTabs] = useLocalStorage<Tab[]>("openAboutTabs", [
    { key: "bio", name: "bio", icon: FileCode, color: "text-red-400" }, // Initial tab
  ]);

  useEffect(() => {
    // Find the full data object for the current active item
    const currentItem = allSidebarItems.find(
      (item) => item.path.replace("/about/", "") === activeContentKey,
    );
    const tabExists = openTabs.some((tab) => tab.key === activeContentKey);

    if (currentItem && !tabExists) {
      setOpenTabs([
        ...openTabs,
        {
          key: activeContentKey,
          name: currentItem.title,
          icon: currentItem.icon,
          color: currentItem.color,
        },
      ]);
    }
  }, [activeContentKey, openTabs, setOpenTabs]);

  const handleToggleTerminal = () =>
    setIsTerminalMinimized(!isTerminalMinimized);
  const handleMinimizeMobile = () => setActiveMobileView("content");

  const closeTab = (tabToClose: Tab, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newTabs = openTabs.filter((tab) => tab.key !== tabToClose.key);
    setOpenTabs(newTabs);
    if (activeContentKey === tabToClose.key && newTabs.length > 0) {
      window.location.href = `/about/${newTabs[newTabs.length - 1].key}`;
    } else if (newTabs.length === 0) {
      window.location.href = "/about";
    }
  };

  return (
    <>
      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden h-full md:block">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          <ResizablePanel defaultSize={20} minSize={20} maxSize={30}>
            {sidebar}
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-border" />
          <ResizablePanel defaultSize={80}>
            <div className="flex h-full flex-col">
              <TabBar
                openTabs={openTabs}
                activeContentKey={activeContentKey}
                closeTab={closeTab}
              />
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
      </div>

      {/* --- REVERTED & IMPROVED MOBILE LAYOUT --- */}
      <div className="block h-full md:hidden">
        <div className="flex h-full flex-col">
          <div className="border-border flex items-center justify-between border-b text-sm">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border-border rounded-none border-r"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-background">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle className="font-mono">_navigation</DrawerTitle>
                  </DrawerHeader>
                  <div className="p-4">{sidebar}</div>
                </div>
              </DrawerContent>
            </Drawer>
            <div className="flex h-full flex-grow items-center">
              <div className="border-border bg-card text-foreground flex items-center gap-2 border-r px-4 py-2">
                {activeMobileView === "content" ? (
                  <FileCode className="h-4 w-4" />
                ) : (
                  <SquareTerminal className="h-4 w-4" />
                )}
                <span>
                  {activeMobileView === "content"
                    ? activeContentKey.split("/").pop()
                    : "terminal"}
                </span>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border-border rounded-none border-l"
                >
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border-border bg-card w-48"
              >
                <DropdownMenuItem
                  onClick={() => setActiveMobileView("content")}
                >
                  <FileCode className="mr-2 h-4 w-4" />
                  <span>Switch to Editor</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setActiveMobileView("terminal")}
                >
                  <SquareTerminal className="mr-2 h-4 w-4" />
                  <span>Switch to Terminal</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {activeMobileView === "content" ? (
              contentPanel
            ) : (
              <div className="h-full">
                <Terminal
                  isMinimized={false}
                  onToggleMinimize={handleMinimizeMobile}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  size?: string;
}) => <button {...props}>{children}</button>;
