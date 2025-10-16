// import './fonts.css'
import { useRef } from "react";
import { useMousePosition } from "./hooks/use-mouse-position";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "./components/ui/sonner";


export default function RootLayout({ children }) {
  const containerRef = useRef(null);
  const { x, y } = useMousePosition(containerRef);
  return (
    <div className="cursor-none">
      <div ref={containerRef} className="relative">
        {/*Vertical line - hidden on mobile */}
        <div
          className="absolute w-px h-screen bg-gray-500 top-0 -translate-x-1/2 pointer-events-none z-40 hidden sm:block"
          style={{
            left: `${x}px`,
          }}
        />
        {/*Horizontal line - hidden on mobile */}
        <div
          className="absolute w-screen h-px bg-gray-500 left-0 -translate-y-1/2 pointer-events-none z-40 hidden sm:block"
          style={{
            top: `${y}px`,
          }}
        />
        <div
          className="absolute w-2 h-2 bg-white -translate-x-1/2 -translate-y-1/2 rounded-xs pointer-events-none z-50 hidden sm:block"
          style={{
            top: `${y}px`,
            left: `${x}px`,
          }}
        />
      </div>
      {children}
      <Analytics />
      <Toaster />
    </div>
  );
}