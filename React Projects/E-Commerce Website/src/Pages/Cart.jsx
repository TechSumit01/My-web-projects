import React, { createRef, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../asset/frontend_assets/assets";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { cartItems, currency, removeFromCart, delivery_fee } =
    useContext(ShopContext);
  const [productPrice, setProductPrice] = useState();
  console.log(productPrice);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setProductPrice(cartItems);
  }, [cartItems]);

  return (
    <>
      <hr />
      <div className=" mt-10 ">
        <h1 className="text-lg md:text-2xl text-gray-500 flex gap-2   ">
          YOUR <p className="text-gray-800  ">CARTS </p>
        </h1>

        {cartItems.length === 0 ? (
          <p> PLEASE ADD SOME ITEMS </p>
        ) : (
          <div>
            {cartItems.map((v, i) => {
              return (
                <div
                  className=" flex items-center justify-between gap-4 border-b pb-4 border-gray-500 my-8 "
                  key={i}
                  id={v._id}
                >
                  <div className="flex gap-6  mt-5 ">
                    <img
                      className="w-20 sm:w-[8vw] h-auto"
                      src={v.image}
                      alt=""
                    />
                    <div className=" flex flex-col gap-4  ">
                      <h2 className=" text-sm font-light  sm:text-x text-black sm:font-medium">
                        {v.name}
                      </h2>
                      <div className="flex gap-8 items-center ">
                        <p className=" ">
                          {currency}
                          {v.price}
                        </p>
                        <button className="  border border-gray-300 bg-gray-50 sm:px-4 px-3 py-1  sm:py-2   ">
                          L
                        </button>
                      </div>
                    </div>
                  </div>
                  <input
                    className="border border-gray-400 w-12 sm:w-16 py-1 px-2  "
                    type="number"
                    min={1}
                    value={1}
                  />
                  <img
                    onClick={() => removeFromCart(v._id)}
                    className=" w-5 "
                    src={assets.bin_icon}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-20 ">
          <h1 className="text-3xl md:text-2xl text-gray-500 flex gap-2   ">
            CART <p className="text-gray-800 ">TOTALS </p>
          </h1>
          <div className=" flex flex-col gap-3 mt-10 pb-3 ">
            <div className="border-b border-gray-500 flex justify-between  ">
              <span>SubTotal</span>
              <span>
                {currency}50 .00
              </span>
            </div>
            <div className=" flex justify-between items-center  border-b pb-3 border-gray-500">
              <span>Shipping Fee</span>
              <span>
                {currency} {delivery_fee} .00
              </span>
            </div>
            <div className="flex justify-between  text-black font-medium text-xl border-b pb-3 border-gray-500 ">
              <span>Total</span>
              <span> </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
