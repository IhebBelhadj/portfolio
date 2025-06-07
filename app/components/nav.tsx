"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";

const navItems = [
  { href: "/", label: "_hello" },
  { href: "/about", label: "_about me" },
  { href: "/projects", label: "_projects" },
  { href: "/james_collins", label: "james_collins" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="w-full border-b border-[var(--border)] bg-[var(--sidebar)] font-mono text-[var(--foreground)]"
      style={{ fontFamily: "var(--font-mono)" }}
    ></nav>
  );
}
