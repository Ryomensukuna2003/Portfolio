import { GridPattern } from "../components/ui/grid";
import TextAnimate from "../components/ui/text-animate";

export default function Home() {
  return (
    <div className="h-full bg-black overflow-x-hidden overflow-y-hidden flex flex-col justify-center">
      <div className="bg-black text-white grid grid-cols-12 relative h-full">
        <GridPattern strokeDasharray="2" width={100} height={200} />
        <div className="col-span-12 fade-style flex flex-col  p-4 sm:p-6 md:p-16 z-10">
          <TextAnimate
            text="SHIVANSHU"
            className="text-5xl sm:text-7xl md:text-9xl"
            type="shiftInUp"
          />
          <br />
          <TextAnimate
            text="MISHRA"
            className="text-5xl sm:text-7xl md:text-9xl"
            type="shiftInUp"
          />
          <div className="mt-4 md:mt-8 text-center md:text-left">
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-mono italic">
              computer science "student"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
