import { Link } from "react-router-dom";
import { GridPattern } from "../components/ui/grid";
import TextAnimate from "../components/ui/text-animate";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col justify-center overflow-hidden bg-black">
      <div className="relative grid h-full grid-cols-12 bg-black text-white">
        <GridPattern strokeDasharray="2" width={100} height={200} />

        <div className="fade-style z-10 col-span-12 flex flex-col justify-center p-4 sm:p-6 md:p-16">
          <p className="mb-4 font-mono text-sm text-signal sm:text-base">
            error 404
          </p>
          <TextAnimate
            text="LOST?"
            as="h1"
            className="text-6xl leading-[0.95] sm:text-8xl md:text-9xl"
            type="shiftInUp"
          />
          <p className="mt-6 max-w-md font-mono text-lg text-zinc-400 sm:text-xl">
            This page doesn't exist — or it wandered off. Let's get you back.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block w-fit border-b-2 border-signal pb-0.5 font-mono text-base text-white transition-colors hover:text-signal sm:text-lg"
          >
            ← back home
          </Link>
        </div>
      </div>
    </div>
  );
}
