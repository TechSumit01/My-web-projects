import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
import { Link } from "react-scroll";

import NavMenu from "./NavMenu";
import Social from "./Social";

const NavBar = () => {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <>
      <nav
        className="flex items-center justify-between overflow-hidden py-4 "
        // data-aos="fade-down"
      >
        <img src={logo} alt="" className="w-28 mt-3 " />
        <img
          onClick={() => setMenuBar(!menuBar)}
          src={menu_open}
          alt="menu "
          className=" block md:hidden"
        />

        {/* This is for side menubar  */}
        <div
          className={`relative top-0 left-0 w-[70%] h-screen bg-slate-950 px-10 pt-16 transition-all duration-700 z-[9999] ${
            menuBar ? "block" : "hidden"
          }`}
        >
          <img
            onClick={() => setMenuBar(!menuBar)}
            src={menu_close}
            alt="menu_close"
            className=" mb-4 w-6  "
          />
          <ul className=" cursor-pointer flex flex-col gap-6 text-base font-medium ">
            <NavMenu />
          </ul>

          <div className="flex gap-4 mt-5 md:hidden text-3xl">
            <Social />
            {/* Add more icons similarly */}
          </div>
        </div>

        <ul className="  transition-all hidden md:flex items-center gap-6 text-base font-medium ">
          <NavMenu />
        </ul>

        {/* This is social icons/links  */}

        <div className="hidden md:flex gap-4 text-3xl">
          <Social />
          {/* Add more icons similarly */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
