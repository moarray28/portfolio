import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "/src/index.css";

const navigation = [
  { label: "About", target: "about" },
  { label: "Journey", target: "journey" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link to="hero" smooth duration={500} className="brand" onClick={closeMenu}>
          <span className="brand-mark">m.</span>
          <span>moarray</span>
        </Link>

        <div className={`nav-links${isOpen ? " nav-links-open" : ""}`}>
          {navigation.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth
              duration={500}
              offset={-76}
              onClick={closeMenu}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setIsDarkMode((mode) => !mode)}
            className="theme-toggle"
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="menu-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}
