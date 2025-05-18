import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((items) => items.bestseller);
    setBestSeller(bestProducts);
  }, []);
  return (
    <>
      <div className="my-10">
        <div className=" flex items-center flex-col gap-2 py-8 ">
          <h1 className="text-3xl md:text-4xl text-gray-500 flex gap-2 ">
            Best <p className="text-gray-800 ">SELLERS </p>
          </h1>
          <p className="mx-4 text-sm lg:mx-32 text-center text-gray-500 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
          {bestSeller.map((v, i) => (
            <ProductItem
              key={i}
              id={v._id}
              image={v.image}
              name={v.name}
              price={v.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
