import React from "react";
import images from "../constants/images";
import data from "../constants/data";

const Specal = () => {
  return (
    <>
      <div id="items" className=" p-8 md:p-12">
        <div className="flex flex-col gap-4 items-center justify-center ">
          <p className="font-medium font-cormorant text-2xl text-white ">
            Menu that fits your palatte
          </p>
          <img src={images.spoon} alt="spoon" className="w-12" />
          <h1 className="text-[#dcca87] text-6xl md:text-7xl font-medium font-cormorant ">
            Today's Special
          </h1>
        </div>
        <div className=" flex flex-col md:flex-row items-center gap-8 md:gap-4 mt-10 mb-10 ">
          <section className="w-full md:w-2/5 items-center ">
            <h1 className="text-4xl ml-24 font-medium font-cormorant text-white ">
              Wine & Beer
            </h1>
            {/* all items are mentioned here  */}
            <div className="flex flex-col  items-center gap-2 mt-8  ">
              {data.wines.map((v, i) => {
                return (
                  <div className="mb-4" key={i}>
                    <p className="text-[#dcca87] font-cormorant text-2xl font-semibold ">
                      {v.title} <span className="text-white">-------</span>{" "}
                      {v.price}
                    </p>
                    <p className="text-lg ">{v.tags}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="flex justify-center   ">
            <img src={images.menu} alt="" className="w-full md:w-[80%]" />
          </section>

          <section className=" w-full md:w-2/5 mt-8  ">
            <h1 className="text-5xl font-medium ml-24 font-cormorant text-white ">
              Cocktails
            </h1>
            {/* all items are mentioned here  */}

            <div className="flex flex-col items-center gap-2 mt-8  ">
              {data.wines.map((v, i) => {
                return (
                  <div className="mb-4 " key={i}>
                    <p className="text-[#dcca87] font-cormorant text-2xl font-semibold ">
                      {v.title} <span className="text-white">-------</span>{" "}
                      {v.price}
                    </p>
                    <p className="text-lg ">{v.tags}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <button className=" btn text-center ml-[35%] md:ml-[45%] ">
          Know More
        </button>
      </div>
    </>
  );
};

export default Specal;
