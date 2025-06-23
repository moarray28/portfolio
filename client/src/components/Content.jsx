import React, { useState, useEffect } from "react";
import profile from "../assets/profile.png";
import reactjs from "../assets/react.svg";
import nodejs from "../assets/nodejs.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import java from "../assets/java.svg";
import bootstrap from "../assets/bootstrap.svg";
import tailwind from "../assets/tailwind.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import redux from "../assets/redux.svg";
import json from "../assets/json.svg";
import weatherapp from "../assets/weatherapp.png";
import notesapp from "../assets/notesapp.png";
import Skills from "./Skills";
import elearn from "../assets/elearn.png";
import snlgame from "../assets/snlgame.png";
import { Link } from "react-scroll";
import contactlight from "../assets/contactlight.gif";
import gameapp from "../assets/gameapp.png";
import Navbar from "./Navbar";
import newswave from "../assets/newswave.png";
import { motion } from "framer-motion";
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
    description:
      "Elearning platform for students and teachers for learning together.",
    liveLink: "https://elearn-omega-three.vercel.app/",
    codeLink: "https://github.com/moarray28/elearn",
  },
  {
    id: 2,
    image: newswave,
    title: "Newswave - News Center",
    description:
      "A news website with unique features like news search and high-end user engagement.",
    liveLink: "https://newswave-eight.vercel.app/",
    codeLink: "https://github.com/moarray28/newswave",
  },
  {
    id: 1,
    image: notesapp,
    title: "Notes App",
    description:
      "A MERN stack notes app where one can save, check, and uncheck daily goals.",
    liveLink: "https://todoclient-g4au.onrender.com",
    codeLink: "https://github.com/moarray28/todolist",
  },
  {
    id: 4,
    image: snlgame,
    title: "Snakes & Ladder Game",
    description:
      "A traditional board game as a desktop application. It is created using Core Java.",
    liveLink: null, // No live link for this project
    codeLink: "https://github.com/moarray28/snlgame",
  },
  {
    id: 5,
    image: gameapp,
    title: "Game Listing App",
    description:
      "A Listing app where one can see daily updates on games and have information about it.",
    liveLink: "https://epicplay-moarray28s-projects.vercel.app/",
    codeLink: "https://github.com/moarray28/gamelisting",
  },
  {
    id: 6,
    image: weatherapp,
    title: "Weather App",
    description:
      "Photon is a web-based platform for having current and future weather reports.",
    liveLink: "https://github.com/moarray28/weatherapp/",
    codeLink: "https://github.com/moarray28/weatherapp/",
  },
];

export default function Content() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusType, setStatusType] = useState("success"); // "success

  const [status, setStatus] = useState("");

  const backendurl = import.meta.env.VITE_BACKEND_URL;
   const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation
  if (!name.trim() || !email.trim() || !message.trim()) {
    setStatus("❌ Please fill in all fields.");
    setStatusType("error");
    return;
  }

  setLoading(true);
  try {
    const response = await fetch(`${backendurl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    setLoading(false);
    if (response.ok) {
      setStatus("✅ Message sent successfully!");
      setStatusType("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      throw new Error("Server error");
    }
  } catch (err) {
    setLoading(false);
    setStatus("❌ Failed to send message. Please try again.");
    setStatusType("error");
  }

  // Hide status after 2.5 seconds
  setTimeout(() => {
    setStatus("");
  }, 2500);
};

  const downloadResume = async () => {
    try {
      const response = await fetch(`${backendurl}/download/resume`);

      // Ensure the response is valid (status 200)
      if (!response.ok) {
        throw new Error("Failed to fetch the resume");
      }

      const blob = await response.blob(); // Convert the response to a Blob

      const link = document.createElement("a"); // Create an <a> element to trigger download
      const url = window.URL.createObjectURL(blob); // Create a URL for the Blob
      link.href = url;
      link.setAttribute("download", "RiteshsResume.pdf"); // Set the filename
      document.body.appendChild(link);
      link.click(); // Trigger the click to download the file
      document.body.removeChild(link); // Clean up the DOM by removing the link
    } catch (error) {
      console.error("Error downloading the file:", error); // Log any errors
    }
  };

  const [transformStyle, setTransformStyle] = useState({
    transform: "perspective(1500px) rotateX(0deg) rotateY(0deg)",
  });

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const {
      left,
      top,
      width,
      height,
    } = e.currentTarget.getBoundingClientRect();

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
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
  
    <section id="hero" className=""> 
      <div className="flex flex-col-reverse md:flex-row items-center my-5 justify-center gap-8 px-4 py-12 md:px-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold text-light-text dark:text-dark-text mb-4">
            Hey, I'm Ritesh More.
          </h2>
          <p className="text-lg md:text-xl text-light-text dark:text-dark-text opacity-90 leading-relaxed">
            A passionate Frontend Developer specializing in creating intuitive
            and visually stunning user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Link
              to="contact"
              smooth={true}
              duration={600}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-dark-gradient text-dark-text dark:bg-light-gradient dark:text-light-text font-medium hover:scale-105 transition-transform shadow-md"
            >
              Get in touch
            </Link>

            <button
              onClick={downloadResume}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-dark-gradient text-dark-text dark:bg-light-gradient dark:text-light-text font-medium hover:scale-105 transition-transform shadow-md"
            >
              Get My Resume
            </button>
          </div>
        </div>

        {/* Profile Image (unchanged animation logic) */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center"
          onMouseMove={handleMouseMove}
        >
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer"
            style={transformStyle}
          />
        </div>
      </div>
      </section>

      <section id="about" className="w-full py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-light-text dark:text-dark-text hover:tracking-widest transition-all duration-300">
            About Me
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Panel - Description with Editor Style */}
            <div className="relative rounded-xl overflow-hidden  border-2 dark:border-[#4c0519] transition-all duration-900 bg-gradient-to-br  from-[#f2e4ec] via-[#dbc3cc] to-[#c3a3af]  dark:to-[#4c0519] dark:from-[#c01048]">
              {/* Fake window bar */}
              <div className="flex items-center justify-start space-x-2 px-4 py-2 dark:bg-[#e0d3d8] bg-[#2d0e16]">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <div className="p-6 md:p-8 text-left dark:text-dark-text text-light-text text-base md:text-lg leading-relaxed h-full">
  <p>
    Hi, I'm <span className="font-semibold">Ritesh Ravindra More</span> from Mumbai, India. A developer passionate about building clean, responsive UIs using <span className="font-medium">React</span>, <span className="font-medium">Tailwind CSS</span>, and modern <span className="font-medium">JavaScript</span>.
  </p>

  <p className="mt-4">
    I enjoy turning ideas into smooth digital experiences, with a growing interest in <span className="font-medium">MERN</span>, <span className="font-medium">Java</span> and <span className="font-medium">AI</span>. Off-screen, I love playing chess and listening to music that fuels my creativity.
  </p>

  <p className="mt-4">
    I believe in learning by doing and constantly pushing my limits through real-world projects.
  </p>
</div>



            </div>

<div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#090e15] text-slate-100 text-left">
  {/* Fake tab bar */}
  <div className="flex items-center justify-between px-4 py-2 bg-[#2a2d3a] text-sm text-slate-300 font-medium">
    <div className="flex items-center gap-3">
      <span className="bg-[#595a5e] px-3 py-1 rounded-md text-yellow-400">
        profile.js
      </span>
      
      </div>
    <span className="text-xs">JavaScript</span>
  </div>

  {/* Code block */}
  <div className="px-6 py-6 font-mono text-sm md:text-base overflow-auto leading-loose whitespace-pre text-left">
  {/* Profile Object */}
  <code className="block text-yellow-300">
    let <span className="text-orange-400">profile</span> ={" "}
    <span className="text-yellow-300">&#123;</span>
  </code>
  <code className="block">
    &nbsp;&nbsp;<span className="text-green-400">name</span>:{" "}
    <span className="text-cyan-300">"Ritesh Ravindra More"</span>,
  </code>
  <code className="block">
    &nbsp;&nbsp;<span className="text-green-400">job</span>:{" "}
    <span className="text-cyan-300">"Developer"</span>,
  </code>
  <code className="block">
    &nbsp;&nbsp;<span className="text-green-400">education</span>:{" "}
    <span className="text-cyan-300">"MCA"</span>,
  </code>
  <code className="block">
    &nbsp;&nbsp;<span className="text-green-400">location</span>:{" "}
    <span className="text-cyan-300">"Mumbai"</span>
  </code>
  <code className="block text-yellow-300">&#125;</code>

  {/* Fun Function */}
  <code className="block mt-6 text-green-400">
    <span className="text-fuchsia-400">async function</span>{" "}
    <span className="text-orange-400">startDay</span>() {"{"}
  </code>
  <code className="block pl-4 text-green-400">
    <span className="text-blue-400">await</span>{" "}
    <span className="text-pink-400">makeCoffee</span>();
  </code>
  <code className="block pl-4 text-green-400">
    <span className="text-blue-400">await</span>{" "}
    <span className="text-pink-400">writeCode</span>();
  </code>
  <code className="block pl-4 text-green-400">
    <span className="text-blue-400">return</span>{" "}
    <span className="text-amber-300">"✨ Mission accomplished!"</span>;
  </code>
  <code className="block text-green-400">{"}"}</code>
</div>

</div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-10 md:pt-20">
  <div className="m-5 mt-10">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-light-text dark:text-dark-text hover:tracking-widest transition-all duration-300">
            Skills
          </h2>

    <div className="p-4 md:p-6 lg:p-12 text-base md:text-xl text-left text-dark-text dark:text-light-text rounded-xl">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="animate-bubble-pop"
            whileInView={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Skills img={skill.img} imgtitle={skill.imgtitle} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>



      <section id="projects">
        <div className="m-5 mt-10 p-4 md:p-6 h-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-light-text dark:text-dark-text hover:tracking-widest transition-all duration-300">
            Projects
          </h2>
 <div className="p-4 md:p-6 lg:p-12 text-base md:text-xl text-left text-dark-text dark:text-light-text rounded-xl">
            <div className="p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="flex justify-center">
                    <div className="max-w-xl min-w-60 bg-white border-2 border-gray-200 rounded-lg shadow:black shadow-lg dark:bg-slate-950 dark:border-gray-800">
                      <div className="relative overflow-hidden rounded-t-lg h-48">
                        <img
                          className="absolute cursor-pointer inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-125"
                          src={project.image}
                          alt={project.title}
                        />
                      </div>
                      <div className="p-5">
                        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                          {project.title}
                        </h5>
                        <p className="mb-3 font-normal text-slate-900 dark:text-stone-300">
                          {project.description}
                        </p>
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex pulsate-bck text-white items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800"
                          >
                            See Live
                          </a>
                        )}
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex text-white mx-2 items-center px-3 py-2 text-sm font-medium text-center bg-dark-gradient dark:text-black dark:bg-light-gradient rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-white-700 dark:focus:ring-pink-800"
                        >
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

<section id="contact" className="py-16 px-4 md:px-12 scroll-mt-16">
  {/* Title */}
   <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-light-text dark:text-dark-text hover:tracking-widest transition-all duration-300">
            Contact Me
          </h2>


  {/* Card */}
  <div className="mx-auto max-w-6xl rounded-2xl dark:bg-light-gradient bg-dark-gradient shadow-xl backdrop-blur-sm">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Illustration */}
      <div className="flex items-center justify-center p-6">
        <img
          src={contactlight}
          alt="Contact illustration"
          className="w-3/4 md:w-full max-w-xs rounded-full shadow-lg"
          loading="lazy"
        />
      </div>

      {/* Form */}
      <div className="p-6 md:p-10">
        <form
          className="flex flex-col space-y-4 text-left"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Name */}
          <label
            htmlFor="name"
            className="block text-sm font-medium text-dark-text dark:text-light-text"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
            className="mt-1 px-4 py-2 w-full rounded-lg border border-gray-300 bg-white  text-gray-900  focus:ring-2 focus:ring-rose-400 focus:outline-none"
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-dark-text dark:text-light-text"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            required
            className="mt-1 px-4 py-2 w-full rounded-lg border border-gray-300 bg-white  text-gray-900   focus:ring-2 focus:ring-rose-400 focus:outline-none"
          />

          {/* Message */}
          <label
            htmlFor="message"
            className="block text-sm font-medium text-dark-text dark:text-light-text"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can I help you?"
            required
            className="mt-1 px-4 py-2 w-full rounded-lg border border-gray-300 bg-white  text-gray-900  resize-none focus:ring-2 focus:ring-rose-400 focus:outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-light-gradient dark:bg-dark-gradient px-6 py-3 text-slate-950 dark:text-white font-semibold tracking-wide shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-rose-500 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {!!status && (
            <div
              className={`mt-2 text-center text-sm font-medium rounded-lg px-4 py-2 ${
                statusType === "success"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-200/20 dark:text-emerald-300"
                  : "bg-red-100 text-red-700 dark:bg-red-400/20 dark:text-red-300"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
</section>




       </>
  );
}
