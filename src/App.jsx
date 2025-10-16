import { useState } from "react";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import RootLayout from "./layout";
import Footer from "./Footer";

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
        <div className="flex-1 overflow-hidden">{renderPage()}</div>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </RootLayout>
  );
}
