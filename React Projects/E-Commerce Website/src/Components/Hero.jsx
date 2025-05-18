import React from "react";
import { assets } from "../asset/frontend_assets/assets";

const Hero = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row border border-gray-500 ">
        {/* left section  */}
        <section className="w-full justify-center flex items-center flex-col gap-4 sm:w-1/2 text-[#414141] py-10 sm:py">
          <div className=" flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
            <p className="text-base  ">Our BestSellers</p>
          </div>
          <h1 className="text-4xl prata-regular ">Latest Arrivals</h1>
          <div className="flex items-center  gap-2">
            <p className="text-base ">Shop Now</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
          </div>
        </section>
        <section className="sm:w-1/2  w-full">
          <img className="w-full" src={assets.hero_img} alt="hero" />
        </section>
      </div>
    </>
  );
};

export default Hero;
