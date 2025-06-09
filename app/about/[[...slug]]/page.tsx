import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { Sidebar } from "~/components/about/about-sidebar";
import { ContentPanel } from "~/components/about/content-panel";
import { mainContent } from "~/_data/about-data";

type AboutPageProps = {
  params: {
    slug?: string[];
  };
};

export default async function AboutPage({ params }: AboutPageProps) {
  const activeContentKey = params.slug?.join("/") || "bio";

  const activeContent =
    mainContent[activeContentKey as keyof typeof mainContent] ||
    "// 404 - Content not found for this path.";

  return (
    <div className="h-[calc(100vh-44px)] pt-11">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full rounded-lg border-none"
      >
        <ResizablePanel defaultSize={15} minSize={15} maxSize={25}>
          <Sidebar activeContentKey={activeContentKey} />
        </ResizablePanel>

        <ResizableHandle withHandle className="bg-border" />

        <ResizablePanel defaultSize={80}>
          <div className="flex h-full flex-col">
            {/* Tab Bar */}
            <div className="border-border flex border-b text-sm">
              <div className="border-border bg-card text-foreground border-r px-4 py-2">
                {activeContentKey.split("/").pop()}{" "}
                {/* Show the last part of the slug */}
                {/* The close button could link back to the base /about page */}
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-foreground ml-4"
                >
                  ×
                </a>
              </div>
            </div>

            {/* Content Display */}
            <div className="flex-grow">
              <ContentPanel content={activeContent} />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
