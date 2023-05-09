import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../assets/logo.png";

export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <img src={Logo} alt="logo" className="logo" />
        <nav className="navbar" ref={navRef}>
          <a href="#home" className="nav-group">
            Home
          </a>
          <a href="#about" className="nav-group">
            About
          </a>
          <a href="#skills" className="nav-group">
            Skills
          </a>
          <a href="#projects" className="nav-group">
            Projects
          </a>
          <a href="#contact" className="nav-group">
            Contact
          </a>
          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </nav>
        <button onClick={showNavbar} className="nav-btn">
          <FaBars />
        </button>
      </header>
    </>
  );
};
