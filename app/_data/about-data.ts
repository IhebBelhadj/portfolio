// data/about-data.ts
import {
  Mail,
  Phone,
  FileCode2,
  GraduationCap,
  Flame,
  Code,
} from "lucide-react";

export const personalInfo = [
  {
    title: "bio",
    icon: FileCode2,
    color: "text-red-400", // Example colors
    content: `/**
 * About me
 * I have 5 years of experience in web
 * development lorem ipsum dolor sit amet,
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat
 * nulla pariatur. Excepteur sint occaecat
 * officia deserunt mollit anim id est laborum.
 */`,
  },
  {
    title: "interests",
    icon: Flame,
    color: "text-green-400",
    content: "Interests content goes here...",
  },
];

export const educationInfo = [
  {
    title: "high-school",
    icon: GraduationCap,
    color: "text-gray-400",
    content: "High school education details...",
  },
  {
    title: "university",
    icon: GraduationCap,
    color: "text-gray-400",
    content: "University education details...",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "user@gmail.com",
    href: "mailto:user@gmail.com",
  },
  {
    icon: Phone,
    label: "+3598246359",
    href: "tel:+3598246359",
  },
];

export const mainContent = {
  education: `// Education Content
// You can add more detailed text or even code blocks here related to your education.
console.log("Loaded education data.");
`,
  bio: personalInfo.find((item) => item.title === "bio")?.content || "",
  interests:
    personalInfo.find((item) => item.title === "interests")?.content || "",
  "high-school":
    educationInfo.find((item) => item.title === "high-school")?.content || "",
  university:
    educationInfo.find((item) => item.title === "university")?.content || "",
};
