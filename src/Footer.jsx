import { NavLink } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SleepingCat from "./components/ui/neko";

const navItems = [
  { to: "/about", label: "about" },
  { to: "/work", label: "work" },
  { to: "/contact", label: "contact" },
];

export default function Footer() {
  const [warned, setWarned] = useState(false);

  const displayPopover = () => {
    if (warned) return;
    toast.info("Shhh… she's sleeping.", {
      position: "top-center",
      action: {
        label: "Got it",
        onClick: () => {
          setWarned(true);
          toast.success("Thanks!", { duration: 1000, position: "top-center" });
          toast.dismiss();
        },
      },
    });
  };

  return (
    <nav
      aria-label="Primary"
      className="relative z-30 w-full border-t border-zinc-800 bg-black font-mono text-white"
    >
      <div className="flex items-stretch justify-between">
        <NavLink
          to="/"
          aria-label="Home"
          className="group flex items-center px-4 py-5 outline-none md:px-14 md:py-8"
        >
          <ChevronLeft
            size={28}
            className="transition-colors group-hover:text-signal group-focus-visible:text-signal"
          />
        </NavLink>

        <div className="flex items-stretch">
          {navItems.map(({ to, label }) => {
            const isContact = label === "contact";
            return (
              <div key={to} className="relative flex items-stretch">
                {/* Cat sleeps centered just above the contact button's top border */}
                {isContact && (
                  <div
                    className="pointer-events-auto absolute bottom-full left-1/2 z-50 -translate-x-1/2 -mb-px"
                    onMouseEnter={displayPopover}
                  >
                    <SleepingCat />
                  </div>
                )}
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    [
                      "linkWithCoolUnderline flex items-center border-l border-zinc-800 px-4 text-lg italic outline-none transition-colors md:px-10 md:text-xl",
                      isActive
                        ? "text-signal after:translate-x-0"
                        : "text-white hover:text-signal",
                    ].join(" ")
                  }
                >
                  {label}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
