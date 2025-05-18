import React from "react";
import { Link } from "react-scroll";

const NavMenu = () => {
  return (
    <>
      <Link
        to="/"
        smooth={true}
        duration={500}
        className="border-b-2 border-pink-500 "
      >
        Home
      </Link>
      <Link to="about" smooth={true} duration={500} className="nav">
        About Me
      </Link>
      <Link to="services" smooth={true} duration={700} className="nav">
        Services
      </Link>
      <Link to="work" smooth={true} duration={1000} className="nav">
        Work
      </Link>
      <Link to="contact" smooth={true} duration={1100} className="nav">
        Contact
      </Link>
    </>
  );
};

export default NavMenu;
