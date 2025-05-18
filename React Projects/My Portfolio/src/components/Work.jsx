import React from "react";
import work from "../assets/mywork_data";
import arrow from "../assets/arrow_icon.svg";
import eye from "../assets/eye.svg";

const Work = () => {
  return (
    <div id="work" className="mt-20">
      <h1 className="text-4xl md:text-5xl text-center font-medium">
        LATEST WORK
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 z-50 my-8">
        {work.map((v, i) => (
          <a
            data-aos="fade-up"
            data-aos-delay={`${i * 100}`}
            href={v.w_link}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <img
              src={v.w_img}
              alt={v.w_name}
              className="rounded-md border-2 w-full h-60 object-cover transition-all duration-300 group-hover:opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <img src={eye} alt="eye-preview" className="w-10 h-10" />
            </div>
          </a>
        ))}
      </div>

      <button className="flex items-center text-center mx-auto gap-3 text-lg font-medium bg-transparent border-2 border-white rounded-full py-3 px-8">
        Show More <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Work;
