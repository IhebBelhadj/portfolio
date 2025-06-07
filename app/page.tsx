"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "./components/ui/carousel";
import { CodeBlock, dracula } from "react-code-blocks";

const pinnedProjects = [
  {
    title: "Project 1",
    features: [
      "Integrated 4 different APIs",
      "Over 200 different components",
      "React, MDX, Firebase",
      "Full storybook setup",
    ],
  },
  {
    title: "Project 2",
    features: [
      "Realtime chat app",
      "Socket.io, Next.js",
      "Custom authentication",
      "Deployed on Vercel",
    ],
  },
  {
    title: "Project 3",
    features: [
      "E-commerce platform",
      "Stripe integration",
      "Product reviews",
      "Admin dashboard",
    ],
  },
];

export default function Page() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setSelectedIdx(api.selectedScrollSnap());
    };
    api.on && api.on("select", onSelect);
    onSelect();
    return () => {
      api.off && api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-12 px-4 md:flex-row md:px-0">
      {/* Left: Terminal-style intro */}
      <div className="flex w-full max-w-xl flex-1 flex-col items-start justify-center">
        <div className="w-full rounded-lg p-8">
          <p className="mb-2 font-mono text-xs text-neutral-500">Hello! I am</p>
          <h1 className="mb-2 font-mono text-3xl font-semibold text-white md:text-4xl">
            Iheb Belhadj
          </h1>
          <h2 className="mb-6 font-mono text-lg text-blue-400 md:text-xl">
            Passionate software engineer
          </h2>
          <div className="mt-4 mb-2 font-mono text-sm text-neutral-400">
            // write the code below to continue:
          </div>
          <div className="flex items-center font-mono text-base">
            <span className="mr-2 text-purple-400">&gt;</span>
            <span className="cursor-pointer text-blue-400 underline">
              whois
            </span>
          </div>
        </div>
      </div>
      {/* Right: Vertical carousel of pinned projects, landscape cards, terminal UI, no drag */}
      <div className="flex w-full max-w-md flex-1 flex-col items-center justify-center"></div>
    </section>
  );
}
