import { Code, Bot, Rocket, Database, type LucideIcon } from "lucide-react";

export const filters = [
  {
    name: "Frameworks",
    technologies: [
      { id: "react", name: "React", icon: Code },
      { id: "vue", name: "Vue", icon: Code },
      { id: "angular", name: "Angular", icon: Code },
    ],
  },
  {
    name: "Languages",
    technologies: [
      { id: "typescript", name: "TypeScript", icon: Code },
      { id: "javascript", name: "JavaScript", icon: Code },
      { id: "css", name: "CSS", icon: Code },
    ],
  },
  {
    name: "Technologies",
    technologies: [
      { id: "agentic-ai", name: "Agentic AI", icon: Bot },
      { id: "ci-cd", name: "CI/CD", icon: Rocket },
      { id: "bi", name: "Business Intelligence", icon: Database },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Project 1",
    slug: "_ui-animations",
    imageUrl: "/images/playpex.jpg",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    projectUrl: "#",
    difficulty: "3",
    tags: ["react", "css", "typescript"],
  },
  {
    id: 2,
    title: "Project 2",
    slug: "_tetris-game",
    imageUrl: "/images/playpex.jpg",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    projectUrl: "#",
    difficulty: "1",
    tags: ["vue", "javascript"],
  },
  {
    id: 3,
    title: "Project 3",
    slug: "_glassy-ui",
    imageUrl: "/images/playpex.jpg",
    description:
      "Duis aute irure dolor in velit esse cillum dolore. her eis a long description that might need to be truncated.",
    projectUrl: "#",
    difficulty: "5",
    tags: ["react", "css"],
  },
  {
    id: 4,
    title: "Playpex",
    slug: "_torrent_streamer",
    imageUrl: "/images/playpex.jpg",
    description: "A fully-featured torrent streaming app with sleak TV app UI",
    projectUrl: "#",
    difficulty: "5",
    tags: ["angular", "typescript", "ci-cd"],
  },
  {
    id: 5,
    title: "Project 5",
    slug: "_emberize-ui",
    imageUrl: "/images/playpex.jpg",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    projectUrl: "#",
    difficulty: "4",
    tags: ["react", "agentic-ai"],
  },
];
