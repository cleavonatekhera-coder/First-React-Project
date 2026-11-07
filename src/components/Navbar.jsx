
function Navbar() {
  return (
    <nav className="navbar">
      {/* Website Logo */}
      <div className="logo">
        Cleavon's<span>Portfolio</span>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </div>

      {/* Contact Button */}
      <a href="#contact" className="nav-button">
        Let's Talk 
      </a>
    </nav>
  );
}

export default Navbar;
