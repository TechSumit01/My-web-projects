import React from "react";
import images from "../constants/images";
import video1 from "../assets/meal.mp4";

const Chef = () => {
  return (
    <>
      <div
        id="chef"
        className="pt-20 px-8 md:px-20 bg-cover bg-center relative flex flex-col md:flex-row flex-wrap items-center justify-center gap-16 "
        style={{ backgroundImage: `url(${images.bg})` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 ">
          <section className="w-full md:w-[50%] ">
            <img
              src={images.chef}
              alt="chef-image"
              className="w-full md:w-4/5"
            />
          </section>

          <section className="w-full md:w-[50%] flex flex-col gap-6  ">
            <div className="flex flex-col gap-4  ">
              <p className="font-medium font-cormorant text-2xl text-white ">
                Menu that fits your palatte
              </p>
              <img src={images.spoon} alt="spoon" className="w-12" />
              <h1 className="text-[#dcca87] mt-2 text-6xl md:text-7xl font-medium font-cormorant ">
                What we believe in
              </h1>
            </div>
            <div className=" flex gap-6 mt-5 ">
              <img src={images.quote} alt="" className="w-10 h-10" />
              <p className="text-white text-xl  font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit
              </p>
            </div>
            <p className="text-white text-xl  font-normal">
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
            <div className=" ">
              <h2 className="text-[#dcca87] text-2xl font-cormorant ">
                Kevin Luo
              </h2>
              <p className="text-xl font-normal ">Chef & Founder</p>
            </div>
            <img src={images.sign} alt="" className="w-1/4 " />
          </section>
        </div>

        <video src={video1} autoPlay mute controls className="w-full"></video>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16  ">
          <section className=" w-full md:w-[50%]">
            <div className="flex flex-col gap-4  ">
              <p className="button text-2xl text-white ">
                Awards & recognition
              </p>
              <img src={images.spoon} alt="spoon" className="w-12" />
              <h1 className="text-[#dcca87] mt-2 text-6xl md:text-7xl font-medium font-cormorant ">
                Our Laurels
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-10 ">
              <div className="flex gap-4 ">
                <img src={images.award01} alt="" className="w-1/4 h-1/2 " />
                <div className="flex flex-col gap-2 ">
                  <p className="text-[#dcca87] font-cormorant text-2xl font-semibold ">
                    Bib Gourmond
                  </p>
                  <p className="text-white text-xl  font-normal ">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 ">
                <img src={images.award02} alt="" className=" w-1/4 h-1/2" />
                <div className=" flex flex-col gap-2">
                  <p className="text-[#dcca87] font-cormorant text-2xl font-semibold ">
                    Bib Gourmond
                  </p>
                  <p className="text-white text-xl  font-normal ">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 ">
                <img src={images.award03} alt="" className=" w-1/4 h-1/2" />
                <div className="flex flex-col gap-2 ">
                  <p className="text-[#dcca87] font-cormorant text-2xl font-semibold ">
                    Bib Gourmond
                  </p>
                  <p className="text-white text-xl  font-normal ">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 ">
                <img src={images.award05} alt="" className=" w-1/4 h-1/2" />
                <div className=" flex flex-col gap-2">
                  <p className=" text-[#dcca87] font-cormorant text-2xl font-semibold">
                    Bib Gourmond
                  </p>
                  <p className="text-white text-xl  font-normal ">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full md:w-[50%] ">
            <img src={images.laurels} alt="food" className=" w-full md:w-4/5" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Chef;
