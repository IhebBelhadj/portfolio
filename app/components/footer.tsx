"use client";
import { useEffect, useState } from "react";

function GitHubIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.488 0-4.507 2.02-4.507 4.507 0 .353.04.697.117 1.026C7.728 9.38 4.1 7.6 1.67 4.965c-.387.664-.61 1.437-.61 2.26 0 1.56.794 2.936 2.003 3.744-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.417-.377.102-.775.157-1.186.157-.29 0-.57-.028-.844-.08.57 1.78 2.225 3.078 4.188 3.113A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.253 0 12.774-6.837 12.774-12.774 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.94 8.94 0 0 1-2.54.698z" />
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
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  return <span>{time}</span>;
}

export default function Footer() {
  return (
    <footer className="w-full fixed bottom-0 left-0 flex items-center justify-between text-neutral-300 text-sm z-50 border-t border-neutral-700 h-12" style={{boxShadow: '0 0 40px 0 #0008'}}>
      <div className="flex items-center h-full">
        <span className="tracking-wide text-neutral-400 px-4 h-full flex items-center border-r">find me in :</span>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors border-l border-r border-neutral-700 h-full flex items-center px-4 first:border-l-0 first:pl-0"><GitHubIcon /></a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors border-r border-neutral-700 h-full flex items-center px-4"><LinkedInIcon /></a>
      </div>
      <div className="text-neutral-500 font-mono pr-4"><Clock /></div>
    </footer>
  );
}
