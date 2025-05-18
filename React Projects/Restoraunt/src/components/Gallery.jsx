import React, { useRef } from "react";
import images from "../constants/images";

const Gallery = () => {
  const scrollRef = useRef(null); // Create a ref

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300; // Scroll left by 300px
    } else {
      current.scrollLeft += 300; // Scroll right by 300px
    }
  };

  const imageArray = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.laurels,
    images.findus,
  ];

  return (
    <div className="p-8 md:p-12">
      <div className="flex flex-col gap-4">
        <p className="font-medium font-cormorant text-2xl text-white">
          Instagram
        </p>
        <img src={images.spoon} alt="spoon" className="w-12" />
        <h1 className="text-[#dcca87] text-6xl md:text-7xl font-medium font-cormorant">
          Photo Gallery
        </h1>
        <p className="text-white text-lg font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque.
        </p>
        <button className="btn">Know More</button>
      </div>

      <div className="flex gap-6 items-center mx-10 mt-10">
        {/* Prev Button */}
        <button
          onClick={() => scroll("left")}
          className="bg-black px-2 h-8 text-[#dcca87]"
        >
          &#x2190;
        </button>

        {/* Images Scrollable Div */}
        <div
          ref={scrollRef} // Add the ref here
          className="flex gap-6 overflow-x-scroll scrollbar-hide "
        >
          {imageArray.map((image, index) => (
            <div key={index} className="relative group">
              {/* Instagram icon */}
              <img
                src={images.instagram}
                alt="instagram"
                className="absolute top-1/2 left-1/2 group-hover:flex  "
              />

              {/* Main image */}
              <img
                src={image}
                alt="gallery"
                className="min-w-64  group-hover:opacity-60 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => scroll("right")}
          className="bg-black px-2 h-8 text-[#dcca87]"
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
