// components/ProjectStack.tsx

"use client";

import { useState, useEffect } from "react";
import type { CarouselApi } from "../ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ProjectCard } from "./hero-project-card";
import { cn } from "~/lib/utils";

// Mock data for your projects
const projectData = [
  {
    title: "Project 1",
    commits: 4992,
    descriptionLines: [
      "Integrated 4 different APIs",
      "Over 200 different components",
      "React, Mobx, Firebase",
      "Full storybook setup",
    ],
    projectUrl: "#",
  },
];

export function ProjectStack() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      orientation="vertical"
      className="h-[300px] w-full max-w-md" // A fixed height for the viewport
    >
      <CarouselContent
        // The container needs to be tall enough to hold all items in a line
        className="h-[900px]" // e.g., 300px per card * 3 cards
      >
        {projectData.map((project, index) => {
          // 'offset' is the key: it's the distance from the active slide
          // -1 means the slide is before the active one
          //  0 means it's the active slide
          //  1 means it's after the active one
          const offset = index - current;
          const isActive = offset === 0;

          return (
            <CarouselItem
              key={index}
              className="basis-1/3 transition-all duration-500 ease-out"
              style={{
                // CRITICAL: NO `position: absolute`. We let the library handle layout.

                // Active card is on top
                zIndex: isActive
                  ? projectData.length
                  : projectData.length - Math.abs(offset),

                // Fade out inactive cards
                opacity: isActive ? 1 : 0.3,

                // The visual stacking transform
                transform: `
                  translateY(${-offset * 100}%) 
                  scale(${1 - Math.abs(offset) * 0.15})
                `,
              }}
            >
              <ProjectCard {...project} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
