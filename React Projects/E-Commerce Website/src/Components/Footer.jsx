import React from "react";
import { assets } from "../asset/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" mt-20 sm:mt-40  ">
        <div className=" flex flex-col sm:flex-row justify-between gap-10 mb-12 ">
          <div>
            <img className="w-28 mb-6" src={assets.logo} alt="logo" />
            <p className="text-gray-500 text-sm font-normal w-3/4 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-black mb-6 font-medium">COMPANY</h2>
            <ul className="text-gray-500 text-sm font-normal  flex flex-col gap-2">
              <Link to={"/"}> Home</Link>
              <Link to={"/about"}>About us</Link>
              <li>Carrier</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-black mb-6 font-medium">
              GET IN TOUCH
            </h2>
            <p className="text-gray-500  text-sm font-normal ">
              +1-000-000-0000
            </p>
            <p className="text-gray-500  text-sm font-normal ">
              yash9172233@gmail.com
            </p>
          </div>
              </div>
              <hr />
        <div className=" py-4 ">
          <p className="text-base font-medium text-black text-center">
            Copyright 2024@ greatstack.dev - All Right Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
