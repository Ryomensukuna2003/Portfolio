import { Link } from "react-router-dom";
import { GridPattern } from "../components/ui/grid";
import TextAnimate from "../components/ui/text-animate";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center overflow-hidden bg-black">
      <div className="relative grid h-full grid-cols-12 bg-black text-white">
        <GridPattern strokeDasharray="2" width={100} height={200} />

        <div className="fade-style z-10 col-span-12 flex flex-col justify-center p-4 sm:p-6 md:p-16">
          {/* status line */}
          <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs tracking-wide text-zinc-400 sm:text-sm md:mb-8">
            <span className="signal-pulse inline-block h-2 w-2 rounded-full bg-signal" />
            <span>
              SDE1 @{" "}
              <a
                href="https://convegenius.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
              >
                ConveGenius
              </a>
            </span>
            <span className="text-zinc-600">·</span>
            <span>
              previously @{" "}
              <a
                href="https://devrev.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
              >
                DevRev
              </a>
            </span>
          </div>

          <TextAnimate
            text="SHIVANSHU"
            as="h1"
            className="text-5xl leading-[0.95] sm:text-7xl md:text-9xl"
            type="shiftInUp"
          />
          <TextAnimate
            text="MISHRA"
            as="span"
            className="text-5xl leading-[0.95] sm:text-7xl md:text-9xl"
            type="shiftInUp"
          />

          <p className="mt-6 max-w-xl font-mono text-lg text-zinc-400 sm:text-xl md:mt-8 md:text-2xl">
            software developer — I build fast, useful things for the web.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-base sm:text-lg md:mt-12">
            <Link
              to="/work"
              className="border-b-2 border-signal pb-0.5 text-white transition-colors hover:text-signal"
            >
              view work →
            </Link>
            <Link
              to="/contact"
              className="border-b-2 border-transparent pb-0.5 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
            >
              get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
