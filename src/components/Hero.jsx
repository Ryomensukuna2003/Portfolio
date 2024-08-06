import React from 'react';

const Hero = () => {
    const text = "I'm Shivanshu Mishra";
    return (
        <div id='hero' className="flex-col mx-4 md:mx-44 bg-[#E6EAEE] py-20 md:py-40 px-4 md:px-6 flex items-center justify-center hover:rounded-[20px] rounded-lg text-center">
            <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-6xl font-bold mb-5">I'm Shivanshu Mishra</h1>

            <div className="flex flex-wrap justify-center mb-4 md:mb-8">
                {['CSE Student', 'Competitive Programming', 'Frontend Developer'].map((role) => (
                    <span
                        key={role}
                        className="bg-white px-4 py-2 rounded text-sm md:text-base text-black mb-2 md:mb-0 mr-2 md:mr-4"
                    >
                        {role}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Hero;