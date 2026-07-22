import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <FaRobot className="logo-icon" />
        <h2 className="logo">AI Resume Matcher</h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;