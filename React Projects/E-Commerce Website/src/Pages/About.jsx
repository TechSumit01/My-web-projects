import React from "react";
import { assets } from "../asset/frontend_assets/assets";
import Subscribe from "../Components/Subscribe";

const About = () => {
  return (
    <>
      <hr />
      <div className=" flex flex-col mt-6  ">
        <h1 className="text-xl md:text-2xl text-gray-500 flex gap-2 items-center  ">
          ABOUT <p className="text-gray-800 text-center ">US </p>
        </h1>

        <div className="flex flex-col sm:flex-row gap-16 my-10">
          <div className="w-full sm:w-1/2">
            <img src={assets.about_img} alt="" />
          </div>
          <div className=" w-full sm:w-1/2 flex flex-col gap-3 text-base text-gray-500 ">
            <p className=" ">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className=" ">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <h3 className="text-lg text-gray-800 ">Our Mission</h3>
            <p className=" ">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
        <h1 className="text-xl md:text-2xl text-gray-500 flex gap-2 text-center py-6  ">
          WHY <p className="text-gray-800 text-center ">CHOOSE US ! </p>
        </h1>
        <div className="flex flex-col sm:flex-row text-center  items-center mb-16 ">
          <div className=" flex flex-col gap-3  items-center border border-gray-400 px-14 py-16 sm:py-24 text-gray-400 text-sm ">
            <h3 className=" text-base text-black font-medium">
              Quality Assurance:
            </h3>
            <p className=" ">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className=" flex flex-col gap-3 border border-gray-400 px-14 py-16 sm:py-24 text-gray-400 text-sm  ">
            <h3 className="text-base text-black font-medium ">
              Quality Assurance:
            </h3>
            <p className=" ">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className=" flex flex-col gap-3 border border-gray-400 px-14 py-16 sm:py-24 text-gray-400 text-sm  ">
            <h3 className="text-base text-black font-medium ">
              Quality Assurance:
            </h3>
            <p className=" ">
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
        <Subscribe />
      </div>
    </>
  );
};

export default About;
