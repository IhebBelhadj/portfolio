// components/ProjectCarousel.tsx

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"; // Make sure this path is correct
import { ProjectCard } from "./hero-project-card";

// Mock data for your projects. You can fetch this from a CMS or API later.
const projectData = [
  {
    title: "Project 1",
    commits: 4992,
    descriptionLines: [
      "Integrated 4 different APIs",
      "React, Next.js, Firebase",
      "Full real-time chat app",
      "Auth with social logins",
    ],
    projectUrl: "#",
  },
  {
    title: "Project 2",
    commits: 1234,
    descriptionLines: [
      "E-commerce store with Stripe",
      "Advanced state management",
      "Built with Tailwind CSS",
      "CI/CD pipeline with Vercel",
    ],
    projectUrl: "#",
  },
  {
    title: "Project 3",
    commits: 876,
    descriptionLines: [
      "Data visualization dashboard",
      "Used D3.js for complex charts",
      "Real-time data from WebSocket",
      "Fully responsive design",
    ],
    projectUrl: "#",
  },
];

export function ProjectCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-lg" // Constrain the width
    >
      <CarouselContent>
        {projectData.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <ProjectCard {...project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Optional: Add previous/next buttons if you want them */}
      {/* 
      <CarouselPrevious className="border-border bg-card hover:bg-border" />
      <CarouselNext className="border-border bg-card hover:bg-border" /> 
      */}
    </Carousel>
  );
}
