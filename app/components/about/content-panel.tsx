"use client";
import { CodeBlock, dracula } from "react-code-blocks";
import { ScrollArea } from "../ui/scroll-area";

type ContentPanelProps = {
  content: string;
};

const customTheme = {
  ...dracula,
  backgroundColor: "transparent",
  textColor: "#E0E2E4", // Corresponds to your --foreground
  stringColor: "#6A9955", // Example, adjust to your --sh-string
  keywordColor: "#C586C0", // Example, adjust to your --sh-keyword
  commentColor: "var(--sh-comment)",
};

export function ContentPanel({ content }: ContentPanelProps) {
  return (
    <ScrollArea className="h-full w-full">
      <div className="p-4 font-mono text-sm">
        <CodeBlock
          text={content}
          language="javascript"
          showLineNumbers={true}
          theme={customTheme}
          customStyle={{
            backgroundColor: "transparent",
            padding: "0",
          }}
          codeContainerStyle={{
            backgroundColor: "transparent",
          }}
        />
      </div>
    </ScrollArea>
  );
}
