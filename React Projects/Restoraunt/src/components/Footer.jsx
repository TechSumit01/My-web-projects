import React from "react";
import images from "../constants/images";

const Footer = () => {
  return (
    <>
      <div id="footer" className="flex flex-col gap-8 items-center justify-center mt-20 pb-10 ">
        <p className="font-medium font-cormorant text-white text-4xl ">
          Contact Us
        </p>
        <div className=" text-lg flex flex-col items-center justify-center gap-4">
          <p className=" ">IET Campus Ayodhya</p>
          <p className="">91+ 9172239183</p>
          <p className=""> 91+ 3792973927</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-4 ">
          <img src={images.gericht} alt="" className="w-1/2" />
          <p className=" ">
            The best way to find yourself is to lose yourself in the service of
            others."
          </p>
          <img src={images.spoon} alt="spoon" className="w-12" />
          <ul className="flex gap-4 items-center ">
            <li>
              <a href="#">
                <img src={images.facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <img src={images.instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <img src={images.twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <img src={images.whatsapp} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className=" ">2025 Gericht. All Rights reserved.</div>
      </div>
    </>
  );
};

export default Footer;
