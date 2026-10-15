import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/moarray28", icon: <FaGithub /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ritesh-more-85ba46248/",
    icon: <FaLinkedin />,
  },
  { label: "Instagram", href: "https://www.instagram.com/moarray/", icon: <FaInstagram /> },
  { label: "LeetCode", href: "https://leetcode.com/u/morray28/", icon: <SiLeetcode /> },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <a className="footer-brand" href="#hero">moarray<span>.</span></a>
        <p>Thoughtful software. Curious about what AI can make possible.</p>
        <div className="social-links">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ritesh More. All rights reserved.</span>
          <a href="#hero">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
