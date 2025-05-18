import React, { useContext, useState } from "react";
import "../index.css";
import { assets } from "../asset/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const NavBar = () => {
  const { cartItems } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const closeSidebar = () => {
    setVisible(false);
  };

  return (
    <>
      <header>
        <nav className="py-6 flex items-center justify-between font-medium">
          <Link to={"/"}>
            <img src={assets.logo} alt="logo" className="w-36" />
          </Link>

          <ul className="hidden sm:flex items-center gap-10  ">
            <NavLink to={"/"} className="flex flex-col items-center">
              <p>Home</p>
              <hr className="hidden border-b-[1.5] border-gray-700 w-1/2 " />
            </NavLink>
            <NavLink to={"/collection"} className="flex flex-col items-center">
              <p>Collection</p>
              <hr className="hidden border-b-[1.5] border-gray-700 w-1/2 " />
            </NavLink>
            <NavLink to={"/about"} className="flex flex-col items-center">
              <p>About</p>
              <hr className="hidden border-b-[1.5] border-gray-700 w-1/2 " />
            </NavLink>
            <NavLink to={"/contact"} className="flex flex-col items-center">
              <p>Contact</p>
              <hr className="hidden border-b-[1.5] border-gray-700 w-1/2 " />
            </NavLink>
          </ul>

          <div className=" flex items-center gap-5 ">
            <Link to={"/collection"}>
              <img src={assets.search_icon} alt="search_icon" className="w-5" />
            </Link>
            <div className="group relative flex items-center gap-5 ">
              <Link to={"/login"}>
                <img
                  src={assets.profile_icon}
                  alt="profile_icon"
                  className="w-5"
                />
              </Link>
              {/* This is Dropdown Menu  */}
              <div className=" absolute hidden group-hover:block   right-12 top-6 bg-gray-100 w-28 ">
                <div className=" flex flex-col gap-2 text-gray-500 items-center py-4 px-4 ">
                  <p className=" cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer  hover:text-black ">Orders</p>
                  <p className=" cursor-pointer hover:text-black  ">Logout</p>
                </div>
              </div>
              <Link to={"/cart"} className="relative">
                <img
                  src={assets.cart_icon}
                  alt="cart_icon"
                  className="w-5 min-w-5"
                />
                <p className=" bg-black text-white text-center text-[8px] w-4 h-4 pt-[1.5px] rounded-full absolute top-3 left-2">
                  {cartItems.length}
                </p>
              </Link>
              <img
                onClick={() => setVisible(!visible)}
                src={`${visible ? assets.dropdown_icon : assets.menu_icon}`}
                alt="menu_icon"
                className="w-4 min-w-5 sm:hidden"
              />
            </div>
            {/* Sidebar menu for sm screen  */}

            <div
              className={`sm:hidden bg-gray-100 absolute top-16 left-0 right-0  overflow-hidden py-4 transition-all ${
                visible ? "w-full" : "w-0"
              }`}
            >
              <div className="flex  flex-col gap-3 ">
                <NavLink
                  onClick={closeSidebar}
                  className=" sidebar-menu "
                  to={"/"}
                >
                  HOME
                </NavLink>
                <NavLink
                  onClick={closeSidebar}
                  className=" sidebar-menu "
                  to={"/collection"}
                >
                  COLLECTION
                </NavLink>
                <NavLink
                  onClick={closeSidebar}
                  className=" sidebar-menu "
                  to={"/about"}
                >
                  ABOUT
                </NavLink>
                <NavLink
                  onClick={closeSidebar}
                  className="sidebar-menu "
                  to={"/contact"}
                >
                  CONTACT
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
