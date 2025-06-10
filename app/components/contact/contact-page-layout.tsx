// components/contact/ContactPageLayout.tsx
"use client";

import { useState } from "react";
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
import { Button } from "~/components/ui/button";
import { Menu, FileCode, Code2, MoreVertical } from "lucide-react";

type ActiveView = "form" | "code";

export function ContactPageLayout({
  sidebar,
  form,
  codePreview,
  isSubmitted,
  thankYouMessage,
}: {
  sidebar: React.ReactNode;
  form: React.ReactNode;
  codePreview: React.ReactNode;
  isSubmitted: boolean;
  thankYouMessage: React.ReactNode;
}) {
  const [activeView, setActiveView] = useState<ActiveView>("form");

  return (
    <>
      {/* --- DESKTOP LAYOUT (Unchanged) --- */}
      <div className="hidden h-full md:block">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* ... (Desktop layout code is correct and remains the same) ... */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
            {sidebar}
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-border" />
          <ResizablePanel defaultSize={40} minSize={30}>
            <div className="h-full p-8">
              {isSubmitted ? thankYouMessage : form}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-border" />
          <ResizablePanel defaultSize={40} minSize={30}>
            {codePreview}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* --- NEW & IMPROVED MOBILE LAYOUT --- */}
      <div className="block h-full md:hidden">
        <div className="flex h-full flex-col">
          {/* Mobile Header with Tabs and Menus */}
          <div className="border-border flex items-center justify-between border-b text-sm">
            {/* Sidebar Drawer on the left */}
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
                    <DrawerTitle className="font-mono">
                      _contact-info
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="p-4">{sidebar}</div>
                </div>
              </DrawerContent>
            </Drawer>

            {/* Active View Tab */}
            <div className="flex h-full flex-grow items-center">
              <div className="border-border bg-card text-foreground flex items-center gap-2 border-r px-4 py-2">
                {activeView === "form" ? (
                  <FileCode className="h-4 w-4" />
                ) : (
                  <Code2 className="h-4 w-4" />
                )}
                <span>
                  {activeView === "form"
                    ? "_contact-form.js"
                    : "_code-preview.js"}
                </span>
              </div>
            </div>

            {/* View Switcher Dropdown Menu on the right */}
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
                className="bg-card border-border w-48"
              >
                <DropdownMenuItem onClick={() => setActiveView("form")}>
                  <FileCode className="mr-2 h-4 w-4" />
                  <span>Switch to Form</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveView("code")}>
                  <Code2 className="mr-2 h-4 w-4" />
                  <span>Switch to Code</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Main content area switches based on activeView state */}
          <div className="flex-grow overflow-y-auto p-4">
            {isSubmitted
              ? thankYouMessage
              : activeView === "form"
                ? form
                : codePreview}
          </div>
        </div>
      </div>
    </>
  );
}
