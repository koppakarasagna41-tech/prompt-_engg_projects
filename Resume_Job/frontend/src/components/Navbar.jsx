import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <FaRobot className="logo-icon" />
        <h2 className="logo">AI Resume Matcher</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;