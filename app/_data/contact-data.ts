// data/contact-data.ts
import {
  Mail,
  Phone,
  Youtube,
  Tv,
  Instagram,
  Twitch,
  ExternalLink,
} from "lucide-react";

export const contacts = [
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

export const findMeAlsoIn = [
  {
    icon: Youtube,
    label: "YouTube",
    href: "#", // Replace with your actual URL
  },
  {
    icon: Tv,
    label: "dev.to",
    href: "#",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "#",
  },
  {
    icon: Twitch,
    label: "Twitch",
    href: "#",
  },
];
