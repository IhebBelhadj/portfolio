// components/Hero.tsx
import Link from "next/link";
// The ProjectStack/Carousel imports are removed as requested
// import { ProjectStack } from "./hero/hero-project-stack";

export function Hero() {
  return (
    <section
      className="// Mobile: centered at the top, covers a smaller area // Desktop: anchored to the top right, larger size min-h-screen bg-[length:100%_50%] bg-top bg-no-repeat md:bg-[length:65%_auto] md:bg-right-top"
      style={{
        backgroundImage: `url('/hero-blur.png')`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 
          - Stacks vertically on mobile (1 column)
          - Switches to 2 columns on medium screens and up
          - Adjusts vertical padding for mobile vs. desktop
        */}
        <div className="grid min-h-screen grid-cols-1 items-center gap-y-16 py-12 md:grid-cols-2 md:gap-x-16 md:py-24">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-muted-foreground text-lg">Hi all. I am</p>

            {/* Responsive Typography for the main heading */}
            <h1 className="text-foreground mt-2 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
              Iheb Belhadj
            </h1>

            {/* Responsive Typography for the subheading */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xl sm:text-2xl md:justify-start">
              <span className="text-syntax-keyword">{">"}</span>
              <h2 className="text-foreground">Software engineer</h2>
            </div>

            {/* Code Snippet at the bottom */}
            <div className="text-muted-foreground mt-12 font-mono text-sm md:mt-16">
              <p className="text-syntax-comment">// NOTE: Also a vim lover</p>
              <p className="text-syntax-comment">
                // find my profile on Github:
              </p>
              <p className="mt-4">
                <span className="text-syntax-keyword">const</span>{" "}
                <span className="text-syntax-function">githubLink</span>{" "}
                <span className="text-syntax-punctuation">{"="}</span>{" "}
                <Link
                  href="https://github.com/IhebBelhadj" // Corrected the link to match the text
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-syntax-string transition-all hover:brightness-125"
                >
                  "https://github.com/IhebBelhadj"
                </Link>
              </p>
            </div>
          </div>

          {/* 
            Right Column: Placeholder
            - This entire div is now hidden on mobile and only appears on desktop.
          */}
          <div className="hidden items-center justify-center md:flex">
            {/* 
              This is where your ProjectStack/Carousel would go on desktop. 
              For now, it's an empty placeholder as requested.
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
