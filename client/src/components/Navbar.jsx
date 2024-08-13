import React from 'react'
import { useState,useEffect} from 'react';
import '/src/index.css'; 
import { Link } from 'react-scroll';

export default function Navbar() {
  
  /*const [isDarkMode, setIsDarkMode] = useState(() =>
    document.body.classList.contains('dark')
  );

  useEffect(() => {
    // Apply the dark mode class to the body
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
*/
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial state based on system preference or local storage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve from local storage if previously set
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : prefersDarkMode;
  });

  // Update body class and local storage when isDarkMode changes
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {/***       <nav className="border-gray-200  rounded-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="text-3xl hover:tracking-widest hover:dark:text-emerald-50 hover:text-gray-700 ease-in-out duration-200 cursor-pointer">Ritesh More</span>

       
      
      

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm   rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
           
           
            <li>
              <Link
                href="#"
                className="block py-2 px-3  rounded md:bg-transparent hover:-translate-y-2 ease-in-out duration-300 hover:dark:text-teal-50  "
                aria-current="page"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block py-2 px-3  rounded md:bg-transparent hover:-translate-y-2 ease-in-out duration-300 hover:dark:text-teal-50  "
                aria-current="page"
              >
                About Me
              </Link>


              
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3  rounded md:bg-transparent hover:-translate-y-2 ease-in-out duration-300 hover:dark:text-teal-50  "
                aria-current="page"
              >
                Contact Me
              </Link>
            </li>


            <li>
            
            

      
            <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer"    onClick={toggleDarkMode}
            //  console.log(isDarkMode);
            />
            <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-10 rounded-full peer bg-slate-950  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-rose-800 after:dark:bg-pink-50 after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
            <span className="m-2 text-sm font-medium">{isDarkMode ? "Dark " : "Light " }Mode</span>
          </label>
     


     
        </li>
            
                      </ul>
        </div>
      </div>
    </nav>
     */}

     <div className=" overflow-y-auto sticky">
     <nav className="border-gray-200 rounded-xl sticky top-0 z-50  shadow-md">
       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         <span className="text-3xl hover:tracking-widest hover:scale-125 hover:dark:text-emerald-50 hover:text-gray-700 ease-in-out duration-200 cursor-pointer">
           moarray
         </span>
 
         <button
           onClick={toggleMenu}
           type="button"
           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
           aria-controls="navbar-default"
           aria-expanded={isOpen}
         >
           <span className="sr-only">Open main menu</span>
           <svg
             className="w-5 h-5"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 17 14"
           >
             <path
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M1 1h15M1 7h15M1 13h15"
             />
           </svg>
         </button>
 
         <div
           className={`${
             isOpen ? 'block' : 'hidden'
           } w-full md:block md:w-auto`}
           id="navbar-default"
         >
           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
             
             
           <li>
               <Link
               to="about" smooth={true} duration={500}
                 className="block py-2 px-3 rounded cursor-pointer md:bg-transparent hover:-translate-y-2 ease-in-out duration-300 hover:dark:text-teal-50"
                 aria-current="page"
               >
                 About Me
               </Link>
             </li>
             
             <li>
               <Link
                  to="skills" smooth={true} duration={600}
                 className="block py-2 px-3 rounded cursor-pointer md:bg-transparent hover:-translate-y-2 ease-in-out duration-300 hover:dark:text-teal-50"
                 aria-current="page"
               >
                 Skills
               </Link>
             </li>
 

 
             <li>
               <Link

to="projects" smooth={true} duration={700}
                 className="block py-2 px-3 rounded  cursor-pointer md:bg-transparent hover:-translate-y-2 ease-in-out duration-300 hover:dark:text-teal-50"
                 aria-current="page"
               >
                 Projects
               </Link>
             </li>
 
             <li>
               <label className="inline-flex items-center cursor-pointer">
                 <input type="checkbox" className="sr-only peer" onClick={toggleDarkMode} />
                 <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-10 rounded-full peer bg-slate-950 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-rose-800 after:dark:bg-pink-50 after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                 <span className="m-2 text-sm font-medium">{isDarkMode ? "Dark " : "Light "}Mode</span>
               </label>
             </li>
           </ul>
         </div>
       </div>
     </nav>
 
     </div>
     </>
  )
}
