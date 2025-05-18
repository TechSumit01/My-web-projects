import React, { useContext, useEffect, useState } from "react";
import { assets } from "../asset/frontend_assets/assets";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../Components/ProductItem";

const Products = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const { addToCart } = useContext(ShopContext);
 

  const [productDetail, setProductDetail] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const fetchProductDetails = () => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProductDetail(selectedProduct);

      // ✅ Fetch related inside this block to ensure correct timing
      const related = products
        .filter(
          (item) =>
            item.category === selectedProduct.category &&
            item._id !== selectedProduct._id
        )
        .slice(0, 5);
      setRelatedProducts(related);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [products, productId]);

  return (
    <>
      <hr />
      <div className="pt-10 transition-opacity ease-in-out duraton-500 opacity-100 ">
        {/* Here it will display product image and info  */}
        <div className=" flex flex-1 flex-col sm:flex-row gap-12  ">
          <div className="flex  flex-col-reverse sm:flex-row gap-3 ">
            <img
              className=" w-20 h-24"
              src={productDetail.image}
              alt="product-imge"
            />
            <div className=" w-full sm:w-[70%] ">
              <img
                className=" w-full h-auto"
                src={productDetail.image}
                alt=""
              />
            </div>
          </div>
          <div className="flex-1  flex flex-col gap-3">
            <h1 className="text-2xl mt-4 text-black ">{productDetail.name}</h1>
            <div className="flex gap-2 ">
              <img src={assets.star_icon} alt="" />
              <p className=" ">(122)</p>
            </div>
            <p className=" text-2xl text-black font-medium ">
              {currency} {productDetail.price}
            </p>
            <p className="text-gray-500 text-base mb-2 md:w-4/5 ">
              {productDetail.description}
            </p>
            <div className=" ">
              <p className=" ">Select Size</p>
              <div className="flex gap-4 font-medium my-3 ">
                <button className=" border border-gray-400 bg-gray-50 px-4  py-2 ">
                  S
                </button>
                <button className=" border border-gray-400 bg-gray-50 px-4  py-2 ">
                  M
                </button>
                <button className=" border border-gray-400 bg-gray-50 px-4  py-2 ">
                  L
                </button>
                <button className=" border border-gray-400 bg-gray-50 px-4  py-2 ">
                  XL
                </button>
                <button className=" border border-gray-400 bg-gray-50 px-4  py-2 ">
                  XXL
                </button>
              </div>
            </div>
            <button
              className=" bg-black px-4 text-sm py-4 text-white w-1/2 sm:w-1/2"
              onClick={() => addToCart(productDetail)}
            >
              ADD TO CART
            </button>
            <hr className=" my-4" />
            <div className="flex flex-col gap-1 text-sm text-gray-600 ">
              <p className=" ">100% Original product.</p>
              <p className="">Cash on delivery is available on this product.</p>
              <p className="">Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        {/* Here we will display product description  */}
        <div className=" mt-20">
          <span className="test-xl font-bold text-black border border-gray-500  pb-1 pt-3 px-4 items-center ">
            Description
          </span>

          <div className="text-base text-gray-500 font-medium border border-gray-500 p-5  ">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p className="mt-4">
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>
        {/* This is for related products  */}
        <div className=" mt-20">
          <h1 className="text-xl md:text-4xl text-gray-500 flex gap-2 justify-center  ">
            RELATED <p className="text-gray-800 ">PRODUCTS </p>
          </h1>
          <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4   mt-4 ">
            {relatedProducts.map((v, i) => {
              return (
                <ProductItem
                  key={v._id}
                  id={i}
                  image={v.image}
                  name={v.name}
                  price={v.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
