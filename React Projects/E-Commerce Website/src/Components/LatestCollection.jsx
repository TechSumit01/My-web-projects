import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <>
      <div className="my-10 ">
        <div className=" flex items-center flex-col gap-2 py-8 ">
          <h1 className="text-3xl md:text-4xl text-gray-500 flex gap-2 ">
            LATEST <p className="text-gray-800 ">COLLECTIONS </p>
          </h1>
          <p className="mx-4 text-sm lg:mx-32 text-center text-gray-500 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 ">
          {latestProducts.map((v, i) => {
            return (
              <ProductItem
                key={i}
                id={v._id}
                name={v.name}
                image={v.image}
                price={v.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LatestCollection;
