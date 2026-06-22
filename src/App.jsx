import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import RootLayout from "./layout";
import Footer from "./Footer";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Work = lazy(() => import("./Pages/Work"));
const Contact = lazy(() => import("./Pages/Contact"));
const NotFound = lazy(() => import("./Pages/NotFound"));

export default function App() {
  const location = useLocation();

  return (
    <RootLayout>
      <div className="flex h-dvh w-screen flex-col">
        <main className="flex-1 overflow-hidden">
          <Suspense fallback={<div className="h-full bg-black" />}>
            {/* key on pathname so the entrance animation replays per route */}
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </RootLayout>
  );
}
