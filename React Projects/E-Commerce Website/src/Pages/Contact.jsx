import React from "react";
import { assets } from "../asset/frontend_assets/assets";
import Subscribe from "../Components/Subscribe";

const Contact = () => {
  return (
    <>
      <hr />
      <div className="mt-10 ">
        <h1 className="text-xl md:text-2xl text-gray-500 flex gap-2 items-center  ">
         CONTACT <p className="text-gray-800 text-center ">US </p>
        </h1>
        <div className=" flex flex-col sm:flex-row gap-10 items-center  my-10 ">
          <img className="w-full sm:w-1/2" src={assets.contact_img} alt="" />
          <div className="w-full sm:w-1/2 flex flex-col  gap-6 ">
            <h2 className="text-xl text-gray-700 font-medium ">OUR STORES</h2>
            <p className=" text-base text-gray-400 ">
              54709 Willms Station <br /> Suite 350, Washington, USA
            </p>
            <p className=" text-base text-gray-400 ">
              Tel: (415) 555-0132 <br /> Email: admin@forever.com
            </p>
            <h2 className="text-xl text-gray-700 font-medium ">
              Careers at Forever{" "}
            </h2>
            <p className="text-base text-gray-400  ">Learn more about our teams and job openings.</p>
            <button className="w-1/2 py-3 hover:transition-all border border-black hover:bg-black hover:text-white ">
              Explore Jobs
            </button>
          </div>
        </div>
        <Subscribe />
      </div>
    </>
  );
};

export default Contact;
