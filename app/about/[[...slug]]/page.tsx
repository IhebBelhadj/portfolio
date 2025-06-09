import { Sidebar } from "~/components/about/about-sidebar";
import { ContentPanel } from "~/components/about/content-panel";
import { AboutPageLayout } from "~/components/about/about-layout";
import { mainContent } from "~/_data/about-data";
import Link from "next/link";

type AboutPageProps = {
  params: { slug?: string[] };
};

function TabBar({ activeTab }: { activeTab: string }) {
  return (
    <div className="border-border flex border-b text-sm">
      <div className="border-border bg-card text-foreground border-r px-4 py-2">
        {activeTab}
        <Link
          href="/about"
          className="text-muted-foreground hover:text-foreground ml-4"
        >
          ×
        </Link>
      </div>
    </div>
  );
}

export default async function AboutPage({ params }: AboutPageProps) {
  const activeContentKey = params.slug?.join("/") || "bio";
  const activeContent =
    mainContent[activeContentKey as keyof typeof mainContent] ||
    "// 404 - Content not found.";

  return (
    <div className="h-[calc(100vh-48px)] pt-11">
      <AboutPageLayout
        sidebar={<Sidebar activeContentKey={activeContentKey} />}
        tabBar={
          <TabBar activeTab={activeContentKey.split("/").pop() || "bio"} />
        }
        contentPanel={<ContentPanel content={activeContent} />}
      />
    </div>
  );
}
