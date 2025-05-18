import React from "react";
import images from "../constants/images";

const History = () => {
  return (
    <>
      <div id="about"
        className="py-20 px-8 md:px-20 bg-cover bg-center relative flex flex-col md:flex-row items-center justify-center gap-16 "
        style={{ backgroundImage: `url(${images.bg})` }}
      >
        <img src={images.G} alt="g-letter" className=" absolute w-3/4 md:w-1/4  " />
        <section className="flex flex-col gap-8 items-end z-10">
          <div className=" ">
            <h1 className="text-[#dcca87] text-7xl font-medium font-cormorant ">
              About Us
            </h1>
            <img src={images.spoon} alt="spoon" className="w-12 ml-[80%]" />
          </div>
          <p className=" text-[#aaaaaa] text-xl font-normal text-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className=" btn">Know More</button>
        </section>
        <section className=" z-10">
          <img src={images.knife} alt="knife" className=" w-3/5  md:min-w-24" />
        </section>

        <section className="flex flex-col gap-8 items-start md:items-end z-10">
          <div className=" ">
            <h1 className="text-[#dcca87] text-7xl font-medium font-cormorant ">
              Our History
            </h1>
            <img src={images.spoon} alt="spoon" className="w-12" />
          </div>
          <p className=" text-[#aaaaaa] text-xl font-normal text-start">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button className=" btn">Know More</button>
        </section>
      </div>
    </>
  );
};

export default History;
