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
    <div className="h-full no-scrollbar overflow-y-auto bg-black">
      <div className="bg-black text-white grid grid-cols-12 relative min-h-full">
        <GridPattern strokeDasharray="2" width={100} height={200} />

        <div className="col-span-12 flex flex-col  p-4 sm:p-6 md:p-12 lg:p-16 z-10">
          <TextAnimate
            text="ABOUT"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center md:text-left"
            type="shiftInUp"
          />
          <div className="mt-4 md:mt-8 text-center md:text-left fade-style max-w-4xl mx-auto md:mx-0">
            <p className="text-base sm:text-lg md:text-lg lg:text-xl mb-3 md:mb-4">
            Computer Science student focused on building efficient, user-friendly applications. Skilled in JavaScript, React, Node.js, PostgreSQL, and MongoDB. ᕙ(`▽´)ᕗ
            </p>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl mb-3 md:mb-4">
              I take my work seriously and approach every project with a sense
              of purpose and professionalism. Outside of coding, I like to
              unwind — and yes, the seal is my spirit animal 🦭.
            </p>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl mb-3 md:mb-4">
              Currently working as a Technical Staff Intern at{" "}
              <a
                href="https://devrev.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-slate-300 underline font-mono italic break-words hover:text-white transition-colors">
                   DevRev
                </span>
              </a>
            </p>
          </div>

          <div className="mt-10 md:mt-16 max-w-4xl mx-auto md:mx-0 w-full">
            <h3 className="font-mono italic text-zinc-400 text-sm sm:text-base mb-4 md:mb-6">
              // stack
            </h3>
            <ul className="flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-8">
              {skills.map((skill) => (
                <li
                  key={skill.slug}
                  className="group flex items-center gap-3"
                  title={skill.name}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${skill.slug}/ffffff`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-5 h-5 sm:w-6 sm:h-6 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="font-mono text-sm sm:text-base text-zinc-400 group-hover:text-white transition-colors">
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
