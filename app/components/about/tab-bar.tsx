"use client";

import Link from "next/link";
import { X, type LucideIcon, FileCode } from "lucide-react";
import { cn } from "~/lib/utils";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

export type Tab = {
  key: string;
  name: string;
  icon?: LucideIcon;
  color?: string;
};

type TabBarProps = {
  openTabs: Tab[];
  activeContentKey: string;
  closeTab: (tabToClose: Tab, e: React.MouseEvent) => void;
};

export function TabBar({ openTabs, activeContentKey, closeTab }: TabBarProps) {
  return (
    <ScrollArea className="border-border w-full border-b whitespace-nowrap">
      <div className="flex text-sm">
        {openTabs.map((tab) => {
          return (
            <Link
              href={`/about/${tab.key}`}
              key={tab.key}
              className={cn(
                "border-border flex items-center gap-2 border-r px-4 py-2 transition-colors",
                activeContentKey === tab.key
                  ? "bg-card text-foreground"
                  : "text-muted-foreground hover:bg-border/50",
              )}
            >
              <FileCode className="h-4 w-4"></FileCode>
              <span>{tab.name}</span>
              <button
                onClick={(e) => closeTab(tab, e)}
                className="hover:bg-border rounded-sm p-0.5 opacity-50 hover:opacity-100"
                aria-label={`Close tab ${tab.name}`}
              >
                <X className="h-3 w-3" />
              </button>
            </Link>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
