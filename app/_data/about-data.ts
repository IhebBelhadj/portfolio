import {
  Mail,
  Phone,
  FileBox,
  GraduationCap,
  Folder,
  type LucideIcon,
} from "lucide-react";

type SidebarItem = {
  title: string;
  path: string;
  icon: LucideIcon;
  color?: string;
  items?: SidebarItem[];
};

export const sidebarSections: {
  title: string;
  value: string;
  isContact?: boolean;
  items: (SidebarItem & { label?: string; href?: string })[];
}[] = [
    {
      title: "personal-info",
      value: "personal-info",
      items: [
        {
          title: "experience",
          path: "/about/experience",
          icon: Folder,
          color: "text-red-400",

          items: [
            {
              title: "Nexits",
              path: "/about/experience/nexits",
              icon: FileBox,
            },
            {
              title: "Talan Consulting",
              path: "/about/experience/talan",
              icon: FileBox,
            },
          ],
        },
        {
          title: "education",
          path: "/about/education",
          icon: Folder,
          color: "text-blue-400",

          items: [
            {
              title: "high-school",
              path: "/about/education/high-school",
              icon: GraduationCap,
            },
            {
              title: "university",
              path: "/about/education/university",
              icon: GraduationCap,
            },
          ],
        },

        {
          title: "index (bio)",
          path: "/about/bio",
          icon: FileBox,
          color: "text-gray-400",
        },
        {
          title: "interests",
          path: "/about/interests",
          icon: FileBox,
          color: "text-gray-400",
        },
      ],
    },
    {
      title: "contacts",
      value: "contacts",
      isContact: true,
      items: [
        {
          title: "email",
          label: "user@gmail.com",
          path: "",
          href: "mailto:user@gmail.com",
          icon: Mail,
        },
        {
          title: "phone",
          label: "+3598246359",
          path: "",
          href: "tel:+3598246359",
          icon: Phone,
        },
      ],
    },
  ];

const contentMap: Record<string, string> = {
  bio: `/** \n * Bio Content \n * I am a software engineer... \n*/`,
  interests: `// My interests include Vim, React, and building cool things.`,
  "education/high-school": `// Graduated from The School of Hard Knocks.`,
  "education/university": `// Studied Computer Science at The University of Life.`,
  education: `// Select a sub-category from the education section to see details.`,
  experience: `// Select a sub-category from the experience section to see details.`,
  "experience/nexits": `// Worked at Nexits as a software engineer...`,
  "experience/talan": `// Worked at Talan Consulting as a software engineer...`,
};

export const mainContent = contentMap;
