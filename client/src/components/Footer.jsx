import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="w-full text-gray-950 dark:text-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* Top content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* About / Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold tracking-wide">
              Passionate about learning, building and breaking code.
            </h3>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-5 text-2xl md:text-3xl">
            <a
              href="https://github.com/moarray28"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:scale-110 transform transition duration-300 hover:text-gray-900 dark:hover:text-teal-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ritesh-more-85ba46248/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transform transition duration-300 hover:text-gray-900 dark:hover:text-teal-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/moarray/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transform transition duration-300 hover:text-gray-900 dark:hover:text-teal-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://leetcode.com/u/morray28/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="hover:scale-110 transform transition duration-300 hover:text-gray-900 dark:hover:text-teal-300"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 text-sm text-center  dark:text-teal-50">
          © {new Date().getFullYear()} Ritesh More. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
