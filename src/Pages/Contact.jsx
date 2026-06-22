import GridPattern from "../components/ui/grid";
import { Github, Linkedin, Mail } from "lucide-react";
import TextAnimate from "../components/ui/text-animate";

const links = [
  {
    icon: Github,
    label: "@_ryomen_sukuna",
    href: "https://www.github.com/ryomensukuna2003",
  },
  {
    icon: Linkedin,
    label: "@shivanshu-",
    href: "https://www.linkedin.com/in/shivanshu-/",
  },
  {
    icon: Mail,
    label: "mshivanshu1264@gmail.com",
    href: "mailto:mshivanshu1264@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto bg-black">
      <div className="relative grid min-h-full grid-cols-12 bg-black text-white">
        <GridPattern strokeDasharray="2" width={100} height={200} />

        <div className="fade-style z-10 col-span-12 flex flex-col p-4 sm:p-6 md:p-16">
          <TextAnimate
            text="CONTACT"
            as="h1"
            className="text-5xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl"
            type="shiftInUp"
          />

          <p className="mt-6 max-w-md font-mono text-base text-zinc-400 sm:text-lg md:mt-8">
            Have something to build, or just want to say hi? My inbox is open.
          </p>

          <ul className="mt-8 flex max-w-xl flex-col md:mt-12">
            {links.map(({ icon: Icon, label, href }) => {
              const external = href.startsWith("http");
              return (
                <li
                  key={label}
                  className="border-t border-zinc-800 first:border-t-0"
                >
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 py-5 font-mono italic transition-colors md:py-7"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-zinc-500 transition-colors group-hover:text-signal sm:h-6 sm:w-6" />
                    <span className="break-all text-base text-zinc-300 transition-colors group-hover:text-white sm:text-lg md:text-xl">
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
