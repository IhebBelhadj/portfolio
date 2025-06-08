"use client";
import { useEffect, useState } from "react";

import { Github, Linkedin } from "lucide-react";
function GitHubIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.336-.025-3.058-1.865-3.058-1.867 0-2.154 1.457-2.154 2.963v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
    </svg>
  );
}

function Clock() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      // Format the date part
      const formattedDate = now.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      });

      // Format the time part
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // Use 'false' for 24-hour time
      });

      // Combine them into a single string
      setDateTime(`${formattedDate} ${formattedTime}`);
    };

    update(); // Run once immediately

    // Update every second to keep the time fresh
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <span>{dateTime}</span>;
}

export default function Footer() {
  return (
    // You had `fixed` positioning, which is great for a sticky footer.
    <footer className="border-border text-muted-foreground fixed bottom-0 left-0 z-50 flex h-12 w-full items-center justify-between border-t text-sm">
      <div className="flex h-full items-center">
        <span className="border-border flex h-full items-center border-r px-4 tracking-wide">
          find me in:
        </span>
        <a
          href="https://github.com/IhebBelhadj" // Replace with your actual GitHub username
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="border-border hover:text-foreground flex h-full items-center border-r px-4 transition-colors"
        >
          <Github className="size-5" />
        </a>
        <a
          href="https://linkedin.com/in/username" // Replace with your actual LinkedIn username
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="border-border hover:text-foreground flex h-full items-center border-r px-4 transition-colors"
        >
          <Linkedin className="size-5" />
        </a>
      </div>

      {/* --- This is the updated section for the clock/date --- */}
      <div className="text-muted-foreground flex h-full items-center">
        <div className="border-border flex h-full items-center border-l px-4">
          <Clock />
        </div>
      </div>
    </footer>
  );
}
