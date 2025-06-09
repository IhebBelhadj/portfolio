"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

const navItems = [
  { href: "/", label: "_hello" },
  { href: "/about", label: "_about me" },
  { href: "/projects", label: "_projects" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className={clsx(
        "text-muted-foreground flex h-11 items-center justify-between text-sm",
        "absolute top-0 left-0 z-10 w-full", // Position it on top
        "border-border/50 border-b",
      )}
    >
      <nav className="flex items-center">
        <Link
          href="/"
          className="border-border hover:text-foreground min-w-[15rem] border-r px-6 py-3 transition-colors"
        >
          Iheb-Belhadj
        </Link>

        {/* Navigation Tabs */}
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "border-border hover:text-foreground min-w-[6rem] border-r px-6 py-3 transition-colors",
                "border-b-2",
                {
                  "border-b-transparent": !isActive,
                  "border-b-primary text-foreground": isActive,
                },
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Right side of the navbar */}
      <div className="flex items-center">
        <Link
          href="/contact"
          className="border-border hover:text-foreground border-l px-6 py-3 transition-colors"
        >
          _contact-me
        </Link>
      </div>
    </header>
  );
}
