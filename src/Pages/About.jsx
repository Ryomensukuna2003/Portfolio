import GridPattern from "../components/ui/grid";
import TextAnimate from "../components/ui/text-animate";

const skills = [
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "express" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Docker", slug: "docker" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Socket.IO", slug: "socketdotio" },
  { name: "C++", slug: "cplusplus" },
  { name: "Git", slug: "git" },
  { name: "Vite", slug: "vite" },
];

const About = () => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto bg-black">
      <div className="relative grid min-h-full grid-cols-12 bg-black text-white">
        <GridPattern strokeDasharray="2" width={100} height={200} />

        <div className="fade-style z-10 col-span-12 flex flex-col p-4 sm:p-6 md:p-12 lg:p-16">
          <TextAnimate
            text="ABOUT"
            as="h1"
            className="text-6xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl"
            type="shiftInUp"
          />

          <div className="mt-6 max-w-2xl md:mt-10">
            <p className="mb-4 text-base leading-relaxed text-zinc-300 sm:text-lg md:mb-5 md:text-xl">
              Software developer focused on building efficient,
              user-friendly applications. Skilled in JavaScript, React, Node.js,
              PostgreSQL, and MongoDB. ᕙ(`▽´)ᕗ
            </p>
            <p className="mb-4 text-base leading-relaxed text-zinc-300 sm:text-lg md:mb-5 md:text-xl">
              I take my work seriously and approach every project with a sense of
              purpose and professionalism. Outside of coding, I like to unwind —
              and yes, the seal is my spirit animal 🦭.
            </p>
            <p className="text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
              Currently an SDE1 at{" "}
              <a
                href="https://convegenius.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono italic text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
              >
                ConveGenius
              </a>
              , previously a Technical Staff Intern at{" "}
              <a
                href="https://devrev.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono italic text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
              >
                DevRev
              </a>
              .
            </p>
          </div>

          <div className="mt-12 w-full max-w-2xl md:mt-20">
            <h2 className="mb-5 font-mono text-sm italic text-zinc-500 sm:text-base md:mb-7">
              // stack
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 sm:gap-y-6">
              {skills.map((skill) => (
                <li
                  key={skill.slug}
                  className="group flex items-center gap-3"
                  title={skill.name}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${skill.slug}/a1a1aa`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-5 w-5 opacity-70 transition group-hover:opacity-100 sm:h-6 sm:w-6"
                  />
                  <span className="font-mono text-sm text-zinc-400 transition-colors group-hover:text-white sm:text-base">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
