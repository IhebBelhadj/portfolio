// components/Navbar.tsx

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { cn } from "~/lib/utils";
import { Menu, X } from "lucide-react"; // We'll still use the icons
import React from "react";

// Import the Sheet components from shadcn/ui
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // <-- For closing the sheet on link click
} from "~/components/ui/sheet";

const navItems = [
  { href: "/", label: "_hello" },
  { href: "/about", label: "_about me" },
  { href: "/projects", label: "_projects" },
  { href: "/contact", label: "_contact-me" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className={clsx(
        "text-muted-foreground flex h-12 items-center justify-between text-sm", // Standardized height
        "absolute top-0 left-0 z-50 w-full",
        "border-border/50 bg-background/80 border-b backdrop-blur-sm", // Added blur for a modern look
      )}
    >
      {/* --- Desktop Navigation (This is your original code, largely unchanged) --- */}
      <nav className="hidden h-full items-center md:flex">
        <Link
          href="/"
          className="border-border/50 hover:text-foreground flex h-full items-center border-r px-6 transition-colors"
        >
          Iheb-Belhadj
        </Link>

        {/* Main navigation items */}
        {navItems.slice(0, 3).map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "border-border/50 hover:text-foreground flex h-full items-center border-r px-6 transition-colors",
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

      <div className="hidden items-center md:flex">
        <Link
          href="/contact"
          className={clsx(
            "border-border/50 hover:text-foreground flex h-full items-center border-l px-6 transition-colors",
            "border-b-2",
            {
              "border-b-transparent": pathname !== "/contact",
              "border-b-primary text-foreground": pathname === "/contact",
            },
          )}
        >
          _contact-me
        </Link>
      </div>

      {/* --- Mobile Navigation (Visible only on mobile) --- */}
      <div className="flex w-full items-center justify-between md:hidden">
        <Link
          href="/"
          className="hover:text-foreground px-6 py-3 transition-colors"
        >
          Iheb-Belhadj
        </Link>

        {/* This is where the Sheet component is used */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-4">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-background border-l-border/50 w-full max-w-sm"
          >
            <SheetHeader className="text-left">
              <SheetTitle className="text-muted-foreground font-mono">
                # navigate:
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col font-mono">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="border-border/50 hover:bg-border border-b p-4 transition-colors"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

// A simple button component since shadcn/ui Button might not be in this file.
// If you have a global Button component, you can remove this.
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: string;
    size?: string;
  }
>(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";
