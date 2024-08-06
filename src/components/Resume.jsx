import React from 'react';
import { Layout } from 'lucide-react';

const ResumeItem = ({ year, title, subtitle }) => (
  <div className="flex items-start mb-8">
    <div className="bg-black p-2 rounded-lg shadow-md mr-4">
      <Layout size={24} />
    </div>
    <div>
      <p className="text-sm text-black">{year}</p>
      <h3 className="text-xl text-black font-semibold mt-1">{title}</h3>
      <p className="text-black">{subtitle}</p>
    </div>
  </div>
);

const ResumeSection = () => {
  return (
    <div id='resume' className="bg-[#E6EAEE] py-16 px-4">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-center text-black mb-2">EDUCATION & EXPERIENCE</h2>
        <h1 className="text-center text-4xl text-black font-bold mb-12">Professional Resume</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-solid border-2 border-[#D0D3D7] px-4 pt-10">
          <div>
            <ResumeItem 
              year="Aug. 2021 - Present"
              title="Bachelor of Technology in Computer Science"
              subtitle="Lovely Professional University, Phagwara, Punjab"
            />
            <hr className="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-[#D0D3D7]" />
            <ResumeItem 
              year="April 2024 - Present"
              title="Chat-app Project"
              subtitle="Vite, React, Node.js, PostgreSQL, Sockets"
            />
            <hr className="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-[#D0D3D7]" />
            <ResumeItem 
              year="January 2024 - February 2024"
              title="URL Shortener API Project"
              subtitle="Node.js, MongoDB, Discord.js"
            />
          </div>
          <div>
            <ResumeItem 
              year="January 2023 - February 2023"
              title="Weather App Project"
              subtitle="React.js"
            />
            <hr className="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-[#D0D3D7]" />
            <ResumeItem 
              year="Ongoing"
              title="Programming Achievements"
              subtitle="HackerRank, Codeforces"
            />
            <hr className="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-[#D0D3D7]" />
            <ResumeItem 
              year="Ongoing"
              title="Technical Skills"
              subtitle="C/C++, SQL, JavaScript, React, Node.js"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;