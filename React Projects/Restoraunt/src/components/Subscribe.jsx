import React from 'react'
import images from '../constants/images';

const Subscribe = () => {
    return (
      <>
        <div className="mt-14 ">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="font-medium font-cormorant text-2xl text-white ">
              Newsletter
            </p>
            <img src={images.spoon} alt="spoon" className="w-12" />
            <h1 className="text-[#dcca87] text-6xl md:text-7xl font-medium font-cormorant ">
              Subscribe To Our Newsletter
            </h1>
            <p className="text-white text-lg font-normal ">
              And never miss latest Updates!
            </p>
          </div>
        </div>
      </>
    );
}

export default Subscribe