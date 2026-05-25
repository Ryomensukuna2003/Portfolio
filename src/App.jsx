import { lazy, Suspense, useState } from "react";

import RootLayout from "./layout";
import Footer from "./Footer";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Work = lazy(() => import("./Pages/Work"));
const Contact = lazy(() => import("./Pages/Contact"));

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About setCurrentPage={setCurrentPage} />;
      case "work":
        return <Work setCurrentPage={setCurrentPage} />;
      case "contact":
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <RootLayout>
      <div className="flex flex-col w-screen h-screen">
        <div className="flex-1 overflow-hidden">
          <Suspense fallback={<div className="h-full bg-black" />}>
            {renderPage()}
          </Suspense>
        </div>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </RootLayout>
  );
}
