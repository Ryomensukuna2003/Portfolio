import React from 'react';
import Link_icons from './Link_Icons';
import { VscArrowCircleDown } from "react-icons/vsc";

const About = () => {
    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/1iFzt_0hNEcEb_y0IIjWeAK4vUQTCVYzT/view?usp=drive_link", "_blank");
    };

    return (
        <div className="flex flex-col md:flex-row mx-4 md:mx-44 items-center py-20 px-6 text-black gap-10">
            <div className="w-full md:w-1/3 border-solid border-2 rounded-lg p-10">
                <img
                    src="src/assets/Profile.jpeg"
                    alt="Shivanshu Mishra"
                    className="rounded-lg"
                />
                <p className="flex justify-center text-2xl pt-5">Shivanshu Mishra</p>
                <Link_icons />
            </div>
            <div className="w-full md:w-2/3 pl-10">
                <h2 className="text-4xl md:text-6xl font-medium mb-4">
                    Hello, I'm Shivanshu Mishra,
                    <br />
                    A passionate Full Stack Developer.
                </h2>
                <br />
                <button className="flex bg-black text-white gap-3 py-5 rounded-[0]" onClick={handleDownload}>
                    Download CV
                    <VscArrowCircleDown />
                </button>
            </div>
        </div>
    );
};

export default About;
