import React, { useState,useEffect } from 'react'
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
import elearn from '../assets/elearn.png';
import snlgame from '../assets/snlgame.png';
import { Link } from 'react-scroll';
import contactlight from '../assets/contactlight.gif'
import gameapp from '../assets/gameapp.png'
import newswave from '../assets/newswave.png'


const skills = [
  { img: reactjs, imgtitle: "React JS" },
  { img: html, imgtitle: "HTML" },
  { img: css, imgtitle: "CSS" },
  { img: javascript, imgtitle: "Javascript" },
  { img: nodejs, imgtitle: "Node JS" },
  { img: java, imgtitle: "Java" },
  { img: tailwind, imgtitle: "Tailwind CSS" },
  { img: bootstrap, imgtitle: "Bootstrap" },
  { img: mongodb, imgtitle: "MongoDB" },
  { img: express, imgtitle: "Express" },
  { img: json, imgtitle: "JSON" },
  { img: redux, imgtitle: "Redux" },
];

const projects = [
  {
    id: 3,
    image: elearn,
    title: "Elearning Platform",
    description: "Elearning platform for students and teachers for learning together.",
    liveLink: "https://elearn-omega-three.vercel.app/",
    codeLink: "https://github.com/moarray28/elearn",
  },
  {
    id: 2,
    image: newswave,
    title: "Newswave - News Center",
    description: "A news website with unique features like news search and high-end user engagement.",
    liveLink: "https://newswave-eight.vercel.app/",
    codeLink: "https://github.com/moarray28/newswave",
  },
  {
    id: 1,
    image: notesapp,
    title: "Notes App",
    description: "A MERN stack notes app where one can save, check, and uncheck daily goals.",
    liveLink: "https://todoclient-g4au.onrender.com",
    codeLink: "https://github.com/moarray28/todolist",
  },
  {
    id: 4,
    image: snlgame,
    title: "Snakes & Ladder Game",
    description: "A traditional board game as a desktop application. It is created using Core Java.",
    liveLink: null, // No live link for this project
    codeLink: "https://github.com/moarray28/snlgame",
  },
  {
    id: 5,
    image: gameapp,
    title: "Game Listing App",
    description: "A Listing app where one can see daily updates on games and have information about it.",
    liveLink: "https://epicplay-moarray28s-projects.vercel.app/",
    codeLink: "https://github.com/moarray28/gamelisting",
  },
  {
    id: 6,
    image: weatherapp,
    title: "Weather App",
    description: "Photon is a web-based platform for having current and future weather reports.",
    liveLink: "https://github.com/moarray28/weatherapp/",
    codeLink: "https://github.com/moarray28/weatherapp/",
  },
];


export default function Content() {


  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [message,setMessage]=useState('');
  
  const [status, setStatus] = useState('');

  
  
  const backendurl= import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${backendurl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setStatus('Message sent Successfully');
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => {
        setStatus('');
      }, 2500);
    } else {
      setStatus('Failed to send message');
    }
  };

  const downloadResume = async () => {
    try {
      const response = await fetch(`${backendurl}/download/resume`);
      
      // Ensure the response is valid (status 200)
      if (!response.ok) {
        throw new Error('Failed to fetch the resume');
      }
  
      const blob = await response.blob(); // Convert the response to a Blob
  
      const link = document.createElement('a'); // Create an <a> element to trigger download
      const url = window.URL.createObjectURL(blob); // Create a URL for the Blob
      link.href = url;
      link.setAttribute('download', 'RiteshsResume.pdf'); // Set the filename
      document.body.appendChild(link);
      link.click(); // Trigger the click to download the file
      document.body.removeChild(link); // Clean up the DOM by removing the link
    } catch (error) {
      console.error('Error downloading the file:', error); // Log any errors
    }
  };
   






  const [transformStyle, setTransformStyle] = useState({
    transform: 'perspective(1500px) rotateX(0deg) rotateY(0deg)',
  });

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    // Calculate the mouse position relative to the element
    const offsetX = (clientX - left) / width;
    const offsetY = (clientY - top) / height;

    // Calculate rotation angles
    const rotateX = (offsetY - 0.5) * 20; // 20 degrees rotation based on Y position
    const rotateY = (offsetX - 0.5) * -20; // -20 degrees rotation based on X position

    // Update the transform style
    setTransformStyle({
      transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  useEffect(() => {
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
 
{/*   
<div className='flex flex-col mt-10  md:flex-row justify-center items-center space-x-4 m-4 p-3'>
  <div className="text-left text-xl md:text-4xl m-2 p-4 md:p-8 w-full md:w-1/2">
    <div className="text-lg md:text-2xl mb-3 tracking-wide opacity-90">
      Hey, I'm Ritesh More.
    </div>
    <div className="text-left md:text-3xl py-5">
      A passionate Frontend Developer specializing in creating intuitive and visually stunning user experiences.
      <br />
       
      <button className="bg-dark-gradient text-xl text-dark-text p-3 rounded-xl my-4 dark:bg-light-gradient dark:text-light-text w-full sm:w-auto">
  <Link to="contact" smooth={true} duration={600}> Get in touch </Link>
</button>

<button
  className="bg-dark-gradient mx-2 text-xl text-dark-text p-3 rounded-xl my-4 dark:bg-light-gradient dark:text-light-text w-full sm:w-auto"
  onClick={downloadResume}
>
  Get My Resume
</button>


    </div>
  </div>
  
  <div className='flex justify-center items-center w-full md:w-1/2'>
 
 <img src={profile} className="shake-vertical w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover shadow-lg rounded-full" alt="Profile Image" /> 
 </div> 
  
  
  </div>
  */}


<div className="flex flex-col mt-10 md:flex-row justify-center items-center space-x-4 m-4 p-3">
      <div className="text-left text-xl md:text-4xl m-2 p-4 md:p-8 w-full md:w-1/2">
        <div className="text-lg md:text-2xl mb-3 tracking-wide opacity-90">
          Hey, I'm Ritesh More.
        </div>
       
       {/* Text with typing animation */}
       <div className="text-left md:text-2xl py-5">
          
            <p>
              A  passionate Frontend Developer specializing in creating intuitive and visually stunning user experiences.
            </p>
          
          <br />
          <button className="bg-dark-gradient text-xl text-dark-text p-3 rounded-xl my-4 dark:bg-light-gradient dark:text-light-text w-full sm:w-auto">
            <Link to="contact" smooth={true} duration={600}> Get in touch </Link>
          </button>
          <button
            className="bg-dark-gradient mx-2 text-xl text-dark-text p-3 rounded-xl my-4 dark:bg-light-gradient dark:text-light-text w-full sm:w-auto"
            onClick={downloadResume}
          >
            Get My Resume
          </button>
        </div>
      </div>

      <div
        className="flex justify-center items-center p-4 w-full md:w-1/2 profile-hover-effect"
        onMouseMove={handleMouseMove} // Attach mousemove event to capture mouse position
      >
        <img
          src={profile}
          className="w-46 h-46 md:w-64 md:h-64 lg:w-80 cursor-pointer lg:h-80 rounded-full shadow-xl shadow-black"
          alt="Profile Image"
          style={transformStyle} // Apply the dynamic transform style
        />
      </div>
    </div>






























  {/* About Section */}
 {/* About Section */}
<section id="about">
  <div className='mx-auto mt-10 mb-10 p-5 h-auto'>
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
      {skills.map((skill, index) => (
          <Skills key={index} img={skill.img} imgtitle={skill.imgtitle} />
        ))}
       </div>
    </div>
  </div>
</section>

{/* Projects Section */}
{/* 
<section id="projects">
  <div className='m-5 mt-10 p-4 md:p-6 h-auto'>
    <h1 className='text-2xl md:text-3xl my-5 hover:tracking-widest hover:dark:text-emerald-50 hover:text-gray-700 ease-in-out duration-200 cursor-pointer'>Projects</h1>
    <div className='p-4 md:p-6 lg:p-12 text-base md:text-xl text-left text-dark-text dark:text-light-text rounded-xl'>
    {/* Add project content here 

    <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flex justify-center">
    <div className="max-w-xl min-w-60 bg-white border-2 border-gray-200 rounded-lg shadow:black shadow-lg dark:bg-slate-950 dark:border-gray-800">
        
        <div className="relative overflow-hidden rounded-t-lg h-48">
            <img className="absolute  cursor-pointer inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-125" src={notesapp} alt="Notes App" />
        </div>

        <div className="p-5">
            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Notes App</h5>
            <p className="mb-3 font-normal text-slate-900 dark:text-stone-300">
                A MERN stack notes app where one can save, check, and uncheck daily goals.
            </p>
            <a href="https://todoclient-g4au.onrender.com" target='_blank' className="inline-flex pulsate-bck text-white items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                See Live
            </a>
            <a href="https://github.com/moarray28/todolist" target='_blank' className="inline-flex text-white mx-2 items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                See Code
            </a>
        </div>
    </div>
</div>

            
        <div className="flex justify-center">
            <div className="max-w-xl min-w-60 bg-white border-2 border-gray-200 rounded-lg shadow:black shadow-lg dark:bg-slate-950 dark:border-gray-800">
                
        <div className="relative overflow-hidden rounded-t-lg h-48">
            <img className="absolute  cursor-pointer inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-125" src={gameapp} alt="Notes App" />
        </div>
        <div className="p-5">
                    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Game Listing App</h5>
                    <p className="mb-3 font-normal text-slate-900 dark:text-stone-300">
                        A Listing app where one can see daily updates on games and have information about it. 
                        
                    </p>
                    
                    <a href="https://epicplay-moarray28s-projects.vercel.app/" target='_blank' className="inline-flex pulsate-bck text-white items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                        See Live
                    </a>
                    <a href="https://github.com/moarray28/gamelisting" target='_blank' className="inline-flex text-white mx-2 items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                        See Code
                    </a>
                </div>
            </div>
            </div>



            
            
        <div className="flex justify-center">
            <div className="max-w-xl min-w-60 bg-white border-2 border-gray-200 rounded-lg shadow:black shadow-lg dark:bg-slate-950 dark:border-gray-800">
                
        <div className="relative overflow-hidden rounded-t-lg h-48">
            <img className="absolute  cursor-pointer inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-125" src={elearn} alt="Notes App" />
        </div>
        <div className="p-5">
                    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Elearning Platform</h5>
                    <p className="mb-3 font-normal text-slate-900 dark:text-stone-300">
                         Elearning platform for students and teachers. 
                        
                    </p>
                    
                    <a href="https://elearn-omega-three.vercel.app/" target='_blank' className="inline-flex pulsate-bck text-white items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                        See Live
                    </a>
                    <a href="https://github.com/moarray28/elearn" target='_blank' className="inline-flex text-white mx-2 items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                        See Code
                    </a>
                </div>
            </div>
            </div>



        <div className="flex justify-center">
            <div className="max-w-xl min-w-60 bg-white border-2 border-gray-200 rounded-lg shadow:black shadow-lg dark:bg-slate-950 dark:border-gray-800">
              
        <div className="relative overflow-hidden rounded-t-lg h-48">
            <img className="absolute inset-0 w-full h-full cursor-pointer object-cover transition-transform duration-300 ease-in-out transform hover:scale-125" src={weatherapp} alt="Notes App" />
        </div>
          <div className="p-5">
                    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Weather App</h5>
                    <p className="mb-3 font-normal text-slate-900 dark:text-stone-300">
                        Photon is a web-based platform for having current and future weather reports.
                    </p>
                    <a href="https://github.com/moarray28/weatherapp/" target='_blank' className="inline-flex text-white items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                        See Code
                    </a>
                </div>
                </div>
            </div>

            
            <div className="flex justify-center">
    <div className="max-w-xl min-w-60 bg-white border-2 border-gray-200 rounded-lg shadow:black shadow-lg dark:bg-slate-950 dark:border-gray-800">
       
    <div className="relative overflow-hidden rounded-t-lg h-48">
            <img className="absolute inset-0 w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125" src={snlgame} alt="Notes App" />
        </div>
         <div className="p-5"> 
            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Snakes & Ladder Game</h5>
            <p className="mb-3 font-normal text-slate-900 dark:text-stone-300">
                A traditional board game as a desktop application. <br />
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

  </div>
</section>


 */}



<section id="projects">
      <div className='m-5 mt-10 p-4 md:p-6 h-auto'>
        <h1 className='text-2xl md:text-3xl my-5 hover:tracking-widest hover:dark:text-emerald-50 hover:text-gray-700 ease-in-out duration-200 cursor-pointer'>
          Projects
        </h1>
        <div className='p-4 md:p-6 lg:p-12 text-base md:text-xl text-left text-dark-text dark:text-light-text rounded-xl'>
          <div className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="flex justify-center">
                  <div className="max-w-xl min-w-60 bg-white border-2 border-gray-200 rounded-lg shadow:black shadow-lg dark:bg-slate-950 dark:border-gray-800">
                    <div className="relative overflow-hidden rounded-t-lg h-48">
                      <img className="absolute cursor-pointer inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-125" src={project.image} alt={project.title} />
                    </div>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                      <p className="mb-3 font-normal text-slate-900 dark:text-stone-300">{project.description}</p>
                      {project.liveLink && (
                        <a href={project.liveLink} target='_blank' rel="noopener noreferrer" className="inline-flex pulsate-bck text-white items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                          See Live
                        </a>
                      )}
                      <a href={project.codeLink} target='_blank' rel="noopener noreferrer" className="inline-flex text-white mx-2 items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800">
                        See Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


<section id='contact'>

<span className='text-2xl md:text-3xl my-5 block hover:tracking-widest hover:dark:text-emerald-50 hover:text-gray-700 ease-in-out duration-200 cursor-pointer'>Contact Me</span>
   

<div className="w-full max-w-6xl p-6 bg-dark-gradient dark:bg-light-gradient rounded-xl shadow-2xl">
    <div className="flex flex-col md:flex-row">
 
      <div className="flex-1 p-4 flex justify-center items-center md:order-1">
        <img src={contactlight} alt="Loading GIF" className="w-2/3 rounded-full shadow-lg" />
      </div>
 
      <div className="flex-1 p-4 md:order-2 flex flex-col justify-center">
       
         <form className="flex flex-col space-y-4" onSubmit={handleSubmit} >
          <div >
            <input type="text" id="name"  value={name} onChange={(e)=>{setName(e.target.value)}} name="name" placeholder="Your Name" className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 sm:text-sm text-gray-900" required />
          </div>
          <div className="mb-4">
            <input type="email" id="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}   name="email" placeholder="Your Email" className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 sm:text-sm text-gray-900" required />
          </div>
          <div className="mb-4">
            <textarea id="description"   value={message} onChange={(e)=>{setMessage(e.target.value)}} name="description" rows="4" placeholder="Your Message" className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 sm:text-sm text-gray-900" required></textarea>
          </div>
          <button type="submit" className="w-full px-4 tracking-widest py-2 bg-light-gradient text-slate-950 dark:bg-dark-gradient dark:text-gray-200 font-semibold rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
            Send
          </button>

          <span className='font-semibold tracking-wider dark:text-gray-950 text-slate-50 '>
          {status && <p>{status}</p>}
            </span>
        </form>
      </div>
    </div>
  </div>


 </section>

   </>
  )
}
