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
import { Hero } from "./components/hero";

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
    <div>
      <Hero />
    </div>
  );
}
