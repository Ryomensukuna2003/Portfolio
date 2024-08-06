import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex mx-44 justify-between items-center py-8 text-black">
      <div className="text-2xl font-bold ">SHIV</div>
      <ul className="flex space-x-6">
        {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-black">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;