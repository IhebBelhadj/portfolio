"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

function Clock() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      });
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setDateTime(`${formattedDate} ${formattedTime}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{dateTime}</span>;
}

export default function Footer() {
  return (
    <footer className="text-muted-foreground border-border bg-background fixed bottom-0 left-0 z-50 flex h-12 w-full items-center justify-between border-t text-sm">
      <div className="flex h-full items-center">
        <span className="border-border hidden h-full items-center border-r px-4 tracking-wide md:flex">
          find me in:
        </span>

        <a
          href="https://github.com/IhebBelhadj"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="border-border hover:text-foreground flex h-full items-center border-r px-4 transition-colors md:border-l"
        >
          <Github className="size-5" />
        </a>

        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="border-border hover:text-foreground flex h-full items-center border-r px-4 transition-colors"
        >
          <Linkedin className="size-5" />
        </a>
      </div>

      <div className="text-muted-foreground h-full items-center md:flex">
        <div className="border-border flex h-full items-center border-l px-4">
          <Clock />
        </div>
      </div>
    </footer>
  );
}
