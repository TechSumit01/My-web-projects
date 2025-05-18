import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <>
      <div className=" ">
        <Link  to={`/products/${id}`}  className="text-gray-700 " >
          <div className="overflow-hidden  ">
            <img  className="hover:scale-110 hover:transition-all " src={image} alt="cloth" />
            <p className="pt-3 text-sm ">{name}</p>
            <p className="text-gray-900 font-medium text-sm pt-2">
              {currency}
              {price}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductItem;
