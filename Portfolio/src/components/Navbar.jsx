import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="title">Srishti's Portfolio</h2>

      <ul className="links">
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a href="#wall">Wall</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
