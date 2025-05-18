import React, { useEffect, useState } from "react";
import images from "../constants/images";
import { Link } from "react-scroll";
import heroSlides from "../constants/heroData";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { heading, subheading, description, buttonText, image } =
    heroSlides[currentSlide];

  return (
    <div className="mt-16 px-8 md:px-20 flex flex-col md:flex-row gap-8 items-center transition-all duration-1000">
      {/* Left Section */}
      <section
        key={currentSlide}
        className="w-full md:w-1/2 flex flex-col gap-6"
      >
        {/* Subheading */}
        <div className="flex flex-col gap-2 animate-slideUp">
          <p className="text-white text-xl font-medium font-cormorant transition-opacity duration-700 delay-100">
            {subheading}
          </p>
          
          <img
            src={images.spoon}
            alt="spoon"
            className="w-12 animate-fade transition-opacity duration-700 delay-200"
          />
        </div>

        {/* Heading */}
        <h1 className="text-[#dcca87] lg:text-8xl text-6xl md:text-7xl font-medium font-cormorant animate-slideUp transition-opacity duration-700 delay-300">
          {heading}
        </h1>

        {/* Description */}
        <p className="text-white text-lg md:text-xl font-normal animate-fade transition-opacity duration-700 delay-500">
          {description}
        </p>

        {/* Button */}
        <Link to="items" smooth={true} duration={500}>
          <button className="bg-[#dcca87] px-4 py-2 border-none text-black w-36 mt-2 hover:bg-[#cbb872] transition duration-300 animate-slideUp delay-700">
            {buttonText}
          </button>
        </Link>
      </section>

      {/* Right Image Section */}
      <section
        key={currentSlide + "-image"}
        className="w-full md:w-1/2 mt-8 animate-fade transition duration-1000"
      >
        <img
          src={image}
          alt="slide"
          className="md:ml-14 md:w-[85%] rounded-xl shadow-lg object-cover transition-all duration-1000"
        />
      </section>
    </div>
  );
};

export default Hero;
