import React from "react";
import images from "../constants/images";

const Booking = () => {
  return (
    <>
      <div
        id="book"
        className=" mt-20 flex gap-4 items-center bg-gray-300 py-4 px-4  "
      >
        <div className="w-2/5 md:block hidden items-center ">
          <img src={images.gallery01} alt="" className="w-4/5 h-4/5" />
        </div>
        <div className=" w-full md:w-[60%] py-4">
          <form
            action="#"
            className="flex flex-col items-center justify-center gap-8"
          >
            <div className="grid grid-cols-3 gap-4">
              <input type="text" className=" booking " placeholder="  Name" />
              <input type="email" className=" booking " placeholder="  Email" />
              <input
                type="tel"
                className=" booking "
                placeholder="  Mobile number"
              />
              <input type="date" className=" booking " placeholder="  Date" />
              <input type="time" className=" booking " placeholder="  time" />
              <input
                type="number"
                className=" booking "
                placeholder=" No of people "
              />
            </div>

            <textarea
              name="message"
              id=""
              rows="4"
              placeholder="Enter any message"
              className="text-lg font-medium text-black hover:border-2 hover:border-[#dcca87] px-3 py-1 outline-none w-full"
            ></textarea>
            <button
              onClick={(e) => e.preventDefault}
              className=" btn text-center "
            >
              Book a Table
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
