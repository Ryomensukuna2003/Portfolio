import SleepingCat from "./components/ui/neko";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer({ setCurrentPage }) {
  const [warning, setWarning] = useState(false);
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  const displayPopover = () => {
    toast.info("Don't disturb her lil nigga",{
      position: "top-center",
      action:{
        label: "Understood",
        onClick: () => {
          setWarning(true);          
          toast.success("Good boy",{
            duration: 1000,
            position: "top-center",
          });
          toast.dismiss();
        }
      }
    });
  };
  return (
    <div className="relative">
      <div className="absolute   right-5 bottom-13 md:bottom-33" onMouseEnter={displayPopover} >

        <SleepingCat />
      </div>
      <div className="text-white w-full bg-black border-t border-zinc-800 font-mono italic">
        <div className="flex justify-between md:flex-row  md:items-center">
          <div className="p-4 md:p-14 text-center md:text-left">
            <button
              onClick={() => handleNavigation("home")}
              className="text-lg md:text-xl cursor-none bg-transparent border-none text-white p-0 outline-none focus:outline-none"
            >
              <p className="hover:underline decoration-white">
                <ChevronLeft size={30} className="hover:stroke-4" />
              </p>
            </button>
          </div>
          <div className="flex md:flex-row text-center items-center">
            <button
              onClick={() => handleNavigation("about")}
              className="linkWithCoolUnderline h-full border-zinc-800 border-l-2 no-underline md:border-l-2 bg-transparent  text-white p-0 px-4 md:px-8 outline-none focus:outline-none active:outline-none focus:ring-0 active:ring-0"
            >
              <p className="hover:no-underline">about</p>
            </button>
            <button
              onClick={() => handleNavigation("work")}
              className="linkWithCoolUnderline h-full bg-transparent border-none text-white p-0 px-4 md:px-8 outline-none focus:outline-none active:outline-none focus:ring-0 active:ring-0"
            >
              <p className="hover:no-underline decoration-white">work</p>
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="linkWithCoolUnderline h-full bg-transparent border-none text-white p-0 px-4 md:px-8 outline-none focus:outline-none active:outline-none focus:ring-0 active:ring-0"
            >
              <p className="hover:no-underline decoration-white">contact</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}