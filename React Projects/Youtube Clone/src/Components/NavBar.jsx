import React, { useState } from "react";
import "../Components/index.css";
import "../Components/media1.css"
import menu_bar from "../assets/menu.png";
import logo from "../assets/logo.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import jackProfile from "../assets/jack.png";
import { Link } from "react-router-dom";

const NavBar = ({ setSideBar }) => {
  return (
    <>
      <nav>
        <div className="left-nav ">
          <img
            className=" menu-bar"
            src={menu_bar}
            alt="menubar"
            onClick={() => setSideBar((prev) => !prev)} // ✅ Correct
          />
          <Link to={"/"}>
            <img className="logo " src={logo} alt="logo" />
          </Link>
        </div>
        <div className="middle-nav ">
          <div className="search-bar">
            <input type="text" placeholder=" Search..." />
            <img src={search_icon} alt="search_icon" />
          </div>
        </div>
        <div className="right-nav ">
          <img src={upload_icon} alt="upload_icon" />
          <img src={more_icon} alt="more_icon" />
          <img src={notification_icon} alt="notificato" />
          <img className="profile" src={jackProfile} alt="profile" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
