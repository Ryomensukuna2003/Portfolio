import GridPattern from "../components/ui/grid";
import TextAnimate from "../components/ui/text-animate";
import { LinkPreview } from "../components/ui/link-preview";
import { ArrowUpRight } from "lucide-react";
import cfstats from "../assets/images/cfstats.png";
import chat_app from "../assets/images/Chat-app.png";
import nqueen from "../assets/images/n-queen.png";
import textsnap from "../assets/images/textsnap.png";
import vectordocs from "../assets/images/vectordocs.png";

const projects = [
  {
    title: "VectorDocs",
    type: "Fullstack",
    description:
      "A cloud-powered AI application that enables users to upload documents (PDF, DOCX, TXT), ask natural language questions, and receive context-aware answers. Built with Next.js, Node.js, and Azure backend. Features include semantic document indexing with Qdrant Cloud and AI-powered answers using Google's Gemini 2.5 Flash model through LangChain's RAG pipeline.",
    projectUrl: "https://vectordocs.vercel.app/",
    imageSrc: vectordocs,
  },
  {
    title: ".env Scraper",
    type: "Backend",
    description:
      "A Node.js application that continuously monitors GitHub repositories for exposed API keys and sensitive information—even within commit histories. The service uses regex-based scanning and commit diff analysis to catch potential leaks, and securely logs any findings to a database. It authenticates using a GitHub Personal Access Token for higher rate limits, and runs automatically every 5 minutes for ongoing protection.",
    projectUrl: "https://github.com/Ryomensukuna2003/API_SCRAPER",
  },
  {
    title: "CF-Stats",
    type: "Frontend",
    description:
      "A comprehensive Codeforces Visualizer that provides detailed insights and statistics for competitive programmers. Features include user profile metrics, submission analytics, problem rating visualizations, performance graphs, and AI-powered personalized insights via Gemini API.",
    projectUrl: "https://cfstats.vercel.app",
    imageSrc: cfstats,
  },
  {
    title: "Text-Share",
    type: "Fullstack",
    description:
      "A web application designed to facilitate the sharing of text and code snippets. Features include a simple intuitive interface with a React.js frontend and a Node.js backend powered by PostgreSQL. The app uses custom PostgreSQL triggers for automatic snippet cleanup and is containerized with Docker for seamless deployment on Azure.",
    projectUrl: "https://textsnap.vercel.app/",
    imageSrc: textsnap,
  },
  {
    title: "Chat-App",
    type: "Fullstack",
    description:
      "A real-time chat application built using Vite, React, Node.js, PostgreSQL, JWT authentication, and Socket.IO. Features include real-time messaging, private conversations, secure user authentication, and a responsive interface using Shadcn UI. The app demonstrates full-stack development with modern web technologies focused on real-time communication.",
    projectUrl: "https://github.com/Ryomensukuna2003/Chat-app",
    imageSrc: chat_app,
  },
  {
    title: "N-Queen Visualizer",
    type: "Algorithmic",
    description:
      "An interactive visualization tool for the classic N-Queens problem implemented in C++. Features include animated backtracking demonstration, dynamic board visualization with colored chess pieces, adjustable simulation speed, solution counting, and performance metrics tracking. The project showcases algorithmic problem-solving and computational complexity visualization.",
    projectUrl: "https://github.com/Ryomensukuna2003/N-queen",
    imageSrc: nqueen,
  },
];

const isRepo = (url) => url.includes("github.com");

const Work = () => {
  return (
    <div className="no-scrollbar h-full overflow-y-auto bg-black">
      <div className="relative grid min-h-full grid-cols-12 bg-black text-white">
        <GridPattern strokeDasharray="2" width={100} height={200} />

        <div className="fade-style z-10 col-span-12 flex flex-col p-4 sm:p-8 md:p-16">
          <TextAnimate
            text="WORK"
            as="h1"
            className="text-6xl leading-[0.95] sm:text-8xl md:text-9xl"
            type="shiftInUp"
          />

          <ol className="mt-10 flex max-w-2xl flex-col gap-y-16 md:mt-16 md:gap-y-24">
            {projects.map((project, i) => {
              const num = String(i).padStart(2, "0");
              const repo = isRepo(project.projectUrl);
              const linkLabel = repo ? "view code" : "view live";
              return (
                <li key={project.title} className="relative">
                  {/* ghost index watermark — sits behind the title */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 -left-1 select-none font-mono text-7xl font-bold text-white/[0.05] sm:text-8xl md:-top-14 md:text-9xl"
                  >
                    {num}
                  </span>

                  <div className="relative">
                    <div className="flex items-baseline gap-3">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl">
                        {project.title}
                      </h2>
                    </div>
                    <p className="mt-1.5 font-mono text-xs uppercase tracking-widest text-signal sm:text-sm">
                      {project.type}
                    </p>
                    <p className="mt-3 max-w-prose text-base leading-relaxed text-zinc-400 sm:text-lg">
                      {project.description}
                    </p>

                    <div className="mt-5">
                      {project.imageSrc ? (
                        <LinkPreview
                          url={project.projectUrl}
                          imageSrc={project.imageSrc}
                          isStatic
                          className="group inline-flex items-center gap-1 border-b-2 border-white pb-0.5 text-white transition-colors hover:border-signal hover:text-signal"
                        >
                          {linkLabel}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </LinkPreview>
                      ) : (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 border-b-2 border-white pb-0.5 text-white transition-colors hover:border-signal hover:text-signal"
                        >
                          {linkLabel}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Work;
