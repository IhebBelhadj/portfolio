import Link from "next/link";
import { ProjectCarousel } from "./hero/hero-project-carousel";
import { ProjectStack } from "./hero/hero-project-stack";

export function Hero() {
  return (
    // Main section with the background image applied using arbitrary values
    <section
      className="min-h-[calc(100vh)]"
      style={{
        backgroundImage: `url('/hero-blur.png')`,
        backgroundSize: "65%", // Makes the image smaller than the container
        backgroundPosition: "top right", // Orients it to the top right
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-65px)] grid-cols-1 items-center gap-16 py-24 md:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground text-lg">Hi all. I am</p>

            <h1 className="text-foreground mt-2 text-6xl font-semibold">
              Iheb Belhadj
            </h1>

            <div className="mt-4 flex items-center gap-4 text-2xl">
              <span className="text-syntax-keyword">{">"}</span>
              <h2 className="text-foreground">Software engineer</h2>
            </div>

            {/* Code Snippet at the bottom */}
            <div className="text-muted-foreground mt-16 font-mono text-sm">
              <p className="text-syntax-comment">// NOTE: Also a vim lover</p>
              <p className="text-syntax-comment">
                // find my profile on Github:
              </p>

              <p className="mt-4">
                <span className="text-syntax-keyword">const</span>{" "}
                <span className="text-syntax-function">githubLink</span>{" "}
                <span className="text-syntax-punctuation">{"="}</span>{" "}
                <Link
                  href="https://github.com/example/url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-syntax-string transition-all hover:brightness-125"
                >
                  "https://github.com/IhebBelhadj"
                </Link>
              </p>
            </div>
          </div>

          {/* Right Column: Placeholder for the game */}
          {/* <div className="border-border bg-background/30 flex min-h-[400px] items-center justify-center rounded-lg border backdrop-blur-sm"> */}
          {/*   <p className="text-muted-foreground">Game Placeholder</p> */}
          {/* </div> */}
          <div className="flex items-center justify-center">
            {/* <ProjectStack /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
