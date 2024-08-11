import React from 'react'
import profile from '../assets/profile.png';
import reactjs from '../assets/react.svg';
import nodejs from '../assets/nodejs.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import javascript from '../assets/javascript.svg';
import java from '../assets/java.svg';
import bootstrap from '../assets/bootstrap.svg';
import tailwind from '../assets/tailwind.svg';
import express from '../assets/express.svg';
import mongodb from '../assets/mongodb.svg';
import redux from '../assets/redux.svg';
import json from '../assets/json.svg';
import weatherapp from '../assets/weatherapp.png';
import notesapp from '../assets/notesapp.png';
import Skills from './Skills';
import snlgame from '../assets/snlgame.png';
import { Link } from 'react-scroll';






export default function Content() {


  
  


  return (
    <>

    <div className='space-x-4'>  
<div className="flex flex-col justify-center mt-6 md:flex-row m-4 p-3">
  <div className="text-left text-xl md:text-4xl m-2 p-4 md:p-8 w-full md:w-1/2 h-auto md:h-screen">
    <div className="text-lg md:text-2xl mb-3 tracking-wide opacity-90">
      Hey,I'm Ritesh More.

      
    </div>
    <div className="text-left  md:text-3xl py-5 md:my-5">
      A passionate Frontend Developer specializing in creating intuitive and visually stunning user experiences.
      <br />
      <button className='bg-dark-gradient text-xl text-dark-text p-3 rounded-xl my-4 dark:bg-light-gradient dark:text-light-text'>Get in touch</button>
    </div>
  </div>
  
  <div className='  '>   
    
 
  

  
  <div className='flex m-4 justify-center items-center'>
  <img 
    src={profile} 
    className='w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover shadow-black shadow-2xl dark:shadow-stone-700 rounded-full' 
    alt="" 
  />
</div>

 
 
 
</div>
 
</div>  


</div>



  {/* About Section */}
 {/* About Section */}
<section id="about">
  <div className='mx-auto mb-10 p-5 h-auto'>
    <span className='text-2xl md:text-3xl my-5 block hover:tracking-widest hover:dark:text-emerald-50 hover:text-gray-700 ease-in-out duration-200 cursor-pointer'>About Me</span>
    <div className='grid grid-cols-1 gap-5 rounded-2xl text-light-text dark:text-dark-text bg-dark-gradient dark:bg-light-gradient p-5 md:p-8'>
      <div className='bg-slate-950 text-base md:text-xl text-left w-full text-amber-50 rounded-lg p-5 md:p-7 px-5 md:px-10'>
        <span className='text-yellow-400'>let </span>
        <span className='text-orange-400'>profile </span>
        = &nbsp; <span className='text-yellow-400'>&#123; </span> <br />
        &nbsp; &nbsp; &nbsp; <span className='text-green-400'>name </span>:
        <span className='text-teal-200'>"Ritesh Ravindra More" </span>
        <span className='text-yellow-400'>, </span> <br />
        &nbsp; &nbsp; &nbsp; <span className='text-green-400'>job </span>:
        <span className='text-teal-200'>"Front End Developer" </span>
        <span className='text-yellow-400'>, </span> <br />
        &nbsp; &nbsp; &nbsp; <span className='text-green-400'>education </span>:
        <span className='text-teal-200'>"Bsc IT" </span>
        <span className='text-yellow-400'>, </span> <br />
        &nbsp; &nbsp; &nbsp; <span className='text-green-400'>location </span>:
        <span className='text-teal-200'>"Mumbai" </span>
        <span className='text-yellow-400'> <br />&#125; </span>
      </div>
      <div className='text-base md:text-2xl p-5 md:p-7 rounded-lg text-left dark:text-light-text text-dark-text'>
        Hi, I'm Ritesh Ravindra More, a passionate Frontend Developer with a knack for crafting dynamic and user-friendly web experiences. With a solid foundation in JavaScript and a keen eye for detail, I specialize in building intuitive interfaces and robust applications.
      </div>
    </div>
  </div>
</section>

{/* Skills Section */}
<section id="skills" className='pt-10 md:pt-20'>
  <div className='m-5 mt-10'>
    <h1 className='text-2xl md:text-3xl my-5 hover:tracking-widest hover:dark:text-emerald-50 hover:text-gray-700 ease-in-out duration-200 cursor-pointer'>Skills</h1>
    <div className='p-4 md:p-6 lg:p-12 text-base md:text-xl text-left text-dark-text dark:text-light-text rounded-xl'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6'>
        <Skills img={reactjs} imgtitle="React JS"/>
        <Skills img={html} imgtitle="HTML"/>
        <Skills img={css} imgtitle="CSS"/>
        <Skills img={javascript} imgtitle="Javascript"/>
        <Skills img={nodejs} imgtitle="Node JS"/>
        <Skills img={java} imgtitle="Java"/>
        <Skills img={tailwind} imgtitle="Tailwind CSS"/>
        <Skills img={bootstrap} imgtitle="Bootstrap"/>
        <Skills img={mongodb} imgtitle="MongoDB"/>
        <Skills img={express} imgtitle="Express"/>
        <Skills img={json} imgtitle="JSON"/>
     
        <Skills img={redux} imgtitle="Redux"/>
       </div>
    </div>
  </div>
</section>

{/* Projects Section */}
<section id="projects">
  <div className='m-5 mt-10 p-4 md:p-6 h-auto'>
    <h1 className='text-2xl md:text-3xl my-5 hover:tracking-widest hover:dark:text-emerald-50 hover:text-gray-700 ease-in-out duration-200 cursor-pointer'>Projects</h1>
    <div className='p-4 md:p-6 lg:p-12 text-base md:text-xl text-left text-dark-text dark:text-light-text rounded-xl'>
      {/* Add project content here */}

      

     
     <div class="p-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
         <div class="max-w-sm bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-slate-950 dark:border-gray-800">
            <img class="rounded-t-lg w-full h-48 object-cover" src={weatherapp} alt="Weather App" />
            <div class="p-5">
                <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Weather App</h5>
                <p class="mb-3 font-normal text-slate-900 dark:text-stone-300">
                    Photon is a web-based platform for having current and future weather reports.
                </p>
                <a href="https://github.com/moarray28/weatherapp" target='_blank' className="inline-flex text-white items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                    See Code
                </a>
            </div>
        </div>
   
        <div class="max-w-sm bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-slate-950 dark:border-gray-800">
            <img class="rounded-t-lg w-full h-48 object-cover" src={notesapp} alt="Weather App" />
            <div class="p-5">
                <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Notes App</h5>
                <p class="mb-3 font-normal text-slate-900 dark:text-stone-300">
                     A notes app where one can save daily notes and check and uncheck daily goals.
                     </p>
                <a href="https://github.com/moarray28/notesapp" target='_blank' className="inline-flex text-white items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                    See Code
                </a>
            </div>
        </div>
     
        <div class="max-w-sm bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-slate-950 dark:border-gray-800">
            <img class="rounded-t-lg w-full h-48 object-cover" src={snlgame} alt="Weather App" />
            <div class="p-5">
                <h5 class="mb-2 text-2xl   tracking-tight text-gray-900 dark:text-white">Snakes & Ladder Game</h5>
                <p class="mb-3 font-normal text-slate-900 dark:text-stone-300">
                    A traditional board game as desktop application . <br />
                    It is created using Core Java
                     </p>
                <a href="https://github.com/moarray28/snlgame" target='_blank' className="inline-flex text-white items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                    See Code
                </a>
            </div>
        </div>
    </div>
</div>




       </div>
  </div>
</section>

   </>
  )
}
