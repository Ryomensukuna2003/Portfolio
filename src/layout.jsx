import { useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "./components/ui/sonner";

export default function RootLayout({ children }) {
  const vLineRef = useRef(null);
  const hLineRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      const v = vLineRef.current;
      const h = hLineRef.current;
      const d = dotRef.current;
      if (v) v.style.transform = `translate3d(${x}px, 0, 0) translateX(-50%)`;
      if (h) h.style.transform = `translate3d(0, ${y}px, 0) translateY(-50%)`;
      if (d) d.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="cursor-none-fine">
      <div className="relative">
        {/* Vertical line - hidden on mobile */}
        <div
          ref={vLineRef}
          className="fixed top-0 left-0 w-px h-screen bg-gray-500 pointer-events-none z-40 hidden sm:block will-change-transform"
        />
        {/* Horizontal line - hidden on mobile */}
        <div
          ref={hLineRef}
          className="fixed top-0 left-0 w-screen h-px bg-gray-500 pointer-events-none z-40 hidden sm:block will-change-transform"
        />
        <div
          ref={dotRef}
          className="fixed top-0 left-0 w-2 h-2 bg-signal rounded-xs pointer-events-none z-50 hidden sm:block will-change-transform"
        />
      </div>
      {children}
      <Analytics />
      <Toaster />
    </div>
  );
}
