import React from "react";
import { assets } from "../asset/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <>
      <div className="flex flex-col  sm:flex-row py-20 items-center justify-around gap-12 ">
        <div className="flex flex-col gap-2 items-center  text-center">
          <img
            className="w-11"
            src={assets.exchange_icon}
            alt="exchange-icon"
          />
          <h3 className="text-gray-900 text-base font-bold ">
            Easy Exchange Policy
          </h3>
          <p className="text-gray-400 ">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <img className="w-11" src={assets.quality_icon} alt="exchange-icon" />
          <h3 className=" text-gray-900 text-base font-bold">
            7 Days Return Policy
          </h3>
          <p className=" text-gray-400">We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col gap-2 items-center text-center ">
          <img className="w-9" src={assets.support_img} alt="exchange-icon" />
          <h3 className="text-gray-900 text-base font-bold text-center ">
            Best customer support
          </h3>
          <p className="text-gray-400 ">we provide 24/7 customer support</p>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
