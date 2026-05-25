import { Card } from "../components/ui/card";
import GridPattern from "../components/ui/grid";
import TextAnimate from "../components/ui/text-animate";
import { LinkPreview } from "../components/ui/link-preview";
import cfstats from "../assets/images/cfstats.png";
import chat_app from "../assets/images/Chat-app.png";
import nqueen from "../assets/images/n-queen.png";
import textsnap from "../assets/images/textsnap.png";
import vectordocs from "../assets/images/vectordocs.png";

const Work = () => {
  // Projects data array
  const projects = [
    {
      id: "00",
      title: "VectorDocs",
      type: "Fullstack",
      description:
        "A cloud-powered AI application that enables users to upload documents (PDF, DOCX, TXT), ask natural language questions, and receive context-aware answers. Built with Next.js, Node.js, and Azure backend. Features include semantic document indexing with Qdrant Cloud and AI-powered answers using Google's Gemini 2.5 Flash model through LangChain's RAG pipeline.",
      projectUrl: "https://vectordocs.vercel.app/",
      imageSrc: vectordocs,
    },
    {
      id: "01",
      title: ".env Scraper",
      type: "Backend",
      description:
        "A Node.js application that continuously monitors GitHub repositories for exposed API keys and sensitive information—even within commit histories. The service uses regex-based scanning and commit diff analysis to catch potential leaks, and securely logs any findings to a database. Designed for reliability, it connects to a database, authenticates using a GitHub Personal Access Token for higher rate limits, and runs automatically every 5 minutes for ongoing protection.",
      projectUrl: "https://github.com/Ryomensukuna2003/API_SCRAPER",
      // imageSrc: env_scraper,
    },
    {
      id: "02",
      title: "CF-Stats",
      type: "Frontend",
      description:
      "A comprehensive Codeforces Visualizer that provides detailed insights and statistics for competitive programmers. Features include user profile metrics, submission analytics, problem rating visualizations, performance graphs, and AI-powered personalized insights via Gemini API.",
      projectUrl: "https://cfstats.vercel.app",
      imageSrc: cfstats,
    },
    {
      id: "03",
      title: "Text-Share",
      type: "Fullstack",
      description:
        "A web application designed to facilitate the sharing of text and code snippets. Features include a simple intuitive interface with React.js frontend and Node.js backend powered by PostgreSQL. The application uses custom PostgreSQL triggers for automatic snippet cleanup and is containerized with Docker for seamless deployment on Azure.",
      projectUrl: "https://textsnap.vercel.app/",
      imageSrc: textsnap,
    },
    {
      id: "04",
      title: "Chat-App",
      type: "Fullstack",
      description:
        "A real-time chat application built using Vite, React, Node.js, PostgreSQL, JWT authentication, and Socket.IO. Features include real-time messaging, private conversations, secure user authentication, and a responsive interface using Shadcn UI. The app demonstrates full-stack development with modern web technologies focusing on real-time communication capabilities.",
      projectUrl: "https://github.com/Ryomensukuna2003/Chat-app",
      imageSrc: chat_app,
    },
    {
      id: "05",
      title: "WebRTC",
      type: "Fullstack",
      description:
        "A real-time video communication application built using WebRTC technology. Leverages Node.js, Express.js, and Socket.IO on the backend with React, Vite, PeerJS, and shadcn UI on the frontend. Features include room creation using Socket.IO, peer-to-peer connection via WebRTC, real-time communication between users, and a modern responsive interface.",
      projectUrl: "https://github.com/Ryomensukuna2003/Chat-app",
    },
    {
      id: "06",
      title: "N-Queen Visualizer",
      type: "Algorithmic",
      description:
        "An interactive visualization tool for the classic N-Queens problem implemented in C++. Features include animated backtracking algorithm demonstration, dynamic board visualization with colored chess pieces, adjustable simulation speed, solution counting, and performance metrics tracking. The project showcases algorithmic problem-solving skills and computational complexity visualization.",
      projectUrl: "https://github.com/Ryomensukuna2003/N-queen",
      imageSrc: nqueen,
    },
  ];

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden bg-black">
      <div className="bg-black text-white grid grid-cols-12 relative min-h-full">
        <GridPattern
          strokeDasharray="2"
          width={100}
          height={200}
          className="w-full h-full"
        />

        <div className="col-span-12 fade-style flex flex-col justify-center p-4 sm:p-8 md:p-16 z-10">
          <TextAnimate
            text="WORK"
            className="text-6xl sm:text-9xl"
            type="shiftInUp"
          />

          {/* Render projects dynamically from array */}
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-transparent -space-y-14 text-white border-none p-4 sm:pt-8 max-w-2xl"
            >
              <div className="text-6xl sm:text-7xl text-zinc-800 font-mono">
                {project.id}
              </div>
              <div className="pl-8 sm:pl-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl">
                    {project.title}
                  </h2>
                  <p className="text-base sm:text-lg">
                    <span className="text-zinc-400">{project.type}</span> —{" "}
                    {project.description}
                  </p>
                </div>
                {project.imageSrc ? (
                  <LinkPreview
                    url={project.projectUrl}
                    imageSrc={project.imageSrc}
                    isStatic
                    className="inline-block text-white border-b-2 border-white hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                  >
                    view project
                  </LinkPreview>
                ) : (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white border-b-2 border-white hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                  >
                    view project
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Work;
