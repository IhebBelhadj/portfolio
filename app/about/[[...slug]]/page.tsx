import { Sidebar } from "~/components/about/about-sidebar";
import { ContentPanel } from "~/components/about/content-panel";
import { AboutPageLayout } from "~/components/about/about-layout";
import { mainContent } from "~/_data/about-data";

type AboutPageProps = {
  params: { slug?: string[] };
};

export default async function AboutPage({ params }: AboutPageProps) {
  const current_params = await params;
  const activeContentKey = current_params.slug?.join("/") || "bio";
  const activeContent =
    mainContent[activeContentKey as keyof typeof mainContent] ||
    "// 404 - Content not found.";

  return (
    <div className="h-[calc(100vh-48px)] pt-11">
      <AboutPageLayout
        sidebar={<Sidebar activeContentKey={activeContentKey} />}
        contentPanel={<ContentPanel content={activeContent} />}
        activeContentKey={activeContentKey}
      />
    </div>
  );
}
