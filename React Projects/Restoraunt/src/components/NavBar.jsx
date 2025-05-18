import React, { useState } from "react";
import images from "../constants/images";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className=" flex items-center justify-between px-4 md:px-12 md:pt-4 pt-2 relative ">
        <img src={images.gericht} alt="logo" className=" w-36" />

        <ul
          className={` hidden md:flex gap-6  items-center text-white text-lg font-normal  `}
        >
          <NavLink className="hover:text-[#dcca87] " to={"/"}>
            HOME
          </NavLink>
          <div className="relative group">
            <NavLink
              to="/pages"
              className=" text-white hover:text-[#dcca87] cursor-pointer"
            >
              PAGES
            </NavLink>
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-black w-56 px-6 py-4">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-[#dcca87] py-2"
              >
                About us
              </Link>
              <Link to="/services" className="hover:text-[#dcca87] py-2">
                Services
              </Link>
              <Link
                to="chef"
                smooth={true}
                duration={600}
                className="hover:text-[#dcca87] py-2"
              >
                Team
              </Link>
              <Link to="/faq" className="hover:text-[#dcca87] py-2">
                FAQ
              </Link>
            </div>
          </div>

          <Link
            className="hover:text-[#dcca87] "
            to="footer"
            smooth={true}
            duration={800}
          >
            CONTACT US
          </Link>
          <div className="relative group">
            <NavLink to="/blogs" className="text-white hover:text-[#dcca87] ">
              BLOGS
            </NavLink>
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-black w-56 px-6 py-4">
              <Link to="/blog1" className="hover:text-[#dcca87] py-2">
                Blog 1
              </Link>
              <Link to="/blog2" className="hover:text-[#dcca87] py-2">
                Blog 2
              </Link>
            </div>
          </div>
        </ul>
        <div className="flex gap-6 items-center ">
          <button className="bg-[#dcca87] px-4 py-2 border-none text-black w-36 text-lg  ">
            Login/SignUp
          </button>
          <GiHamburgerMenu
            onClick={() => setShowMenu(!showMenu)}
            size={30}
            color="black"
            className="block md:hidden"
          />

          <Link
            to="book"
            smooth={true}
            duration={1000}
            className="cursor-pointer text-white"
          >
            Book Now
          </Link>
        </div>

        {/* drop down menu bar  */}

        <ul
          className={`flex flex-col gap-6 items-center absolute top-0 left-0 w-full  bg-black py-8 md:hidden ${
            showMenu
              ? "block  justify-center z-50  gap-8 bg-black text-[#dcca87] top-16  transition-all  absolute  "
              : "hidden "
          }`}
        >
          <MdOutlineRestaurantMenu
            size={30}
            className=" ml-[80%] text-[#dcca87"
            onClick={() => setShowMenu(!showMenu)}
          />
          <div className="flex flex-col gap-6 items-center text-[#dcca87] text-lg py-8 mb-8 ">
            <Link to={"/"} className="cursor-pointer hover:text-[#dcca87]">
              Home
            </Link>
            <Link to={"/about"} className="cursor-pointer hover:text-[#dcca87]">
              About
            </Link>
            <Link
              to={"/services"}
              className="cursor-pointer hover:text-[#dcca87]"
            >
              Services
            </Link>
            <Link
              to={"/contact"}
              className="cursor-pointer hover:text-[#dcca87]"
            >
              Contact
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
