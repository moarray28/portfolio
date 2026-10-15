import { useState } from "react";
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
import mealmate from "../assets/mealmate.png";
import notesapp from "../assets/notesapp.png";
import Skills from "./Skills";
import toolnode from "../assets/toolnode.png";
import snlgame from "../assets/snlgame.png";
import { Link } from "react-scroll";
import contactlight from "../assets/contactlight.gif";
import gameapp from "../assets/gameapp.png";
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
    id: 6,
    image: mealmate,
    title: "E-Canteen Application",
    description:
      "Smart, queue-free food ordering with live menus, pre-ordering, and digital payments.",
    liveLink: "https://ecanteen-system.vercel.app/",
    codeLink: "https://github.com/Prajapati-Shivam/ecanteen-system",
  },
  {
    id: 3,
    image: toolnode,
    title: "Tool Renting Platform",
    description:
      "Renting platform where user can be both borrower or lender ",
    liveLink: "https://tool-node.vercel.app/",
    codeLink: "https://github.com/moarray28/ToolNode",
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
  
];

const journey = [
  {
    id: "education",
    period: "Academic foundation",
    type: "Education",
    title: "Master of Computer Applications",
    organization: "Mumbai Educational Trust's Institute of Computer Science",
    description:
      "Built a foundation in computer applications and software development, and grew an interest in solving practical problems with technology.",
    tags: ["Software development", "AI/ML"],
  },
  {
    id: "revvity",
    period: "Jan 2026 — Sep 2026",
    type: "Industry experience",
    title: "Software Engineer Intern",
    organization: "Revvity",
    description:
      "Contributed to AI integrations across Salesforce, Jira, and Confluence, and worked on AI agents for software workflows.",
    tags: ["AI integration","AI Agents","Salesforce", "Jira", "Confluence"],
  },
  {
    id: "direction",
    period: "The direction I’m building toward",
    type: "Next chapter",
    title: "AI-powered software that solves real problems",
    organization: "Software × AI",
    description:
      "Bringing product-minded software engineering and practical AI together to create applications that are genuinely useful.",
    tags: ["Applied AI", "Full-stack products", "Problem solving"],
  },
];

export default function Content() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resumeStatus, setResumeStatus] = useState("");
  const [statusType, setStatusType] = useState("success");
  const [status, setStatus] = useState("");

  const backendurl = import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      if (!backendurl) {
        throw new Error("Contact service is not configured.");
      }

      const response = await fetch(`${backendurl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("The contact request could not be sent.");
      }

      setStatus("Thanks for reaching out. Your message is on its way.");
      setStatusType("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending contact message:", error);
      setStatus("Your message could not be sent. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  const downloadResume = () => {
    setResumeStatus("");
    try {
      if (!backendurl) {
        throw new Error("Resume service is not configured.");
      }

      window.location.assign(`${backendurl}/download/resume`);
    } catch (error) {
      console.error("Error opening the resume download:", error);
      setResumeStatus("Résumé download is unavailable right now.");
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

  return (
    <>
  
    <section id="hero" className="hero section-wrap">
      <div className="hero-layout">
        {/* Text Section */}
        <div className="hero-copy">
  <p className="eyebrow"><span className="status-dot" /> Software engineering · AI applications</p>
  <h1>
    Hey, I’m Ritesh More.
    <br />
    <span>I build software</span>
    <br />
    that puts AI to work.
  </h1>

  <p className="hero-intro">
    I’m a Software Engineer exploring how AI and well-crafted applications can come together to solve real problems.
  </p>

  <div className="hero-actions">
    <Link
      to="contact"
      smooth={true}
      duration={600}
      offset={-76}
      className="button button-primary"
    >
      Let’s talk <span aria-hidden="true">↗</span>
    </Link>

    <button
      onClick={downloadResume}
      type="button"
      className="button button-secondary"
    >
      Get My Resume <span aria-hidden="true">↓</span>
    </button>
  </div>
  {resumeStatus && <p className="resume-status" role="status">{resumeStatus}</p>}
  
</div>


        {/* Profile Image (unchanged animation logic) */}
        <div className="hero-visual" onMouseMove={handleMouseMove}>
          <div className="visual-grid" />
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <img
            src={profile}
            alt="Ritesh More"
            className="profile-image"
            style={transformStyle}
          />
          <div className="visual-chip chip-top"><span className="chip-mark">AI</span> Applied intelligence</div>
          <div className="visual-chip chip-bottom"><span className="chip-mark">{"</>"}</span> Full-stack thinking</div>
          <div className="visual-index">MUMBAI, INDIA <span>·</span> BUILDING WITH PURPOSE</div>
        </div>
      </div>
      </section>

      <section id="about" className="about-section section-wrap section-space">
        <div>
          {/* Section Title */}
          <p className="eyebrow">About me</p>
          <h2 className="section-title">
            Where software<br />meets intelligence.
          </h2>

          {/* Grid Layout */}
          <div className="about-grid">
            {/* Left Panel - Description with Editor Style */}
            <div className="about-story">
              {/* Fake window bar */}
              <div className="window-bar">
                <span></span><span></span><span></span>
                <span className="window-label">A bit about me</span>
              </div>
              <div className="about-story-copy">
  <p>
    Hi, I’m <span className="font-semibold">Ritesh Ravindra More</span> from Mumbai, India. I enjoy building useful software and exploring how <span className="font-medium">AI</span> can make digital products more capable and intuitive.
  </p>

  <p className="mt-4">
    My focus is growing across both sides of the problem: thoughtful application development with <span className="font-medium">React</span>, <span className="font-medium">JavaScript</span>, and the <span className="font-medium">MERN</span> stack, alongside a deeper interest in practical AI engineering.
  </p>

  <p className="mt-4">
    I believe the best solutions are not just clever technology: they are reliable, approachable tools that help someone do something better.
  </p>
</div>



            </div>

<div className="profile-code">
  {/* Fake tab bar */}
  <div className="code-tab">
    <div className="flex items-center gap-3">
      <span className="code-file">
        profile.js
      </span>
      
      </div>
    <span className="code-language">JavaScript</span>
  </div>

  {/* Code block */}
  <div className="code-content">
  {/* Profile Object */}
  <code className="block text-yellow-300">
    let <span className="text-orange-400">profile</span> ={" "}
    <span className="text-yellow-300">&#123;</span>
  </code>
  <code className="block">
    &nbsp;&nbsp;<span className="text-green-400">name</span>:{" "}
    <span className="text-cyan-300">&quot;Ritesh Ravindra More&quot;</span>,
  </code>
  <code className="block">
    &nbsp;&nbsp;<span className="text-green-400">job</span>:{" "}
    <span className="text-cyan-300">&quot;Developer&quot;</span>,
  </code>
  <code className="block">
    &nbsp;&nbsp;<span className="text-green-400">education</span>:{" "}
    <span className="text-cyan-300">&quot;MCA&quot;</span>,
  </code>
  <code className="block">
    &nbsp;&nbsp;<span className="text-green-400">location</span>:{" "}
    <span className="text-cyan-300">&quot;Mumbai&quot;</span>
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
    <span className="text-amber-300">&quot;✨ Mission accomplished!&quot;</span>;
  </code>
  <code className="block text-green-400">{"}"}</code>
</div>

</div>

          </div>
        </div>
      </section>

      <section id="journey" className="journey-section section-wrap section-space">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">The path so far</p>
            <h2 className="section-title">A few important<br />checkpoints.</h2>
          </div>
          <p className="section-aside">
            From a foundation in software to putting AI to work in real product workflows.
          </p>
        </div>
        <div className="journey-list">
          {journey.map((item, index) => (
            <article className="journey-item" key={item.id}>
              <div className="journey-rail" aria-hidden="true">
                <span className={`journey-marker${index === 1 ? " journey-marker-featured" : ""}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < journey.length - 1 && <span className="journey-connector" />}
              </div>
              <div className="journey-card">
                <div className="journey-meta">
                  <span>{item.type}</span>
                  <time>{item.period}</time>
                </div>
                <h3>{item.title}</h3>
                <p className="journey-organization">{item.organization}</p>
                <p className="journey-description">{item.description}</p>
                <div className="journey-tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section section-space">
  <div className="section-wrap">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">Tools I work with</p>
          <h2 className="section-title">Built across the stack.</h2>
        </div>
        <p className="section-aside">A practical foundation in software development, with a growing focus on AI-powered applications.</p>
      </div>

    <div className="skills-panel">
      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.055 } },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.imgtitle}
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.94 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ y: -5, rotate: 1.5, scale: 1.025 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
          >
            <Skills img={skill.img} imgtitle={skill.imgtitle} />
          </motion.div>
        ))}
      </motion.div>
    </div>
    <div className="learning-strip"><span className="learning-icon" aria-hidden="true">✳</span><p><strong>Currently exploring</strong> AI engineering, intelligent applications, and the software that brings them to people.</p></div>
  </div>
</section>



      <section id="projects" className="projects-section section-wrap section-space">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">Ideas made tangible.</h2>
          </div>
          <a className="text-link" href="https://github.com/moarray28" target="_blank" rel="noopener noreferrer">More on GitHub <span aria-hidden="true">↗</span></a>
        </div>
 <div className="projects-grid">
                {projects.map((project) => (
                    <article key={project.id} className="project-card">
                      <a
                        className="project-image"
                        href={project.liveLink || project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                      >
                        <img
                          className="project-preview"
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                        />
                        <span className="project-arrow" aria-hidden="true">↗</span>
                      </a>
                      <div className="project-content">
                        <h3>
                          {project.title}
                        </h3>
                        <p className="project-description">
                          {project.description}
                        </p>
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            See Live <span aria-hidden="true">↗</span>
                          </a>
                        )}
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          See Code <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </article>
                ))}
        </div>
      </section>

<section id="contact" className="contact-section section-wrap section-space scroll-mt-16">
  {/* Title */}
   <div className="contact-panel">


  {/* Card */}
    <div className="contact-grid">
      {/* Illustration */}
      <div className="contact-copy">
        <p className="eyebrow">Have a good problem?</p>
        <h2 className="section-title">Let’s make<br />something useful.</h2>
        <p>Have an idea where software and AI can work better together? I’d be glad to hear about it.</p>
        <div className="contact-art-card">
          <img
            src={contactlight}
            alt="Illustration of a person at a desk receiving a message"
            className="contact-art"
            loading="lazy"
          />
        </div>
      </div>

      {/* Form */}
      <div className="contact-form-wrap">
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <label
            htmlFor="name"
            className="form-label"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setStatus("");
            }}
            placeholder="John Doe"
            required
            className="form-input"
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="form-label"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("");
            }}
            placeholder="john@example.com"
            required
            className="form-input"
          />

          {/* Message */}
          <label
            htmlFor="message"
            className="form-label"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setStatus("");
            }}
            placeholder="How can I help you?"
            required
            className="form-input form-textarea"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="button button-primary send-button"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {!!status && (
            <div
              className={`form-status ${
                statusType === "success"
                  ? "success"
                  : "error"
              }`}
              role="status"
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
