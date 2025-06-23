import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import '/src/index.css';

export default function Navbar() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : prefersDarkMode;
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/45 dark:bg-slate-900/45 backdrop-blur-md shadow-md">
      {/* Edge-to-edge full width container */}
      <div className="w-full">
        <nav className="flex justify-between items-center w-full py-4 px-0">
          {/* Logo */}
          <span className="text-2xl font-bold pl-4 md:pl-6 cursor-pointer hover:tracking-wider hover:scale-110 transition-all duration-300 text-gray-800 dark:text-white">
            
             <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-rose-500 dark:hover:text-rose-300 transition">moarray</Link>
           
          </span>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center text-sm font-medium text-gray-800 dark:text-gray-200 pr-4 md:pr-6">
            <li><Link to="about" smooth duration={500} className="cursor-pointer hover:text-rose-500 dark:hover:text-rose-300 transition">About Me</Link></li>
            <li><Link to="skills" smooth duration={600} className="cursor-pointer hover:text-rose-500 dark:hover:text-rose-300 transition">Skills</Link></li>
            <li><Link to="projects" smooth duration={700} className="cursor-pointer hover:text-rose-500 dark:hover:text-rose-300 transition">Projects</Link></li>
            <li><Link to="contact" smooth duration={800} className="cursor-pointer hover:text-rose-500 dark:hover:text-rose-300 transition">Contact</Link></li>
            <li>
              <button
                onClick={toggleDarkMode}
                className="text-xl hover:text-yellow-400 dark:hover:text-pink-300 transition"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200 pr-4 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col space-y-4 text-gray-800 dark:text-gray-200 font-medium">
              <li><Link to="about" smooth duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-rose-500 dark:hover:text-rose-300 transition">About Me</Link></li>
              <li><Link to="skills" smooth duration={600} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-rose-500 dark:hover:text-rose-300 transition">Skills</Link></li>
              <li><Link to="projects" smooth duration={700} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-rose-500 dark:hover:text-rose-300 transition">Projects</Link></li>
              <li><Link to="contact" smooth duration={800} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-rose-500 dark:hover:text-rose-300 transition">Contact</Link></li>
              <li>
                <button
                  onClick={() => {
                    toggleDarkMode();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 text-xl hover:text-yellow-400 dark:hover:text-pink-300 transition"
                >
                  {isDarkMode ? <FaMoon /> : <FaSun />} {isDarkMode ? 'Dark' : 'Light'} Mode
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
